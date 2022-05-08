import "../styles/globals.css";
import { AppWrapper } from "../context";

function MyApp({ Component, pageProps }) {
  return (
    <AppWrapper value={pageProps.value}>
      <Component {...pageProps} />
    </AppWrapper>
  );
}

export default MyApp;
