import { useState, useRef, useEffect } from "react";
import { Row, Col, Flex, Card, Space, Button, Progress } from "antd";

import { CaretUpOutlined, PlusCircleOutlined } from "@ant-design/icons";

export default function PortfolioBalance() {
  const list = [
    {
      name: "BTC",
      number: 8.74,
      color: "#038fde",
      process: 78,
    },
    {
      name: "RPL",
      number: 1.23,
      color: "#eb2f96 ",
      process: 48,
    },
    {
      name: "LTE",
      number: 0.71,
      color: "#fa8c16",
      process: 34,
    },
  ];

  return (
    <Card>
      <Flex vertical gap={10}>
        <Row>
          <Col>
            <h4 >
              Your Portfolio Balance
            </h4>
          </Col>
        </Row>
        <Row>
          <Col span={12}>
            <Flex vertical gap={10}>
              <h2
                style={{
                  fontSize: 30,
                  fontWeight: 600
                }}
              >
                $179,626
                <span
                  style={{
                    fontSize: 16,
                    color: "#52c41a",
                    paddingTop: "0.5rem",
                    marginLeft: "0.5rem",
                  }}
                >
                  64%
                  <CaretUpOutlined />
                </span>
              </h2>
              <p
                style={{
                  margin: 0,
                  fontSize: 12,
                  color: "#8c8c8c",
                }}
              >
                Overall balance
              </p>
              <Space>
                <Button type="primary">Deposit</Button>
                <Button
                  type="primary"
                  style={{
                    background: "#13c2c2",
                  }}
                >
                  Withdraw
                </Button>
              </Space>
              <Space
                style={{
                  marginTop: "1rem",
                  color: "var(--custom-color-primary)",
                }}
              >
                <PlusCircleOutlined />
                Add New Wallet
              </Space>
            </Flex>
          </Col>
          <Col span={12}>
            <h5
              style={{
                fontWeight: "normal",
                marginBottom: "1rem",
              }}
            >
              Portfolio Distribution
            </h5>
            <Flex vertical gap={5}>
              {list.map((item) => (
                <Flex key={item.name} vertical>
                  <Space style={{
                    fontSize:12
                  }}>
                    <span>{item.name}</span>
                    <span style={{
                        color:"#8c8c8c"
                    }}>| {item.number}</span>
                  </Space>
                  <div>
                    <Progress percent={item.process} size={["100%",3]} strokeColor={item.color}/>
                  </div>
                </Flex>
              ))}
            </Flex>
          </Col>
        </Row>
      </Flex>
    </Card>
  );
}
