import Texts from "./const"
import styles from "./title.module.scss"
export default function Title(){
  return ( 
    <header className={styles.container}>
      {
        Texts.map((item,i)=>(
          <div key={i} className={styles.container__container}>
            <h1 className={styles.container__container__title}>{item.title}</h1>
            <h2 className={styles.container__container__subtitle}>{item.subtitle}</h2>
          </div>
        ))
      }
    </header>
  )
}