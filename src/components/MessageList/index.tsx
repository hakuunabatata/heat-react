import styles from './styles.module.scss'

import logoImg from '../../assets/logo.svg'

export const MessageList = () => (
  <>
    <div className={styles.messageListWrapper}>
      <img src={logoImg} alt="DoWhile 2021" />

      <ul className={styles.messageList}>
        <li className={styles.message}>
          <p className={styles.messageContent}>
            Mensagem 1 bla bla bla eu eu eu bla bla bla eu eu eu
          </p>

          <div className={styles.messageUser}>
            <div className={styles.userImage}>
              <img
                src="https://github.com/hakuunabatata.png"
                alt="Sandro Plankton"
              />
            </div>
            <span>Sandro Plankton</span>
          </div>
        </li>
        <li className={styles.message}>
          <p className={styles.messageContent}>
            Mensagem 1 bla bla bla eu eu eu bla bla bla eu eu eu
          </p>

          <div className={styles.messageUser}>
            <div className={styles.userImage}>
              <img
                src="https://github.com/hakuunabatata.png"
                alt="Sandro Plankton"
              />
            </div>
            <span>Sandro Plankton</span>
          </div>
        </li>
        <li className={styles.message}>
          <p className={styles.messageContent}>
            Mensagem 1 bla bla bla eu eu eu bla bla bla eu eu eu
          </p>

          <div className={styles.messageUser}>
            <div className={styles.userImage}>
              <img
                src="https://github.com/hakuunabatata.png"
                alt="Sandro Plankton"
              />
            </div>
            <span>Sandro Plankton</span>
          </div>
        </li>
      </ul>
    </div>
  </>
)
