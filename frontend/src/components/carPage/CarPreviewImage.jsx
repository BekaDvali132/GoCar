import { useEffect } from "react";
import { useRef } from "react";

const CarPreviewImage = ({image, activeSlide, activeKey, setActiveSlide, mainRef}) => {
    const myRef = useRef(null)

    const executeScroll = () => myRef.current.scrollIntoView();  
    
    useEffect(()=>{
        if (activeKey === activeSlide) {
            mainRef.current.scrollLeft = myRef.current.offsetLeft;
        }
    },[activeSlide])

    return ( 
        <img src={image} onClick={()=>setActiveSlide(activeKey)} alt="car preview" className={`${activeSlide == activeKey && 'active'}`} ref={myRef}/>
     );
}
 
export default CarPreviewImage;