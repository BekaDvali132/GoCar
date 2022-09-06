import React from "react";
import GoCarLogo from "../resources/GoCarLogo.svg";
import "./Header.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus, faUser } from "@fortawesome/free-solid-svg-icons";
import ChooseCarTitleCheck from "../resources/ChooseCarTitleCheck.svg";
import CarYellowCircle from '../resources/Car/CarYellowCircle.svg'
import CarCircle from '../resources/Car/CarCircle.svg'
import CarGreenBackground from '../resources/Car/CarGreenBackground.png'
import Car from '../resources/Car/Car.png'
import Road from '../resources/Car/Road.svg'
import { useState } from "react";
import GreenBackGroundImage from '../resources/GreenBackGroundImage.png'
import TransparentBackgroundImage from '../resources/TransparentBackgroundImage.svg'
function Header({ car }) {
  const [active,setActive] = useState(false)
  return (
    <>
    
    <div className="header">
    <img className="green-background-image" src={GreenBackGroundImage} alt={'Green BackGround Image'} width={726} height={401}/>
    <img className="transparent-background-image" src={TransparentBackgroundImage} alt="Transparent Background Image" />
      <img src={CarYellowCircle} alt="Yellow Circle" className={`yellow-circle ${active && 'active'}`}/>
      <header>
        <img src={GoCarLogo} alt="GoCar Logo" />
        <div className="header-actions">
          <h3>
            <FontAwesomeIcon icon={faCirclePlus} />
            დაამატეთ ავტომობილი
          </h3>
          <h3>
            <FontAwesomeIcon icon={faUser} />
            ავტორიზაცია
          </h3>
          <div className="dropdown">
            <button className="dropbtn">GE</button>
            <div className="dropdown-content">
              <a href="/">EN</a>
            </div>
          </div>
        </div>
      </header>
      {car && <div className="choose-car-and-travel">
        <div className="choose-car-and-travel--title">
          <img
            src={ChooseCarTitleCheck}
            alt="Choose Car Title Check"
            width={45}
            height={46}
          />
          აირჩიე მანქანა და იმგზავრე შენი პირობებით
        </div>
        <div className="choose-car-and-travel--car"  onMouseEnter={()=>setActive(true)} onMouseLeave={()=>setActive(false)}>
          <img src={CarCircle} className={'first-car-circle'} alt="Moving Circle"/>
          <img src={CarGreenBackground} className={'car-green-background'} alt="car green background"/>
          <img src={Car} className={'car'} alt="Car"/>
          <img src={Road} className={'road'} alt="Road"/>

        </div>
      </div>}
    </div>
    </>

  );
}

export default Header;
