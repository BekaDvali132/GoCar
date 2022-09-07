import "./Cars.scss";
import Star from "../../resources/Star.svg";
import CarCard from "./CarCard";
import { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";
import {ReactComponent as YellowStar} from '../../resources/YellowStar.svg'
import SportsCar from '../../resources/SportsCar.png'
import ClassicCar from '../../resources/ClassicCar.png'
import TripCar from '../../resources/TripCar.png'

function Cars() {
  const carRowOne = useRef(null)
  const carRowTwo = useRef(null)

  const [active,setActive] = useState({0:false,1:true,2:false,3:true})
  let widthOne;

  const handleScroll = async (ref, pixels, arrow) => {

    widthOne = ref.current.scrollLeft += pixels;

    if (ref.current.scrollWidth <= (widthOne + ref.current.clientWidth)){

      setActive({...active, [arrow === 0 || arrow === 1 ? 1 : 3]:false})

    }else {
      if (widthOne > 0) {
        setActive({...active, [arrow === 0 || arrow === 1 ? 1 : 3]:true, [arrow === 0 || arrow === 1 ? 0 : 2]:true})
      } else {
        setActive({...active, [arrow === 0 || arrow === 1 ? 1 : 3]:true, [arrow === 0 || arrow === 1 ? 0 : 2]:false})
      }
    };

    ref.current.scrollLeft += pixels;
    
  };
  
  return (
    <div className="cars">
      <div className="cars-title">
        <h3>
          <img src={Star} alt="star" />
          რჩეული მანქანები
        </h3>
        {carRowOne && <div className="cars-actions">
          <div>
          <div className={`arrow left ${active[0] && 'active'}`} onClick={()=>handleScroll(carRowOne,-276,0)}></div>
          </div>
          <div>
          <div className={`arrow right ${active[1] && 'active'}`} onClick={()=>handleScroll(carRowOne,276,1)}></div>
          </div>
        </div>}
      </div>
      <div className="cars-row" ref={carRowOne}>
        <CarCard/>
        <CarCard/>
        <CarCard/>
        <CarCard/>
        <CarCard/>
        <CarCard/>
        <CarCard/>
      </div>
      <div className="cars-title">
        <h3 className="yellow-star">
          <YellowStar/>
          ახალი დამატებული მანქანები
        </h3>
        {carRowOne && <div className="cars-actions">
          <div>
          <div className={`arrow left ${active[2] && 'active'}`} onClick={()=>handleScroll(carRowTwo,-276,2)}></div>
          </div>
          <div>
          <div className={`arrow right ${active[3] && 'active'}`} onClick={()=>handleScroll(carRowTwo,276,3)}></div>
          </div>
        </div>}
      </div>
      <div className="cars-row" ref={carRowTwo}>
        <CarCard/>
        <CarCard/>
        <CarCard/>
        <CarCard/>
        <CarCard/>
        <CarCard/>
        <CarCard/>
      </div>
      <div className="car-categories">
        <div className="car-category">
          <div className="car-category-title">სპორტული ავტომობილები</div>
          <img src={SportsCar} alt="Sports Car" />
          </div>
        <div className="car-category">
          <div className="car-category-title">კლასიკური ავტომობილები</div>
          <img src={ClassicCar} alt="Classic Car" />
          </div>
        <div className="car-category">
          <div className="car-category-title">საექსკურსიო ავტომობილები</div>
          <img src={TripCar} alt="Trip Car" />
          </div>
      </div>
    </div>
  );
}

export default Cars;
