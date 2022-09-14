import { Provider } from "react-redux";
import type { AppProps } from "next/app";
import { store } from "@store/store";
import { SessionProvider } from "next-auth/react";
import { library, icon } from "@fortawesome/fontawesome-svg-core";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import GlobalStyle from "@styles/global.style";

// import { ThemeProvider } from "styled-components";

library.add(faXmark);

import { HTMLAttributes, ReactText } from "react";

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <Provider store={store}>
      <GlobalStyle />
      {/* <ThemeProvider theme={theme}> */}
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
      {/* </ThemeProvider> */}
    </Provider>
  );
}

export default MyApp;
