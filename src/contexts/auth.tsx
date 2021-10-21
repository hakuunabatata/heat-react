import { createContext, ReactNode, useEffect, useState } from 'react'
import { api } from '..'

type AuthProvider = {
  children: ReactNode
}

type User = {
  id: string
  name: string
  login: string
  avatar_url: string
}

type AuthContextData = {
  user: User | null
  signInUrl: string
}

type AuthResponse = {
  token: string
  user: {
    id: string
    avatar_url: string
    login: string
    name: string
  }
}

export const AuthContext = createContext({} as AuthContextData)

export const AuthProvider = (props: AuthProvider) => {
  const [user, setUser] = useState<User | null>(null)

  const signInUrl = `https://github.com/login/oauth/authorize?client_id=5abc6b8a74834db1b064&scope=user`
  const signIn = async (code: string) => {
    const { data: auth } = await api.post<AuthResponse>('authenticate', {
      code,
    })

    const { token, user } = auth

    localStorage.setItem('@dowhile:token', token)

    setUser(user)
  }

  useEffect(() => {
    const url = window.location.href

    const [baseurl, code] = url.split('?code=')

    window.history.pushState({}, '', baseurl)

    signIn(code)
  }, [])

  return (
    <AuthContext.Provider value={{ signInUrl, user }}>
      {props.children}
    </AuthContext.Provider>
  )
}
