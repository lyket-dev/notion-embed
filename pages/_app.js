import "../styles/globals.css";
import { Provider } from "@lyket/react";

function MyApp({ Component, pageProps }) {
  return (
    <Provider apiKey={process.env.NEXT_PUBLIC_LYKET_API_KEY}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
