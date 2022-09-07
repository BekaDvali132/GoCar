import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Form, Slider, Switch } from "antd";
import React from "react";
import { useState } from "react";
import SelectInput from "../inputs/SelectInput";
import Cars from "./cars/Cars";
import "./Home.scss";


function Home() {
  const [form] = Form.useForm();
  const [price, setPrice] = useState([20, 50]);
  const [currency, setCurrency] = useState("$");


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

            <Form.Item label="ფასი" style={{ flex: "2" }}>
              <div className="range-input">
                <h4>{price?.[0]}</h4>
                <Slider
                  range
                  defaultValue={[20, 50]}
                  onChange={(e) => setPrice(e)}
                />
                <h4>{price?.[1]}</h4>
                <div className="currency">
                  <h4>₾</h4>
                  <Switch
                    defaultChecked
                    onChange={(e) => setCurrency(e ? "$" : "₾")}
                  />
                  <h4>$</h4>
                </div>
              </div>
            </Form.Item>
          </div>
          <div className="row">
            <Form.Item label="საჭე" name="steering_wheel">
              <SelectInput />
            </Form.Item>
            <Form.Item label="საწვავის ტიპი" name="gas_type">
              <SelectInput />
            </Form.Item>
            <Form.Item label="ტრანსმისია" name="transmission">
              <SelectInput />
            </Form.Item>
            <Form.Item label="მანქანის ტიპი" name="car_type">
              <SelectInput />
            </Form.Item>
            <div className="search">
              <div className="detail-search">
                დეტალური ძიება <i className="arrow down"/>
              </div>
              <button type="button" className="search-button">
              <FontAwesomeIcon icon={faSearch} /> მოძებნე
              </button>
            </div>
          </div>
        </Form>
      </div>
      <Cars></Cars>
    </section>
  );
}

export default Home;
