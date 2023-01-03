// ** React Imports
import { useEffect } from 'react'

// ** Emotion Imports
import createCache from '@emotion/cache'
import { CacheProvider } from '@emotion/react'

// ** RTL Plugin
import stylisRTLPlugin from 'stylis-plugin-rtl'
import { prefixer } from "stylis";
import rtlPlugin from "stylis-plugin-rtl";

const styleCache = () =>
  createCache({
    key: 'rtl',
    prepend: true,
    stylisPlugins: [stylisRTLPlugin]
  })

  const cacheRtl = createCache({
    key: "muirtl",
    stylisPlugins: [prefixer, rtlPlugin],
  });
  
const Direction = props => {
  const { children, direction } = props
  useEffect(() => {
    document.dir = direction
  }, [direction])
 
    return <CacheProvider value={cacheRtl}>{children}</CacheProvider>
 
}

export default Direction
