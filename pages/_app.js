import "../styles/globals.css";
import { Provider } from "@lyket/react";

function MyApp({ Component, pageProps }) {
  return (
    <Provider apiKey="acc0dbccce8e557db5ebbe6d605aaa">
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
