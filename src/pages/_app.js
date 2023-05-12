import Head from 'next/head'
import { Router } from 'next/router'
import { store } from 'store'
import { Provider } from 'react-redux'
import NProgress from 'nprogress'
import { CacheProvider } from '@emotion/react'
import 'configs/i18n'
import { defaultACLObj } from 'configs/acl'
import themeConfig from 'configs/themeConfig'
import { Toaster } from 'react-hot-toast'
import UserLayout from 'layouts/UserLayout'
import AclGuard from '@core/components/auth/AclGuard'
import ThemeComponent from '@core/theme/ThemeComponent'
import AuthGuard from '@core/components/auth/AuthGuard'
import GuestGuard from '@core/components/auth/GuestGuard'
import WindowWrapper from '@core/components/window-wrapper'
import Spinner from '@core/components/spinner'
import { AuthProvider } from 'context/AuthContext'
import { SettingsConsumer, SettingsProvider } from '@core/context/settingsContext'
import ReactHotToast from '@core/styles/libs/react-hot-toast'
import { createEmotionCache } from '@core/utils/create-emotion-cache'
import 'prismjs'
import 'prismjs/themes/prism-tomorrow.css'
import 'prismjs/components/prism-jsx'
import 'prismjs/components/prism-tsx'
import 'react-perfect-scrollbar/dist/css/styles.css'
import '../../styles/globals.css'
import 'fonts/iranSans/css/style.css'

const clientSideEmotionCache = createEmotionCache()

// ** Pace Loader
if (themeConfig.routingLoader) {
  Router.events.on('routeChangeStart', () => {
    NProgress.start()
  })
  Router.events.on('routeChangeError', () => {
    NProgress.done()
  })
  Router.events.on('routeChangeComplete', () => {
    NProgress.done()
  })
}

function Guard({ children, authGuard, guestGuard }) {
  if (guestGuard) {
    return <GuestGuard fallback={<Spinner />}>{children}</GuestGuard>
  }
  if (!guestGuard && !authGuard) {
    return children
  }

  return <AuthGuard fallback={<Spinner />}>{children}</AuthGuard>
}

// ** Configure JSS & ClassName
function App(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props

  const getLayout = Component.getLayout ?? (page => <UserLayout>{page}</UserLayout>)
  const setConfig = Component.setConfig ?? undefined
  const authGuard = Component.authGuard ?? true
  const guestGuard = Component.guestGuard ?? false
  const aclAbilities = Component.acl ?? defaultACLObj

  return (
    <Provider store={store}>
      <CacheProvider value={emotionCache}>
        <Head>
          <title> زمین بار</title>
          <meta
            name='description'
            content={`${themeConfig.templateName} – اپلیکیشن زمین بار اپلیکیشنی برای حمل و نقل زمینی است`}
          />
          <meta name='keywords' content=',شرکت حساب رایانه زمین  بار, حساب رایانه, بار, زمین' />
          <meta name='viewport' content='initial-scale=1, width=device-width' />
        </Head>

        <AuthProvider>
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          <SettingsProvider {...(setConfig ? { pageSettings: setConfig() } : {})}>
            <SettingsConsumer>
              {({ settings }) => (
                <ThemeComponent settings={settings}>
                  <WindowWrapper>
                    <Guard authGuard={authGuard} guestGuard={guestGuard}>
                      <AclGuard aclAbilities={aclAbilities} guestGuard={guestGuard}>
                        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
                        {getLayout(<Component {...pageProps} />)}
                      </AclGuard>
                    </Guard>
                  </WindowWrapper>
                  <ReactHotToast>
                    <Toaster position={settings.toastPosition} toastOptions={{ className: 'react-hot-toast' }} />
                  </ReactHotToast>
                </ThemeComponent>
              )}
            </SettingsConsumer>
          </SettingsProvider>
        </AuthProvider>
      </CacheProvider>
    </Provider>
  )
}

export default App
