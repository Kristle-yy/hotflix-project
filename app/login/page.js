import Link from "next/link";

const LoginPage = () => {
  return (
    <div className="auth-container">

      <div className="auth-card">

        {/* LOGO */}
        <h1 className="auth-logo">
          HOT<span>FLIX</span>
        </h1>

        {/* TITLE */}
        <h2 className="auth-title">
          Welcome Back
        </h2>

        <p className="auth-subtitle">
          Sign in to continue watching movies
        </p>

        {/* FORM */}

        <input
          type="email"
          placeholder="Email Address"
          className="auth-input"
        />

        <input
          type="password"
          placeholder="Password"
          className="auth-input"
        />

        {/* CHECKBOX */}

        <div className="auth-checkbox">

          <input type="checkbox" />

          <label>
            Remember Me
          </label>

        </div>

        {/* BUTTON */}

        <button className="auth-btn">
          SIGN IN
        </button>

        {/* LINK */}

        <p className="auth-text">
          Don’t have an account?{" "}

          <Link href="/signup">
            Sign Up
          </Link>
        </p>

      </div>

    </div>
  );
};

export default LoginPage;