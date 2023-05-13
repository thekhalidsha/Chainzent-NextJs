import Render from '@/components/Render'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <Render>
      <Component {...pageProps} />
    </Render>
  )
}
