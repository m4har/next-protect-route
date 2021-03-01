import "../styles/globals.css";
import useProtect from "../components/hooks/Protect";

function MyApp({ Component, pageProps }) {
  useProtect();
  return <Component {...pageProps} />;
}

export default MyApp;
