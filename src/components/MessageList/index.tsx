import styles from './styles.module.scss'
import io from 'socket.io-client'
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

const messagesQueue: Message[] = []

const socket = io('http://localhost:4000')

socket.on('new_message', (newMessage: Message) => {
  messagesQueue.push(newMessage)
})

export const MessageList = () => {
  const [messages, setMessages] = useState<Message[]>([])

  useEffect(() => {
    api
      .get<Message[]>('messages/last3')
      .then(({ data: msgs }) => setMessages(msgs))
  }, [])

  useEffect(() => {
    setInterval(() => {
      if (messagesQueue.length > 0) {
        setMessages((prevState) =>
          [messagesQueue[0], prevState[0], prevState[1]].filter(Boolean)
        )
        messagesQueue.shift()
      }
    }, 3000)
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
