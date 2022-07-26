import Image from "next/image"
import styles from './customImage.module.scss'
type ImageProps = {
    src:string,
    alt:string,
    width?:number,
    height?:number,
    className?:string

}

export default function CustomImage({alt,src,width,height,className}:ImageProps){
    return(
        <Image src={src} alt={alt} width={width} height={height} className={styles.effects} ></Image>
    )
}
