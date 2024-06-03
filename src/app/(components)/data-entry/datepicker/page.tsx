"use client";

import { DatePicker, Space, Row, Col, Card, Flex } from "antd";
import DateFormat from "./components/dateFormat";
import ThreeSize from "./components/threeSize";
import type { DatePickerProps } from "antd";
const { RangePicker } = DatePicker;

export default function Page() {
  const onChange: DatePickerProps["onChange"] = (date, dateString) => {
    console.log(date, dateString);
  };

  return (
    <Row gutter={32}>
      <Col span={12}>
        <Flex gap="large" vertical>
          <Card title="BASIC" hoverable className="box-shadow">
            <Flex gap={20} vertical>
              <DatePicker onChange={onChange} />
              <DatePicker onChange={onChange} picker="month" />
              <RangePicker />
              <DatePicker onChange={onChange} picker="week" />

            </Flex>
          </Card>
          <DateFormat />
          <ThreeSize />
    
        </Flex>
      </Col>
      <Col span={12}>
        <Flex gap="large" vertical>
          <Card title="DISABLED" hoverable className="box-shadow"></Card>
        </Flex>
      </Col>
    </Row>
  );
}
