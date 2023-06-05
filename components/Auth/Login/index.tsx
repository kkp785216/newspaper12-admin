"use client";

import Link from "next/link";
import Logo from "./Logo";
import CheckBox from "@/components/Utils/CheckBox";
import MyButton from "@/components/Utils/MyButton";
import useFormState from "./hooks/useForState";

const LoginScreen = () => {
  const { formData, handleChange, handleRemember, handleSubmit } =
    useFormState();

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
                className="input"
                style={{ padding: "4px", fontSize: "24px" }}
                id="login-email"
                onChange={handleChange}
                value={formData.email}
                name="email"
                autoComplete="email"
                autoFocus
                required
              />
            </div>
            <div className="flex flex-col mb-5">
              <label htmlFor="login-password" className="mb-1">
                Password
              </label>
              <input
                type="password"
                className="input"
                style={{ padding: "4px", fontSize: "24px" }}
                onChange={handleChange}
                value={formData.password}
                name="password"
                autoComplete="current-password"
                required
              />
            </div>
            <div className="flex justify-between items-center">
              <CheckBox
                label="Remember me"
                onChange={handleRemember}
                checked={formData.remember}
              />
              <MyButton type="submit" btntype="fill">
                Log in
              </MyButton>
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
