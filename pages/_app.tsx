import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '@/components/layout'
// import { wrapper } from "@/store/store";
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import { Provider } from 'react-redux'
import { store } from '../store/store'


function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}

export default App;
