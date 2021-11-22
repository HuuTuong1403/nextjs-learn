import '../styles/globals.css'
import { AppPropsWithLayout } from '@/models'
import { CacheProvider } from '@emotion/react'
import { EmptyLayout } from '@/components/layout'
import { SWRConfig } from 'swr'
import { theme, createEmotionCache } from '@/utils'
import { ThemeProvider } from '@mui/material/styles'
import axiosClient from '@/api/axiosClient'
import CssBaseline from '@mui/material/CssBaseline'

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache()

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const Layout = Component.Layout ?? EmptyLayout

  return (
    <CacheProvider value={clientSideEmotionCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <SWRConfig value={{ fetcher: (url) => axiosClient.get(url), shouldRetryOnError: false }}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </SWRConfig>
      </ThemeProvider>
    </CacheProvider>
  )
}

export default MyApp
