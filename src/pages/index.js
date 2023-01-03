// ** React Imports
import {useEffect} from 'react'

// ** Next Imports
import {useRouter} from 'next/router'

// ** Spinner Import
import Spinner from '@core/components/spinner'

// ** Hook Imports
import {useAuth} from 'hooks/useAuth'

export const getHomeRoute = role => {
  if (role[0] === 1) return '/acl'

  return '/dashboards/crm'
}

function Home() {
  // ** Hooks
  const auth = useAuth()
  const router = useRouter()

  useEffect(() => {
    console.log(auth.user)

    if (!router.isReady) {
      return
    }

    if (auth.user && auth.user.roles) {
      const homeRoute = getHomeRoute(auth.user.roles)

      // Redirect user to Home URL
      router.replace(homeRoute)
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return <Spinner/>
}

export default Home
