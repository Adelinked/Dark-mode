import "../styles/globals.css";
import { AppWrapper } from "../context";

function MyApp({ Component, pageProps }) {
  const theme = pageProps.value;
  const value = theme !== null && theme !== undefined ? theme : "dark-theme";
  return (
    <AppWrapper value={pageProps.value}>
      <Component {...pageProps} />
    </AppWrapper>
  );
}

export default MyApp;
