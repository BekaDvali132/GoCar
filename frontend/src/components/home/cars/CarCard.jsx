import Camry from "../../resources/camry.jpeg";
import {ReactComponent as HeartOutlined} from '../../resources/HeartOutlined.svg'
import {ReactComponent as Rate} from '../../resources/Rate.svg'
import {ReactComponent as Shield} from '../../resources/Shield.svg'
import {ReactComponent as Pin} from '../../resources/Pin.svg'
import {ReactComponent as Automatic} from '../../resources/Automatic.svg'
import {ReactComponent as Driver} from '../../resources/Driver.svg'
import {ReactComponent as Steer} from '../../resources/Steer.svg'
import {ReactComponent as Clock} from '../../resources/Clock.svg'
import {ReactComponent as Lock} from '../../resources/Lock.svg'
import './Cars.scss'
import {Link} from 'react-router-dom'
function CarCard() {
  return (
    <Link to={'/cars/1'}>
    <div className="car-card">
          <div className="car-image">
            <img src={Camry} alt="camry" width={260} height={214}/>
            <div className="car-favourite">
              <HeartOutlined/>
            </div>
            <div className="car-info">
              <div className="car-year-rate">
                <h5>2014</h5>
                <h5><Rate/> 4.2</h5>
              </div>
              <div className="model-and-type">
                <h3>Toyota Camry</h3>
                <h4>სედანი</h4>
              </div>
            </div>
          </div>
          <div className="car-features">
            <div className="car-feature">
              <Shield/> დაზღვეული
            </div>
            <div className="car-feature">
              <Driver/>მძღოლით
            </div>
            <div className="car-feature">
              <Automatic/>ავტომატიკა
            </div>
            <div className="car-feature">
              <Steer/>მარცხენა საჭე
            </div>
            <div className="car-feature">
              <Pin/>ადგილზე მიყვანით
            </div>
          </div>
          <div className="car-prices">
            <div className="car-price">
              127 ₾
            </div>
            <div className="car-history">
              <h4>
                <Clock/> 3+
              </h4>
              <h4>
                <Lock/> 200₾
              </h4>
            </div>
          </div>
        </div>
        </Link>
  )
}

export default CarCard