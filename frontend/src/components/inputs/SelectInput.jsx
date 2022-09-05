import React from 'react';
import {Select} from 'antd'
import './Inputs.scss'
function SelectInput() {
    const { Option } = Select;

  return (
    <Select
      defaultValue="lucy"
      className='select'
      
      
    >
      <Option value="jack">Jack</Option>
      <Option value="lucy">Lucy</Option>
      <Option value="disabled" disabled>
        Disabled
      </Option>
      <Option value="Yiminghe">yiminghe</Option>
    </Select>
  )
}

export default SelectInput