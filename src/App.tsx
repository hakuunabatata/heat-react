import { LoginBox, MessageList } from '.'
import styles from './App.module.scss'

export const App = () => (
  <main className={styles.contentWrapper}>
    <MessageList />
    <LoginBox />
  </main>
)
