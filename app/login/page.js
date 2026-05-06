import Link from "next/link";

export default function Login() {
  return (
    <div className="auth-container">
      <div className="auth-card">

        <h1 className="logo">
          HOT<span>FLIX</span>
        </h1>

        <input
          type="email"
          placeholder="Email"
          className="auth-input"
        />

        <input
          type="password"
          placeholder="Password"
          className="auth-input"
        />

        <label className="auth-checkbox">
          <input type="checkbox" />
          <span>Remember Me</span>
        </label>

        <button className="auth-btn">SIGN IN</button>

        <p className="auth-text">
          Don't have an account?{" "}
          <Link href="/signup">Sign up!</Link>
        </p>

      </div>
    </div>
  );
}