import "../styles/globals.css";
import { Provider } from "@lyket/react";

function MyApp({ Component, pageProps }) {
  return (
    <Provider apiKey={process.env.NEXT_PUBLIC_LYKET_API_KEY}>
      <Component {...pageProps} />
    </Provider>
  );
}
const defaultTheme = {
  colors: {
    primary: '#22c1c3',
    secondary: '#ff00c3',
    background: 'transparent',
    text: '#292929',
    highlight: '#e095ed',
    icon: '#292929',
  },
  fonts: {
    body: 'inherit',
  },
};
export default MyApp;
