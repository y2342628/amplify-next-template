import { useState, useRef, useEffect } from "react";
import { Row, Col, Flex } from "antd";
import { AreaChart, Area, Tooltip } from "recharts";

import {
  CaretDownOutlined,
  PoundCircleOutlined
} from "@ant-design/icons";

export default function AreaChardCard() {
  const col = useRef<HTMLDivElement>(null);

  const [canvasWidth, setCanvasWidth] = useState<number>(300);
  const data = [
    {
      name: "Page A",
      price: 200,
    },
    {
      name: "Page B",
      price: 1200,
    },
    {
      name: "Page C",
      price: 600,
    },
    {
      name: "Page D",
      price: 1600,
    },
    {
      name: "Page E",
      price: 1000,
    },
    {
      name: "Page F",
      price: 2260,
    },
    {
      name: "Page G",
      price: 800,
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      if (col.current) setCanvasWidth(col.current?.offsetWidth ?? 300);
    };
    handleResize();
    window.addEventListener("resize", handleResize);

 
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [col]);

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div
          style={{
            background: "rgba(255, 255, 255, .8)",
            border: "1px solid #ccc",
            borderRadius: 4, 
            padding: "5px 10px",
          }}
        >
          <p style={{ margin: 0, color: "rgb(255,168,45)" }}>{label}</p>
          {payload.map((entry: any, index: number) => (
            <p key={index} style={{ margin: "5px 0", color: "#038fde" }}>
              <span>{`${entry.name} :`}</span> {entry.value}
            </p>
          ))}
        </div>
      );
    }

    return null;
  };
  return (
    <Flex
      vertical
      className="box-shadow"
      style={{
        borderRadius: 10,
        background: "#fff",
        overflow:"hidden"
      }}
    >
      <Flex
        vertical
        style={{
          padding: "1rem 1rem 0",
        }}
      >
        <Row align="middle">
          <Col span={18}>
            <h2
              style={{
                fontSize:24,
                margin: 0,
              }}
            >
              $1,239
              <span style={{
                fontSize:16,
                color:"#f5222d",
                paddingTop:"0.5rem",
                marginLeft:"0.5rem"
              }}>
                08% 
                <CaretDownOutlined />
              </span>
            </h2>
          </Col>
          <Col span={6}>
            <Flex justify="end">
              <PoundCircleOutlined
                style={{
                  fontSize: 26,
                  color: "var(--custom-color-primary)",
                }}
              />
            </Flex>
          </Col>
        </Row>
        <p
          style={{
            margin: 0,
            fontSize:12,
            color:"#8c8c8c" 
          }}
        >
          Ripple Price
        </p>
      </Flex>

      <Row>
        <Col
          span={24}
          ref={col}
          style={{
            height: 75,
          }}
        >
          {canvasWidth && (
            <AreaChart
              width={canvasWidth}
              height={75}
              data={data}
              margin={{
                top: 0,
                right: 0,
                left: 0,
                bottom: 0,
              }}
            >
              <defs>
                <linearGradient id="colorUv2" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#ee5b61" stopOpacity="1" />
                  <stop
                    offset="90%"
                    stopColor="#feeee1"
                    stopOpacity="1"
                  />
                </linearGradient>
              </defs>
              <Tooltip content={<CustomTooltip />} />
              <Area
                dataKey="price"
                stroke="null"
                fillOpacity="1"
                fill="url(#colorUv2)"
                activeDot={{
                  stroke: "#fff", 
                  strokeWidth: 2, 
                  fill: "#038fde", 
                  r: 5
                }}
              />
            </AreaChart>
          )}
        </Col>
      </Row>
    </Flex>
  );
}
