import { createContext, useContext, useState } from 'react'

const AuthContext = createContext()

export function ProviderAuth({ children }) {
  const auth = useProviderAuth()
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
  return useContext(AuthContext)
}

function useProviderAuth() {
  const [user, setUser] = useState(null)

  const signIn = async (email, pass) => {
    setUser('login')
  }

  return {user, signIn}
}
