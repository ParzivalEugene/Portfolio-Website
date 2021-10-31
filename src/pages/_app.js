import Theme from '../styles/theme';
import {Router} from "next/router";
import withYM from "next-ym";

function App({ Component, pageProps }) {
  return (
    <>
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </>
  );
}

export default withYM("84702061", Router)(App);
 