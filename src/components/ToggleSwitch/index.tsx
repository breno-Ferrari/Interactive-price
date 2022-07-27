import styles from "./toggleSwitch.module.scss"
export default function ToggleSwitch({...props}){
  return ( 
    <div className={styles.switch}>
      <input type="checkbox" className={styles.switch__input} id="toggleSwitch" {...props}></input>
      <label className={styles.switch__label} htmlFor="toggleSwitch" ></label>
    </div>
  )
}