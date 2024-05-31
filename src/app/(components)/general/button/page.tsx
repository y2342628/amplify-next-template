"use client";

import { Button, Space, Row, Col, Card, Flex } from "antd";

import LoadingButton from "./components/loadingButton";
import SizeButton from "./components/sizeButton";
import DisabledButton from "./components/disabledButton";
import IconButton from "./components/iconButton";
import MultipleButton from "./components/multipleButton";
import GhostButton from "./components/ghostButton";

export default function Page() {
  return (
    <Row gutter={32}>
      <Col span={12}>
        <Flex gap="large" vertical>
          <Card title="BASIC" hoverable className="box-shadow">
            <Space>
              <Button type="primary">Primary</Button>
              <Button>Default</Button>
              <Button type="dashed">Dashed</Button>
              <Button type="primary" danger>
                Danger
              </Button>
            </Space>
          </Card>
          <LoadingButton />
          <SizeButton />
          <DisabledButton />
        </Flex>
      </Col>
      <Col span={12}>
        <Flex gap="large" vertical>
          <IconButton />
          <MultipleButton />
          <GhostButton />
        </Flex>
      </Col>
    </Row>
  );
}
