import styles from './Post.module.css';

export function Post() {
  return(
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img className={styles.avatar} src="https://github.com/mrmatheustor.png" />
          <div className={styles.authorInfo}>
            <strong>Matheus Torres</strong>
            <span>Web Dev</span>
          </div>
        </div>

        <time title='15 de maio às 20:36h' dateTime="2023-05-15 20:36">Publicado há 1h</time>
      </header>

      <div className={styles.content}>
      <p>Fala galeraa 👋</p>
      <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
      <p>👉 <a href='#'>a jane.design/doctorcare</a></p>
      <p> <a href='#'>#novoprojeto #nlw #rocketseat</a></p>
      </div>
    </article>
  )
}
