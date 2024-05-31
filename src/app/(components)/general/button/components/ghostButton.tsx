import React from "react";
import { Button, Flex, Card } from "antd";

export default function GhostButton() {
  return (
    <Card title="GHOST" hoverable className="box-shadow">
      <Flex wrap gap="small" className="site-button-ghost-wrapper">
        <Button type="primary" ghost>
          Primary
        </Button>
        <Button ghost>Default</Button>
        <Button type="dashed" ghost>
          Dashed
        </Button>
        <Button type="primary" danger ghost>
          Danger
        </Button>
      </Flex>
    </Card>
  );
}
