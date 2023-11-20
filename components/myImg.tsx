import Image from "next/image"
export default function MyImage({src,height,width}:any){
    return(
        <Image priority src={src} width={height} height={height} alt="image"/>
    )
}