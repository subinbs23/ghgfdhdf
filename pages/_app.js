import '../styles/globals.css'
import Design from '../Components/Design'
import 'antd/dist/antd.css';

function MyApp({ Component, pageProps }) {
  return <Design> <Component {...pageProps} /> </Design>
}

export default MyApp
