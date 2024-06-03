import React, { useState } from "react";
import type { DatePickerProps, RadioChangeEvent } from "antd";
import { DatePicker, Flex, Card, Radio } from "antd";

const { RangePicker } = DatePicker;

export default function ThreeSize() {
  const [size, setSize] = useState<DatePickerProps["size"]>("middle");

  const onChange: DatePickerProps["onChange"] = (date, dateString) => {
    console.log(date, dateString);
  };

  const sizeChange = (e: RadioChangeEvent) => {
    setSize(e.target.value);
  };
  return (
    <Card title="THREE SIZES" hoverable className="box-shadow">


      <Flex gap={20} vertical>
      <Radio.Group value={size} onChange={sizeChange}>
        <Radio.Button value="large">large</Radio.Button>
        <Radio.Button value="middle">default</Radio.Button>
        <Radio.Button value="small">small</Radio.Button>
      </Radio.Group>
        <DatePicker onChange={onChange} size={size} />
        <DatePicker onChange={onChange} picker="month" size={size} />
        <RangePicker size={size}/>
        <DatePicker onChange={onChange} picker="week" size={size} />
      </Flex>
    </Card>
  );
}
