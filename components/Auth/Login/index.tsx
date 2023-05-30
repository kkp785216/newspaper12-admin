"use client";

import Link from "next/link";
import { useState } from "react";
import styles from "./index.module.css";
import Logo from "./Logo";

const LoginScreen = () => {
  // creating formaData instance to store login form data
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    remember: false,
  });

  // update formData with new typed text
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  // handling remember checbox
  const handleRemember = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      remember: event.target.checked,
    });
  };

  // handling form submit
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    /* TO DO: Login */
  };

  return (
    <div className="text-[var(--color-third)] bg-[var(--bg-secondary)] min-h-screen flex items-center justify-center">
      <div className="max-w-sm text-sm">
        <Logo />
        <form className="bg-[var(--bg-normally)]" onSubmit={handleSubmit}>
          <div className="px-6 py-7 pb-8 border border-[var(--border-dim)]">
            <div className="flex flex-col mb-5">
              <label htmlFor="login-email" className="mb-1">
                Email Address
              </label>
              <input
                type="text"
                className="border rounded-[4px] border-[var(--border-normally)] focus:shadow-[0_0_0_1px_var(--border-active)] focus:border-[var(--border-active)] outline-none p-1 text-2xl"
                id="login-email"
                onChange={handleChange}
                value={formData.email}
                name="email"
                autoComplete="email"
                autoFocus
              />
            </div>
            <div className="flex flex-col mb-5">
              <label htmlFor="login-password" className="mb-1">
                Password
              </label>
              <input
                type="password"
                className="border rounded-[4px] border-[var(--border-normally)] focus:shadow-[0_0_0_1px_var(--border-active)] focus:border-[var(--border-active)] outline-none p-1 text-2xl"
                id="login-password"
                onChange={handleChange}
                value={formData.password}
                name="password"
                autoComplete="current-password"
              />
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <input
                  className={`appearance-none w-4 h-4 mr-2 border rounded-[4px] border-[var(--border-normally)] focus:shadow-[0_0_0_1px_var(--border-active)] focus:border-[var(--border-active)] ${styles.checkbox}`}
                  checked={formData.remember}
                  onChange={handleRemember}
                  type="checkbox"
                  id="login-remember"
                  name="remember"
                />
                <label
                  htmlFor="login-remember"
                  className="text-sm flex items-center"
                >
                  Remember me
                </label>
              </div>
              <button type="submit" className="btn">
                Log in
              </button>
            </div>
          </div>
        </form>
        <Link
          className="block mt-6 mb-4 ml-8 hover:text-[var(--color-active)] w-fit"
          href="/"
        >
          Lost your password?
        </Link>
        <Link
          className="block ml-8 hover:text-[var(--color-active)] w-fit"
          href="/"
        >
          ← Go to Newspaper
        </Link>
      </div>
    </div>
  );
};

export default LoginScreen;
