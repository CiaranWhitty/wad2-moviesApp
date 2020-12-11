import React, { useContext, useState, useEffect } from "react"
import { auth } from "../fireBase/firebase"

export const AuthContext = React.createContext()

export function useAuth() {
  return useContext(AuthContext)
}

const AuthProvider = (props) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const [currentUser, setCurrentUser] = useState()
  const [loading, setLoading] = useState(true)

  function signup(email, password) {
    return auth.createUserWithEmailAndPassword(email, password)
  }

  function login(email, password) {
    setTimeout(() => setIsAuthenticated(true), 100);
    return auth.signInWithEmailAndPassword(email, password);
    
  }

  function logout() {
    setTimeout(() => setIsAuthenticated(false), 100);
    return auth.signOut();
  }

  function resetPassword(email) {
    return auth.sendPasswordResetEmail(email)
  }

  function updatePassword(password) {
    return currentUser.updatePassword(password)
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user)
      setLoading(false)      

    })

    return unsubscribe
  }, [])

  const value = {
    currentUser,
    isAuthenticated,
    login,
    signup,
    logout,
    resetPassword,
    updatePassword
  }

  return (
    <AuthContext.Provider value={value}>
      {!loading && props.children}
    </AuthContext.Provider>
  )
}

export default AuthProvider;
