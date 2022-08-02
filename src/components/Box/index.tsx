import styles from "./box.module.scss"
import Texts from "./const"
import ToggleSlide from "components/ToggleSlide"
import ToggleSwitch from "components/ToggleSwitch"
import { useEffect, useRef, useState } from "react"
import React from "react";
import { info } from "console"

type Props = {
    pagesQtd:string | number | null;
    Price:string | number | null;
    PriceDiscount:string | number | null;
}


export default function Box({pagesQtd,Price,PriceDiscount}:Props){
    const [size, setSize] = useState<number>();
    const [input,setInput] = useState(1);
    const [page,setPages] = useState("1");
    const [price,setPrice] = useState("3.00");
    const infos: (any)[] = [];
    const valores:any ={}


    function inputsAdjust(){
        const field =  document.querySelector("input")?.value;
        const fieldNumber = Number(field);  
        const discount = 0.25;

        Price = (3 * fieldNumber).toFixed(2)
        pagesQtd = (fieldNumber).toFixed()
        PriceDiscount = (fieldNumber * discount).toFixed(2);

        valores['Price'] = Price;
        valores['pagesQtd'] = pagesQtd;
        valores['PriceDiscount'] = PriceDiscount;
        valores['fieldNumber'] = fieldNumber;
        valores['discount'] = discount;        
    }

    function switchInput(){
        if(input === 1){
            setInput(0)
        }else{
            setInput(1)
        } 
    }   

    function pagesValue(){  
        inputsAdjust()     
        if(valores.fieldNumber > 0 ){
            if(input === 0){
                setPages(valores.pagesQtd);
                setPrice(valores.PriceDiscount)
            }else{
                setPages(valores.pagesQtd);
                setPrice(valores.Price);
            }
          
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
            <p className={styles.container__top__text}>{page}k pageViews</p>
            <p className={styles.container__top__textValue}>${price} <span className={styles.container__top__textValue__span}>/ month</span></p>
        </div>
        <ToggleSlide onChange={pagesValue} /> 
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