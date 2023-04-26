import {createContext, useEffect, useState} from 'react'
import {useRouter} from 'next/router'
import authConfig from 'configs/auth'
import http from 'services/http'
import toast from "react-hot-toast";
import urls from "configs/requestEndpoints"

const defaultProvider = {
  user: null,
  loading: true,
  setUser: () => null,
  setLoading: () => Boolean,
  isInitialized: false,
  login: () => Promise.resolve(),
  logout: () => Promise.resolve(),
  setIsInitialized: () => Boolean,
  register: () => Promise.resolve()
}
const AuthContext = createContext(defaultProvider)

function AuthProvider({children}) {
  const [user, setUser] = useState(defaultProvider.user)
  const [loading, setLoading] = useState(defaultProvider.loading)
  const [isInitialized, setIsInitialized] = useState(defaultProvider.isInitialized)


  const router = useRouter()
  useEffect(() => {
    const initAuth = async () => {
      setIsInitialized(true)
      const storedToken = window.localStorage.getItem(authConfig.storageTokenKeyName)
      if (storedToken) {
        setLoading(true)
        await http
          .get(
            authConfig.meEndpoint,
            {},
            {
              Authorization: `Bearer ${storedToken}`
            }
          )
          .then(async response => {
            setLoading(false)
            setUser({...response.data})
            const {returnUrl} = router.query
            const redirectURL = returnUrl && returnUrl !== '/' ? returnUrl : '/'
            router.replace(redirectURL)
          })
          .catch(() => {
            localStorage.removeItem('userData')
            localStorage.removeItem('refreshToken')
            localStorage.removeItem('accessToken')
            setUser(null)
            setLoading(false)
            setIsInitialized(false)
          })
      } else {
        setLoading(false)
      }
    }
    initAuth()
  }, [])

  const handleLogin = (params, errorCallback, toastid) => {
    http
      .post(authConfig.loginEndpoint, params)
      .then(async res => {
        window.localStorage.removeItem('userData')
        window.localStorage.removeItem(authConfig.storageTokenKeyName)
        window.localStorage.setItem(authConfig.storageTokenKeyName, res.data.access_token)
      })
      .then(() => {
        toast.dismiss(toastid)
        http
          .get(
            authConfig.meEndpoint,
            {},
            {
              Authorization: `Bearer ${window.localStorage.getItem(authConfig.storageTokenKeyName)}`
            }
          )
          .then(async response => {
            http
              .get(
                urls.roles,
                {},
                {
                  Authorization: `Bearer ${window.localStorage.getItem(authConfig.storageTokenKeyName)}`
                }
              ).then(async (resp) => {
              const adminId = resp.data.filter(el => el.value === 1)
              const {returnUrl} = router.query
              setUser({...response.data, isSuperAdmin: response.data.roles.includes(adminId[0].id)})
              await window.localStorage.setItem('userData', JSON.stringify({...response.data, isSuperAdmin: response.data.roles.includes(adminId[0].id)}))
              const redirectURL = returnUrl && returnUrl !== '/' ? returnUrl : '/'
              router.replace(redirectURL)
            })


          })
      })
      .catch(err => {
        if (errorCallback) errorCallback(err)
      })
  }

  const handleLogout = () => http.post(urls.logout, {}, {
    Authorization: `Bearer ${window.localStorage.getItem('access_Token')}`
  }).then(() => {
    setUser(null)
    setIsInitialized(false)
    window.localStorage.removeItem('userData')
    window.localStorage.removeItem(authConfig.storageTokenKeyName)
    router.push('/login')
  })

  const values = {
    user,
    loading,
    setUser,
    setLoading,
    isInitialized,
    setIsInitialized,
    login: handleLogin,
    logout: handleLogout
  }

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
}

export {AuthContext, AuthProvider}
