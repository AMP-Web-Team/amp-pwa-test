import type { Metadata } from "next";
import { Inter, Fredericka_the_Great, Kalam, Montserrat} from "next/font/google";
import "./globals.css";
import GlobalFooter from "./components/GlobalFooter";
import GlobalHeader from "./components/GlobalHeader";
import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';

const inter = Inter({ subsets: ["latin"] });
const fredericka = Fredericka_the_Great({
  subsets: ["latin"],
  display: 'swap',
  weight: "400",
  variable: '--fredericka',
  style: 'normal'
});
const kalam = Kalam({
  subsets: ["latin"],
  weight: "300",
  variable: '--kalam'
});
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: "400",
  variable: '--montserrat'
});

const APP_NAME = " AMP-PWA TEST";
const APP_DEFAULT_TITLE = "PWA Test";
const APP_TITLE_TEMPLATE = "%s - PWA APP";
const APP_DESCRIPTION = "AMP PWA TEST APPLICATION"

export const metadata: Metadata = {
  applicationName: APP_NAME,
  title: {
    default: APP_DEFAULT_TITLE,
    template: APP_TITLE_TEMPLATE,
  },
  description: APP_DESCRIPTION,
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: APP_DEFAULT_TITLE,
    // startUpImage: [],
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: "website",
    siteName: APP_NAME,
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
  twitter: {
    card: "summary",
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={`${inter.className} ${kalam.variable} ${montserrat.variable} ${fredericka.variable}`} lang="en">
      <body className={`${inter.className} ${kalam.variable} ${montserrat.variable} ${fredericka.variable}`}>
          <GlobalHeader/>
          {children}
          <footer><GlobalFooter/></footer>
      
      </body>
    </html>
  );
}
