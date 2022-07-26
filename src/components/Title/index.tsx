import Texts from "./const"
import styles from "./title.module.scss"
export default function Title(){
  return ( 
    <header>
      {
        Texts.map((item,i)=>(
          <span key={i} className={styles.container}>
            <h1 className={styles.container__title}>{item.title}</h1>
            <h2 className={styles.container__subtitle}>{item.subtitle}</h2>
          </span>
        ))
      }
    </header>
  )
}