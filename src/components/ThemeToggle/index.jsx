import styles from "./themeSwitch.module.scss"
import { useState,useEffect } from "react";
export default function ThemeToggle(){
  const [activeTheme, setActiveTheme] = useState("light");
  const inactiveTheme = activeTheme === "light" ? "dark" : "light";

  useEffect(() => {
    document.body.dataset.theme = activeTheme;
  }, [activeTheme]);
  
  return (
    <button className={styles.button} type="button" onClick={() => setActiveTheme(inactiveTheme)}>
        <span className={styles.button__toggleThumb}></span>
        <span>🌙</span>
        <span>☀️</span>        
    </button>
  );
};
