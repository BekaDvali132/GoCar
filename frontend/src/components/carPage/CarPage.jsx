import "./CarPage.scss";
import Camry from "../resources/camry.jpeg";
import { A11y, Controller, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { useCallback, useRef } from "react";
import "swiper/css/effect-cards";
import { useState } from "react";
import CarPreviewImage from "./CarPreviewImage";
import { useEffect } from "react";
import profile from "../resources/Profile.svg";
import colorlessGoCar from "../resources/ColorlessGoCar.svg";
import { ReactComponent as HeartFull } from "../resources/HeartFull.svg";
import { ReactComponent as Shield } from "../resources/Shield.svg";
import { ReactComponent as Pin } from "../resources/Pin.svg";
import { ReactComponent as Automatic } from "../resources/Automatic.svg";
import { ReactComponent as Driver } from "../resources/Driver.svg";
import { ReactComponent as Steer } from "../resources/Steer.svg";
import { ReactComponent as Star } from "../resources/Star.svg";
import { Form, Switch } from "antd";
import SelectInput from "../inputs/SelectInput";

function CarPage() {
  const [activeSlide, setActiveSlide] = useState(0);

  const previewRef = useRef(null);

  const [swiper, setSwiper] = useState(null);

  const [swiperRef, setSwiperRef] = useState();

  const [reviewArrowStatus, setReviewArrowStatus] = useState([false, true]);

  const checkArrows = () => {
    setReviewArrowStatus([!swiperRef?.isBeginning, !swiperRef?.isEnd]);
  };

  const handleLeftClick = useCallback(() => {
    if (!swiperRef) return;
    swiperRef.slidePrev();
    checkArrows();
  }, [swiperRef]);

  const handleRightClick = useCallback(() => {
    if (!swiperRef) return;
    swiperRef.slideNext();
    checkArrows();
  }, [swiperRef]);

  useEffect(() => {
    if (swiper) {
      swiper.slideTo(activeSlide);
    }
  }, [activeSlide]);
  return (
    <section>
      <div className="swipers">
        <Swiper
          modules={[Controller, A11y, Navigation]}
          navigation
          onSwiper={(swiper) => setSwiper(swiper)}
          onSlideChange={(e) => setActiveSlide(e.activeIndex)}
        >
          <SwiperSlide key={0}>
            <img src={Camry} alt="slide" width={1364} height={740} />
          </SwiperSlide>
          <SwiperSlide key={1}>
            <img src={Camry} alt="slide" width={1364} height={740} />
          </SwiperSlide>
          <SwiperSlide key={2}>
            <img src={Camry} alt="slide" width={1364} height={740} />
          </SwiperSlide>
          <SwiperSlide key={3}>
            <img src={Camry} alt="slide" width={1364} height={740} />
          </SwiperSlide>
          <SwiperSlide key={4}>
            <img src={Camry} alt="slide" width={1364} height={740} />
          </SwiperSlide>
        </Swiper>

        <div className="preview-slider" ref={previewRef}>
          <CarPreviewImage
            image={Camry}
            activeKey={0}
            activeSlide={activeSlide}
            setActiveSlide={setActiveSlide}
            mainRef={previewRef}
          />
          <CarPreviewImage
            image={Camry}
            activeKey={1}
            activeSlide={activeSlide}
            setActiveSlide={setActiveSlide}
            mainRef={previewRef}
          />
          <CarPreviewImage
            image={Camry}
            activeKey={2}
            activeSlide={activeSlide}
            setActiveSlide={setActiveSlide}
            mainRef={previewRef}
          />
          <CarPreviewImage
            image={Camry}
            activeKey={3}
            activeSlide={activeSlide}
            setActiveSlide={setActiveSlide}
            mainRef={previewRef}
          />
          <CarPreviewImage
            image={Camry}
            activeKey={4}
            activeSlide={activeSlide}
            setActiveSlide={setActiveSlide}
            mainRef={previewRef}
          />
        </div>

        <img
          src={colorlessGoCar}
          alt={"Colorless GoCar logo"}
          className="colorless-gocar"
        />
      </div>
      <div className="car-page">
        <div className="left-content">
          <div className="car-info">
            <img src={profile} alt="Profile" />
            <div className="car-description">
              <div className="title">
                <h2>
                  <b>Toyota Camry</b> 2014
                </h2>
                <div className="add-to-favourites">
                  <HeartFull /> დაამატე რჩეულებში
                </div>
              </div>
              <div className="car-features">
                <div className="car-feature">
                  <Shield /> დაზღვეული
                </div>
                <div className="car-feature">
                  <Driver />
                  მძღოლით
                </div>
                <div className="car-feature">
                  <Automatic />
                  ავტომატიკა
                </div>
                <div className="car-feature">
                  <Steer />
                  მარცხენა საჭე
                </div>
                <div className="car-feature">
                  <Pin />
                  ადგილზე მიყვანით
                </div>
              </div>
            </div>
          </div>
          <div className="car-details">
            <div className="car-details-content">
              <h3>აღწერა</h3>
              <h4>
                ავტომობილი არის მოვილი, იდეალურ მდგომარეობაში. ფასში შედის
                მძღოლის მომსახურებაც, მძღოლის გარეშე არ ქირავდება. მოგიყვანთ
                თბილისის ნებისმიერ წერტილში.
              </h4>
            </div>
            <div className="car-details-content">
              <h3>დეტალები</h3>
              <div className="tables">
                <table>
                  <tbody>
                    <tr>
                      <td>ძრავის მოცულობა</td>
                      <td>2.0</td>
                    </tr>
                    <tr>
                      <td>საწვავის ტიპი</td>
                      <td>ჰიბრიდი</td>
                    </tr>
                    <tr>
                      <td>წვა 100კმ</td>
                      <td>6.0</td>
                    </tr>
                    <tr>
                      <td>ადგილები</td>
                      <td>5</td>
                    </tr>
                  </tbody>
                </table>
                <table>
                  <tbody>
                    <tr>
                      <td>საჭე</td>
                      <td>მარცხნივ</td>
                    </tr>
                    <tr>
                      <td>წამყვანი თვლები</td>
                      <td>წინა</td>
                    </tr>
                    <tr>
                      <td>კონდიციონერი</td>
                      <td>კი</td>
                    </tr>
                    <tr>
                      <td>ნავიგაცია</td>
                      <td>არა</td>
                    </tr>
                  </tbody>
                </table>
                <table>
                  <tbody>
                    <tr>
                      <td>ტრანსმისია</td>
                      <td>ავტომატიკა</td>
                    </tr>
                    <tr>
                      <td>უკანა ხედვის კამერა</td>
                      <td>კი</td>
                    </tr>
                    <tr>
                      <td>წვა 100კმ</td>
                      <td>6.0</td>
                    </tr>
                    <tr>
                      <td>ადგილები</td>
                      <td>5</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="reviews">
            <div className="slider-title">
              <h2>
                <Star /> შეფასებები
              </h2>
              <div className="slider-buttons">
                <div>
                  <div
                    className={`arrow left ${reviewArrowStatus[0] && "active"}`}
                    onClick={handleLeftClick}
                  ></div>
                </div>
                <div>
                  <div
                    className={`arrow right  ${
                      reviewArrowStatus[1] && "active"
                    }`}
                    onClick={handleRightClick}
                  ></div>
                </div>
              </div>
            </div>
            <Swiper
              modules={[Controller, Navigation, A11y]}
              slidesPerView={2}
              spaceBetween={16}
              navigation
              onSwiper={setSwiperRef}
              onSlideChange={checkArrows}
            >
              <SwiperSlide key={0}>
                <div className="review">
                  <div className="review-title">
                    <img src={profile} alt="profile" />
                    <div className="review-rate">
                      <Star />
                      <Star />
                      <Star />
                      <Star />
                      <Star />
                    </div>
                  </div>
                  <div className="review-comment">
                    “მადლობა დათოს, უმხეცესი მანქანაა! ეკონომიური და კომფორტული.
                    გვასიამოვნა ყველა”
                  </div>
                  <div className="review-author">
                    <h3>
                      <b>გიორგი დაბრუნდაშვილი</b>
                    </h3>
                    <h3>22 ივლისი 2020</h3>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide key={1}>
                <div className="review">
                  <div className="review-title">
                    <img src={profile} alt="profile" />
                    <div className="review-rate">
                      <Star />
                      <Star />
                      <Star />
                      <Star />
                      <Star />
                    </div>
                  </div>
                  <div className="review-comment">
                    “David is a really great driver, knows all kinds of short
                    and fast routes. Definitely recommend renting this car”
                  </div>
                  <div className="review-author">
                    <h3>
                      <b>Sarah Jessica Parker</b>
                    </h3>
                    <h3>24 ივლისი 2020</h3>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide key={2}>
                <div className="review">
                  <div className="review-title">
                    <img src={profile} alt="profile" />
                    <div className="review-rate">
                      <Star />
                      <Star />
                      <Star />
                      <Star />
                      <Star />
                    </div>
                  </div>
                  <div className="review-comment">
                    “მადლობა დათოს, უმხეცესი მანქანაა! ეკონომიური და კომფორტული.
                    გვასიამოვნა ყველა”
                  </div>
                  <div className="review-author">
                    <h3>
                      <b>გიორგი დაბრუნდაშვილი</b>
                    </h3>
                    <h3>22 ივლისი 2020</h3>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide key={3}>
                <div className="review">
                  <div className="review-title">
                    <img src={profile} alt="profile" />
                    <div className="review-rate">
                      <Star />
                      <Star />
                      <Star />
                      <Star />
                      <Star />
                    </div>
                  </div>
                  <div className="review-comment">
                    “მადლობა დათოს, უმხეცესი მანქანაა! ეკონომიური და კომფორტული.
                    გვასიამოვნა ყველა”
                  </div>
                  <div className="review-author">
                    <h3>
                      <b>გიორგი დაბრუნდაშვილი</b>
                    </h3>
                    <h3>22 ივლისი 2020</h3>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        <div className="right-content">
          <button className="contact-owner">
            <b>დაეკონტაქტე მფლობელს</b>
          </button>
          <div className="rent-car">
            <div className="renting-info">
              <div>
                <h2>
                  <b>120₾</b>
                </h2>
                <h4>/დღე</h4>
              </div>
              <h3>
                <Star /> 4.21
              </h3>
            </div>
            <div className="renting">
              <Form layout="vertical">
                <Form.Item label="როდიდან">
                  <div className="double-input">
                    <SelectInput />
                    <SelectInput />
                  </div>
                </Form.Item>
                <Form.Item label="როდემდე">
                  <div className="double-input">
                    <SelectInput />
                    <SelectInput />
                  </div>
                </Form.Item>
                <Form.Item label="შეხვედრის ადგილი">
                  <div className="choose-location">
                    <h3>მიუთითეთ მისამართი ან მონიშნეთ რუკაზე</h3>
                    <img src={profile} alt="profile" />
                  </div>
                </Form.Item>
                <div className="ant-col ant-form-item-label currency-input">
                  <label>ფასი დეტალურად</label>
                  <div className="currency">
                    <h4>₾</h4>
                    <Switch defaultChecked />
                    <h4>$</h4>
                  </div>
                </div>
              </Form>
              <div className="rent-prices">
                <div className="rent-price">
                  <h4>მანქანის ფასი</h4>
                  <h3>72₾</h3>
                </div>
                <div className="rent-price">
                  <h4>მძღოლის მომსახურება</h4>
                  <h3>40₾</h3>
                </div>
                <div className="rent-price">
                  <h4>დაზღვევა</h4>
                  <h3>22₾</h3>
                </div>
              </div>
              <div className="rent-sum">
                <div><h3><b>ჯამი</b></h3> <h3 className="green">(4 დღე)</h3></div>
                <div><h3>134₾*4=</h3> <h2 className="green">536₾</h2></div>
              </div>
              <button className="reserve">
                <b>დაჯავშნე</b> 
              </button>
            </div>
          </div>
          <div className="report-problem">
          მოგვწერე აღმოჩენილი პრობლემის შესახებ
          </div>
        </div>
      </div>
    </section>
  );
}

export default CarPage;
