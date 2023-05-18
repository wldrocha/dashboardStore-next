import { endPoints } from '@services/api/'
import axios from 'axios'
import Cookies from 'js-cookie'
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

  const signIn = async (email, password) => {
    const options = {
      headers: {
        // accept: '*/*',
        'Content-Type': 'applications/json',
      },
    }
    try {
      const {
        data: { access_token: token },
      } = await axios.post(endPoints.auth.login, { email, password })
      if (token) {
        Cookies.set('token', token, { expires: 5 })
      }

      axios.defaults.headers.Authorization = `Bearer ${token}`

      const { data: userData } = await axios.get(endPoints.auth.profile)
      setUser(userData)
    } catch (error) {
      console.error('🚀 ~ file: useAuth.js:31 ~ signIn ~ error:', error)
    }
  }

  return { user, signIn }
}
