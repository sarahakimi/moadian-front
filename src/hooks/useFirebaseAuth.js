import { useState, useEffect } from 'react'
import Firebase from 'configs/firebase'

const formatAuthUser = user => ({
  uid: user.uid,
  email: user.email
})

const useFirebaseAuth = () => {
  const [authUser, setAuthUser] = useState(null)
  const [loading, setLoading] = useState(true)

  const authStateChanged = async authState => {
    if (!authState) {
      setAuthUser(null)
      setLoading(false)
    } else {
      setLoading(true)
      const formattedUser = formatAuthUser(authState)
      setAuthUser(formattedUser)
      setLoading(false)
    }
  }

  const resetUser = () => {
    setAuthUser(null)
    setLoading(true)
  }
  const signInWithEmailAndPassword = (email, password) => Firebase.auth().signInWithEmailAndPassword(email, password)

  const createUserWithEmailAndPassword = (email, password) =>
    Firebase.auth().createUserWithEmailAndPassword(email, password)
  const signOut = () => Firebase.auth().signOut().then(resetUser)

  // listen for Firebase state change
  useEffect(() => {
    const unsubscribe = Firebase.auth().onAuthStateChanged(authStateChanged)

    return () => unsubscribe()
  }, [])

  return {
    loading,
    signOut,
    authUser,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword
  }
}

export default useFirebaseAuth
