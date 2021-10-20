import styles from './styles.module.scss'
import { VscGithubInverted } from 'react-icons/vsc'

export const LoginBox = () => (
  <>
    <div className={styles.loginBoxWrapper}>
      <strong>Entre e compartlhe sua mensagem</strong>
      <a href="#" className={styles.signInWithGithub}>
        <VscGithubInverted size={24} />
        Entrar com github
      </a>
    </div>
  </>
)
