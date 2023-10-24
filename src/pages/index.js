import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Spinner from '@core/components/spinner'
import { useAuth } from 'hooks/useAuth'

export const getHomeRoute = role => {
  if (role) return '/superadmin'

  return '/newOrder'
}

function Home() {
  // ** Hooks
  const auth = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!router.isReady) {
      return
    }

    if (auth.user) {
      const homeRoute = getHomeRoute(auth.user.is_admin)
      console.log(auth.user)
      router.replace(homeRoute)
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return <Spinner />
}

export default Home
