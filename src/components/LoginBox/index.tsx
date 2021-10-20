import styles from './styles.module.scss'
import { VscGithubInverted } from 'react-icons/vsc'
import { useEffect } from 'react'
import { api } from '../..'

type AuthResponse = {
  token: string
  user: {
    id: string
    avatar_url: string
    login: string
  }
}

export const LoginBox = () => {
  const signInUrl = `https://github.com/login/oauth/authorize?client_id=5abc6b8a74834db1b064&scope=user`

  const signIn = async (code: string) => {
    const { data: auth } = await api.post<AuthResponse>('authenticate', {
      code,
    })

    const { token, user } = auth

    localStorage.setItem('@dowhile:token', token)

    console.log(user)
  }

  useEffect(() => {
    const url = window.location.href

    const [baseurl, code] = url.split('?code=')

    window.history.pushState({}, '', baseurl)

    signIn(code)
  }, [])

  return (
    <>
      <div className={styles.loginBoxWrapper}>
        <strong>Entre e compartlhe sua mensagem</strong>
        <a href={signInUrl} className={styles.signInWithGithub}>
          <VscGithubInverted size={24} />
          Entrar com github
        </a>
      </div>
    </>
  )
}
