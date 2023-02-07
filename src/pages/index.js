import {useEffect} from 'react'
import {useRouter} from 'next/router'
import Spinner from '@core/components/spinner'
import {useAuth} from 'hooks/useAuth'


export const getHomeRoute = role => {
  if (role[0] === 11) return '/superadmin'

  return '/dashboards'
}

function Home() {
  // ** Hooks
  const auth = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!router.isReady) {
      return
    }

    if (auth.user && auth.user.roles) {
      const homeRoute = getHomeRoute(auth.user.roles)

      router.replace(homeRoute)
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return <Spinner/>
}

export default Home
