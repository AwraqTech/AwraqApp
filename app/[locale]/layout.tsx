import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import "remixicon/fonts/remixicon.css";
import 'apexcharts/dist/apexcharts.css';
import { IBM_Plex_Sans_Arabic } from "next/font/google";
import ClientWrapper from "./layouts/ClientLayout";
import "./globals.css";
import { headers } from "next/headers";
import { ErrorProvider } from "../context/ErrorContext";
import { RegisterProvider } from "../context/RegisterContext";
import { StepProvider } from "../context/StepContext";

// Load font
const ibmPlexSansArabic = IBM_Plex_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
});

// Define supported locales
export const locales = ["en", "ar"];

export const metadata = {
  title: "لوحة التحكم | منصة أوراق",
  description:
    "منصة أوراق هي منصة تمكن التجار من إدارة أنشطتهم التجارية بكل سهولة و تيسيير",
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  const header = headers();
  const localeHeader = (await header).get('x-next-intl-locale');
  if (localeHeader === null) {
    notFound();
  }

  const messages = await getMessages({ locale })
  const isArabic = locale === "ar";

  return (
    <NextIntlClientProvider messages={messages}>
      <html lang={locale} dir={isArabic ? "rtl" : "ltr"}>
        <body className={ibmPlexSansArabic.className}>
          <ClientWrapper locale={locale}>
            <ErrorProvider>
              <RegisterProvider>
                <StepProvider>
                  {children}
                </StepProvider>
              </RegisterProvider>
            </ErrorProvider>
          </ClientWrapper>
        </body>
      </html>
    </NextIntlClientProvider>
  );
}
