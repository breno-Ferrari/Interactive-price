import styles from "./box.module.scss"
import Texts from "./const"
import ToggleSlide from "components/ToggleSlide"
import ToggleSwitch from "components/ToggleSwitch"
import ThemeToggle from "components/ThemeToggle"
import { useEffect, useLayoutEffect, useRef, useState } from "react"
import React from "react";



export default function Box(){
    const [size, setSize] = useState<number>();
    const [input,setInput] = useState(true);
    const [page,setPages] = useState("1");
    const [price,setPrice] = useState("3.00");
    const [activeTheme, setActiveTheme] = useState("light");
    const inactiveTheme = activeTheme === "light" ? "dark" : "light";
    let pagesQtd:string | number | null;
    let Price:string | number | null;
    let PriceDiscount:string | number | null;
    let discountValue:string | number | null;
    const valores:any ={}
    


    function inputsAdjust(){
                                                        // pq?
        const field =  document.querySelectorAll("input")[1]?.value;
        const fieldNumber = Number(field);  
        const discount = 0.25;

        Price = (3 * fieldNumber)
        discountValue = Price * discount
        PriceDiscount = (Price - discountValue).toFixed(2);
        pagesQtd = (fieldNumber).toFixed()

        valores['Price'] = Price;
        valores['pagesQtd'] = pagesQtd;
        valores['PriceDiscount'] = PriceDiscount;
        valores['fieldNumber'] = fieldNumber;
        valores['discount'] = discount;   
    }  

    function pagesValue(){  
        inputsAdjust()             
        if(valores.fieldNumber >= 0 ){
            if(input === false){
                setPages(valores.pagesQtd);
                setPrice(valores.PriceDiscount)
            }else{
                setPages(valores.pagesQtd);
                setPrice(valores.Price);
            }
        }       
    }   
    useLayoutEffect(() => {
        document.body.dataset.theme = activeTheme;
      }, [activeTheme]);

    useEffect(()=>{
        if(window.innerWidth > 750){          
            setSize(1)
        }else{
            setSize(0)
        }
    },[])
    
    useEffect(()=>{
        pagesValue() 
    },[input])
    
  return ( 
    <>
    <main className={styles.container} id="box">

        {/* <ThemeToggle  /> */}
        <div className={styles.container__top}>
            <ToggleSwitch id={"theme"} click={() => setActiveTheme(inactiveTheme)}/> 
            <p className={styles.container__top__text}>{page}k pageViews</p>
            <p className={styles.container__top__textValue}>${price} <span className={styles.container__top__textValue__span}>/ month</span></p>
        </div>
        <ToggleSlide onChange={pagesValue}/> 
        <div className={styles.container__middle}>
            <p className={styles.container__middle__text}>Montlhy Billing</p>
            <ToggleSwitch id={"value"} click={() => setInput(!input)} />
            <p className={styles.container__middle__text}>Yarly Billing</p>
            {size ? 
                (<p className={styles.container__middle__txdiscount}>25% discount</p>)
                : 
                (<p className={styles.container__middle__discount}>-25%</p>)}
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
        {/* <ToggleSwitch onChange={() => setActiveTheme(inactiveTheme)}/>  */}
    </main>
    </>
   
  )
}