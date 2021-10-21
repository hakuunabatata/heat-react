import { FormEvent, useContext, useState } from 'react'
import { VscGithubInverted, VscSignOut } from 'react-icons/vsc'
import { api, AuthContext } from '../..'
import styles from './styles.module.scss'

export const SendMessageForm = () => {
  const { user, signOut } = useContext(AuthContext)
  const [message, setMessage] = useState('')

  const SendMessage = async (event: FormEvent) => {
    if (!message.trim()) return

    event.preventDefault()

    await api.post('messages', { message })
  }

  return (
    <div className={styles.sendMessageFormWrapper}>
      <button className={styles.signOutButton} onClick={signOut}>
        <VscSignOut size={32} />
      </button>

      <header className={styles.userInformation}>
        <div className={styles.userImage}>
          <img src={user?.avatar_url} alt={user?.name} />
        </div>

        <strong className={styles.userName}>{user?.name}</strong>
        <span className={styles.userGithub}>
          <VscGithubInverted size={16} />
          {user?.login}
        </span>
      </header>

      <form
        onSubmit={(event) => SendMessage(event)}
        className={styles.sendMessageForm}
      >
        <label htmlFor="message">Mensagem</label>

        <textarea
          name="message"
          id="message"
          placeholder="Qual sua expectativa para o evento?"
          onChange={(event) => setMessage(event.target.value)}
          value={message}
        />

        <button type="submit">Enviar mensagem</button>
      </form>
    </div>
  )
}
