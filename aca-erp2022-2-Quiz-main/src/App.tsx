import React, { useState } from 'react';
import { questions } from './src/questions';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [showSummary, setShowSummary] = useState(false);

  const current = questions[currentIndex];

  const handleLogin = () => {
    // Simple check — you can add actual validation here
    if (username.trim() !== '' && password.trim() !== '') {
      setIsLoggedIn(true);
    } else {
      alert('Please enter both username and password.');
    }
  };

  const handleAnswer = (option: string) => {
    setSelected(option);
    if (option === current.answer) {
      setScore(score + 1);
    }
  };

  const next = () => {
    if (currentIndex + 1 < questions.length) {
      setCurrentIndex(currentIndex + 1);
      setSelected(null);
    } else {
      setShowSummary(true);
    }
  };

  // ---------- LOGIN PAGE ----------
  if (!isLoggedIn) {
    return (
      <div style={styles.loginContainer}>
        <h1 style={styles.banner}>Welcome to the 2025 ERP QUIZ</h1>
        <input
          type="text"
          placeholder="Enter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={styles.input}
        />
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
        />
        <button style={styles.loginButton} onClick={handleLogin}>
          Start Quiz
        </button>
      </div>
    );
  }

  // ---------- QUIZ PAGE ----------
  return (
    <div style={{ padding: 20, fontFamily: "'Segoe UI', sans-serif" }}>
      {!showSummary ? (
        <>
          <h2>Question {current.id}</h2>
          <p>{current.question}</p>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {current.options.map((option) => (
              <li key={option} style={{ marginBottom: 10 }}>
                <button
                  onClick={() => handleAnswer(option)}
                  disabled={selected !== null}
                  style={{
                    padding: "10px 20px",
                    fontSize: "1rem",
                    backgroundColor:
                      selected === option
                        ? option === current.answer
                          ? 'lightgreen'
                          : 'salmon'
                        : '#f0f0f0',
                    border: '1px solid #ccc',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    width: '100%',
                    textAlign: 'left',
                  }}
                >
                  {option}
                </button>
              </li>
            ))}
          </ul>
          {selected && (
            <button onClick={next} style={{ marginTop: 10 }}>
              Next
            </button>
          )}
        </>
      ) : (
        <div>
          <h2>Quiz Finished!</h2>
          <p>{username}, you got {score} out of {questions.length} correct.</p>
        </div>
      )}
    </div>
  );
}

// ---------- STYLES ----------
const styles = {
  loginContainer: {
    height: '100vh',
    backgroundColor: '#e0f2ff',
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: "'Segoe UI', sans-serif",
  },
  banner: {
    fontSize: '2.5rem',
    color: '#003366',
    marginBottom: '2rem',
    textAlign: 'center' as const,
  },
  input: {
    width: '300px',
    padding: '12px',
    marginBottom: '1rem',
    fontSize: '1rem',
    border: '1px solid #ccc',
    borderRadius: '8px',
  },
  loginButton: {
    padding: '1rem 2rem',
    fontSize: '1.2rem',
    backgroundColor: '#0077cc',
    color: 'white',
    border: 'none',
    borderRadius: '10px',
    cursor: 'pointer',
  },
};

export default App;

