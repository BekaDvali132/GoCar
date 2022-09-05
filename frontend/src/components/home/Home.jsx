import { Form, Slider, Switch } from "antd";
import React from "react";
import { useState } from "react";
import SelectInput from "../inputs/SelectInput";
import "./Home.scss";

function Home() {
  const [form] = Form.useForm();
  const [price, setPrice] = useState([20,50])
  const [currency, setCurrency] = useState('$')

  return (
    <section>
      <div className="home-actions">
        <Form layout="vertical" form={form}>
          <div className="row">
            <Form.Item label="ქალაქი" name="name">
              <SelectInput />
            </Form.Item>
            <Form.Item label="როდიდან">
              <div className="double-input">
                <SelectInput />
                <SelectInput />
              </div>
            </Form.Item>
            <Form.Item label="როდემდე" name="name">
              <SelectInput />
            </Form.Item>
            
            <Form.Item label="ფასი" style={{flex:'2'}}>
              <div className="range-input">
                <h4>{price?.[0]}</h4>
                <Slider range initialValue={[20, 50]} onChange={(e)=>setPrice(e)}/>
                <h4>{price?.[1]}</h4>
                <div className="currency">
                  <h4>₾</h4>
                <Switch defaultChecked onChange={e=>setCurrency(e?'$':'₾')} />
                <h4>$</h4>
                </div>
              </div>
            </Form.Item>
          </div>
        </Form>
      </div>
    </section>
  );
}

export default Home;
