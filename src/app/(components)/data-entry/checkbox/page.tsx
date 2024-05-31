"use client";

import { Checkbox, Row, Col, Card, Flex } from "antd";

import type { CheckboxProps } from "antd";
import CheckGroup from "./components/checkboxGroup";
import ControlledCheckbox from "./components/controlledcheckbox";
import GridCheckbox from "./components/gridCheckBox";
import CheckAllCheckbox from "./components/checkAllCheckBox";

export default function Page() {
  const onChange: CheckboxProps["onChange"] = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };

  return (
    <Row gutter={32}>
      <Col span={12}>
        <Flex gap="large" vertical>
          <Card title="BASIC" hoverable className="box-shadow">
            <Checkbox onChange={onChange}>Checkbox</Checkbox>
          </Card>
          <CheckGroup />
          <ControlledCheckbox />
        </Flex>
      </Col>
      <Col span={12}>
        <Flex gap="large" vertical>
          <Card title="DISABLED" hoverable className="box-shadow">
            <Checkbox defaultChecked={false} disabled />
            <br />
            <Checkbox indeterminate disabled />
            <br />
            <Checkbox defaultChecked disabled />
          </Card>
          <GridCheckbox />
          <CheckAllCheckbox />
        </Flex>
      </Col>
    </Row>
  );
}
