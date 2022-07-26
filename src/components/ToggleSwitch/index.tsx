import styles from "./toggleSwitch.module.scss"
export default function ToggleSwitch(){
  return ( 
    <div className={styles.switch}>
      <input type="checkbox" className={styles.switch__input} id="toggleSwitch"></input>
      <label className={styles.switch__label} htmlFor="toggleSwitch"></label>
    </div>
  )
}