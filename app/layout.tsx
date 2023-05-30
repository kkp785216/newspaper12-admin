import "@/styles/globals.css";
import "@/styles/utility.css";
import Provider from "@/redux/provider";
import PresistComponents from "@/components/PresistComponents";

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
        <Provider>
          <PresistComponents>{children}</PresistComponents>
        </Provider>
      </body>
    </html>
  );
}
