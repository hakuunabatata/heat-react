import styles from './styles.module.scss'

import { api } from '../..'

import logoImg from '../../assets/logo.svg'
import { useEffect, useState } from 'react'

type Message = {
  id: string
  text: string
  user: {
    avatar_url: string
    name: string
  }
}

export const MessageList = () => {
  const [messages, setMessages] = useState<Message[]>([])

  useEffect(() => {
    api
      .get<Message[]>('messages/last3')
      .then(({ data: msgs }) => setMessages(msgs))
  }, [])

  return (
    <>
      <div className={styles.messageListWrapper}>
        <img src={logoImg} alt="DoWhile 2021" />

        <ul className={styles.messageList}>
          {messages.map(({ user, text, id }) => (
            <li key={id} className={styles.message}>
              <p className={styles.messageContent}>{text}</p>

              <div className={styles.messageUser}>
                <div className={styles.userImage}>
                  <img src={user.avatar_url} alt={user.name} />
                </div>
                <span>{user.name}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
