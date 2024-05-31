import React from "react";
import type { MenuProps } from "antd";
import { Button, Dropdown, Flex, Card } from "antd";

const onMenuClick: MenuProps["onClick"] = (e) => {
  console.log("click", e);
};

const items = [
  {
    key: "1",
    label: "1st item",
  },
  {
    key: "2",
    label: "2nd item",
  },
  {
    key: "3",
    label: "3rd item",
  },
];

export default function MultipleButton() {
  return (
    <Card title="MULTIPLE" hoverable className="box-shadow">
      <Flex align="flex-start" gap="small" vertical>
        <Button type="primary">primary</Button>
        <Button>secondary</Button>
        <Dropdown.Button menu={{ items, onClick: onMenuClick }}>
          Actions
        </Dropdown.Button>
      </Flex>
    </Card>
  );
}
