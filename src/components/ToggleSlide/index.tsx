import { useState } from "react";
import styles from "./toggle.module.scss"


export default function ToggleSlide({...props}){
  const [field, setField] = useState(0);
  const MAX = 100;

  function getBackgroundSize(){
    return {
      backgroundSize: `${(field * 100) / MAX}% 100%`
    };
  };

  return ( 
    <div className={styles.container} {...props}>
       <input
        className={styles.container__slider}
        type="range"
        min="1"
        max={MAX}
        onChange={(e) => setField(e.target.valueAsNumber)}
        style={getBackgroundSize()}
        value={field}
          />
    </div>
  )
}