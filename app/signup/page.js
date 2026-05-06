import Link from "next/link";

const SignupPage = () => {
  return (
    <div className="auth-container">

      <div className="auth-card">

        {/* LOGO */}
        <h1 className="auth-logo">
          HOT<span>FLIX</span>
        </h1>

        {/* TITLE */}
        <h2 className="auth-title">
          Create Account
        </h2>

        <p className="auth-subtitle">
          Join HotFlix and enjoy unlimited movies
        </p>

        {/* FORM */}

        <input
          type="text"
          placeholder="Full Name"
          className="auth-input"
        />

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

        <input
          type="password"
          placeholder="Confirm Password"
          className="auth-input"
        />

        {/* CHECKBOX */}

        <div className="auth-checkbox">

          <input type="checkbox" />

          <label>
            I agree to the Terms & Conditions
          </label>

        </div>

        {/* BUTTON */}

        <button className="auth-btn">
          CREATE ACCOUNT
        </button>

        {/* LINK */}

        <p className="auth-text">
          Already have an account?{" "}

          <Link href="/login">
            Sign In
          </Link>
        </p>

      </div>

    </div>
  );
};

export default SignupPage;