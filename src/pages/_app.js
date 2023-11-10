import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";
import { SnackbarProvider } from "notistack";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SnackbarProvider
      autoHideDuration={2000}
      preventDuplicate={true}
      disableWindowBlurListener={true}
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
    >
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </SnackbarProvider>
  );
}
