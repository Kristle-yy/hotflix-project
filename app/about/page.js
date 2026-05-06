import Image from "next/image";
import React from "react";
import logo from "../../public/login-bg.png";
import Link from "next/link";

const Page = () => {
  return (
    <div className="about-container">

      <div className="about-nav">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/login" className="login-btn">
          Login
        </Link>
      </div>

      <h1 className="about-title">About Page</h1>

      <div className="about-images">
        <Image
          src="/image.png"
          alt="About Image"
          width={500}
          height={300}
        />

        <Image
          src={logo}
          alt="About Image"
          width={500}
          height={300}
        />
      </div>

    </div>
  );
};

export default Page;