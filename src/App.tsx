import { useContext } from 'react'
import { AuthContext, LoginBox, MessageList, SendMessageForm } from '.'
import styles from './App.module.scss'

export const App = () => {
  const { user } = useContext(AuthContext)

  return (
    <main
      className={`${styles.contentWrapper} ${
        !!user ? styles.contentSigned : ''
      }`}
    >
      <MessageList />
      {!!user ? <SendMessageForm /> : <LoginBox />}
    </main>
  )
}
