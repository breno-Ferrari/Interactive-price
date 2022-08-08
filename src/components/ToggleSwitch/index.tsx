import React, { DetailedHTMLProps, InputHTMLAttributes } from "react";
import styles from "./toggleSwitch.module.scss"
import { BsFillMoonFill ,BsFillSunFill} from 'react-icons/Bs';
type Props = {
  id:string,
  click:React.MouseEventHandler
}

export default function ToggleSwitch({id,click}:Props){
  return ( 
    <div className={styles.switch}>
      <input type="checkbox" className={styles.switch__input} id={id} onClick={click}></input>
      <label className={styles.switch__label} htmlFor={id} >
      {id === "theme" ? 
        <div className={styles.switch__span}>
          <BsFillSunFill size={"12"}/>
          <BsFillMoonFill size={"12"}/>
        </div>
         :
         ""
      }
      </label>
      
    </div>
  )
} 