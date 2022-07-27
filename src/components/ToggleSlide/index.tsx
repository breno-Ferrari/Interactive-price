import { useState } from "react";
import styles from "./toggle.module.scss"
export default function ToggleSlide(){
  const [value, setValue] = useState(0);
  const MAX = 100;

  const getBackgroundSize = () => {
    return {
      backgroundSize: `${(value * 100) / MAX}% 100%`,
    };
  };

  return ( 
    <div className={styles.container}>
       <input
        className={styles.container__slider}
        type="range"
        min="0"
        max={MAX}
        onChange={(e) => setValue(e.target.valueAsNumber)}
        style={getBackgroundSize()}
        value={value}
          />
    </div>
  )
}