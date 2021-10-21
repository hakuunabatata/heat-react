import { useContext } from 'react'
import { VscGithubInverted } from 'react-icons/vsc'
import { AuthContext } from '../..'
import styles from './styles.module.scss'

export const LoginBox = () => {
  const { signInUrl } = useContext(AuthContext)

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
