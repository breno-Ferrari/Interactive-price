import styles from "./box.module.scss"
import Texts from "./const"
import ToggleSlide from "components/ToggleSlide"
import ToggleSwitch from "components/ToggleSwitch"
import { useEffect, useRef, useState } from "react"
import React from "react";



export default function Box(){
    const [size, setSize] = useState<number>();
    const [value,setValue] = useState(1);
    function switchInput(){
        if(value === 1){
            setValue(0)
        }else{
            setValue(1)
        }        
    }   
    useEffect(()=>{
        if(window.innerWidth > 750){
            setSize(1)
        }else{
            setSize(0)
        }
    },[])

  return ( 
    <main className={styles.container}>
        <div className={styles.container__top}>
            <p className={styles.container__top__text}>100k pageviews</p>
            {value ? 
                <p className={styles.container__top__textValue}>$16.00 <span className={styles.container__top__textValue__span}>/ month</span></p>
            :
                <p className={styles.container__top__textValue}>$144.00 <span className={styles.container__top__textValue__span}>/ year</span></p>
            }
        </div>
        <ToggleSlide /> 
        <div className={styles.container__middle}>
            <p className={styles.container__middle__text}>Montlhy Billing</p>
            <ToggleSwitch onChange={switchInput} />
            <p className={styles.container__middle__text}>Yarly Billing</p>
            <div className={styles.container__middle__discount}>
               {size ? 
                (<p className={styles.container__middle__discount__text}>25% discount</p>)
                : 
                (<p className={styles.container__middle__discount__text}>-25%</p>)}
            </div>
        </div>
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