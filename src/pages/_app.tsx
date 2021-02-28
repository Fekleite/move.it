import { ThemesProvider } from "../contexts/ThemesContext";

import GlobalStyles from "../styles/global";


function MyApp({ Component, pageProps }) {
  
  return (
    <ThemesProvider>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemesProvider>
  );
}

export default MyApp
