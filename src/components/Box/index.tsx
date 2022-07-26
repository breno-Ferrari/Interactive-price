import styles from "./box.module.scss"
import Texts from "./const"
export default function Box(){
  return ( 
    <main className={styles.container}>
        <div className={styles.container__bottom}>
            <div className={styles.container__bottom__left}>
                <ul className={styles.container__bottom__left__list}>
                    {Texts.map((item,i)=>(
                        <li className={styles.container__bottom__left__list__line} key={i}>{item.text}</li>
                    ))}
                </ul>
            </div>
            <div className={styles.container__bottom__right}>
                <div className={styles.container__bottom__right__button}>
                   Start my trial
                </div>
            </div>
        </div>
    </main>
  )
}