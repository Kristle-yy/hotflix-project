import Link from "next/link";

export default function Signup() {
  return (
    <div className="auth-container">
      <div className="auth-card">

        <h1 className="logo">
          HOT<span>FLIX</span>
        </h1>

        <input
          type="text"
          placeholder="Name"
          className="auth-input"
        />

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
          <span>
            I agree to the{" "}
            <span style={{ color: "#ff9900" }}>
              Privacy Policy
            </span>
          </span>
        </label>

        <button className="auth-btn">SIGN UP</button>

        <p className="auth-text">
          Already have an account?{" "}
          <Link href="/login">Sign in!</Link>
        </p>

      </div>
    </div>
  );
}