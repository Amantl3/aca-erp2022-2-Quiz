 // src/Login.tsx
import React from "react";

type LoginProps = {
  onLogin: () => void;
};

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  return (
    <div style={styles.container}>
      <h1 style={styles.banner}>Welcome to the 2025 ERP QUIZ</h1>
      <button style={styles.button} onClick={onLogin}>
        Start Quiz
      </button>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: "#e0f2ff",
    height: "100vh",
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "'Segoe UI', sans-serif",
  },
  banner: {
    fontSize: "2.5rem",
    color: "#003366",
    marginBottom: "2rem",
    textAlign: "center" as const,
  },
  button: {
    padding: "1rem 2rem",
    fontSize: "1.2rem",
    backgroundColor: "#0077cc",
    color: "white",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
  },
};

export default Login;
