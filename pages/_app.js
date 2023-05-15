import Render from '@/components/Render'
import '@/styles/globals.css'
import 'jquery';
import 'tilt.js';

export default function App({ Component, pageProps }) {
  return (
    <Render>
      <Component {...pageProps} />
    </Render>
  )
}
