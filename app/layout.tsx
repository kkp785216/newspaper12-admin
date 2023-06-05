import "@/styles/globals.css";
import "@/styles/utility.css";
import "react-toastify/dist/ReactToastify.css";
import PresistComponents from "@/components/PresistComponents";
import { ToastContainer } from "react-toastify";
import AutoLogin from "@/redux/autologin";

// import { Inter } from 'next/font/google'
// const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  icon: "/favicon.ico",
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // store.dispatch(setAuth("Hello"))
  return (
    <html lang="en">
      <body>
        {/* @ts-expect-error Server Component */}
        <AutoLogin>
          <PresistComponents>{children}</PresistComponents>
          <ToastContainer autoClose={2000} />
        </AutoLogin>
      </body>
    </html>
  );
}
