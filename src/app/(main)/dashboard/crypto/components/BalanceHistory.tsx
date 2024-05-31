import { useState, useRef, useEffect } from "react";
import { Row, Col, Flex, Select } from "antd";
import { AreaChart, Area, Tooltip, XAxis } from "recharts";

import { CaretUpOutlined, EuroCircleOutlined } from "@ant-design/icons";

export default function BalanceHistory() {
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };
  const col = useRef<HTMLDivElement>(null);

  const [canvasWidth, setCanvasWidth] = useState<number>(300);
  const data = [
    {
      name: "",
      banlance: 200,
    },
    {
      name: "JAN",
      banlance: 400,
    },
    {
      name: "FEB",
      banlance: 150,
    },
    {
      name: "MAR",
      banlance: 400,
    },
    {
      name: "APR",
      banlance: 1000,
    },
    {
      name: "MAY",
      banlance: 400,
    },
    {
      name: "JUN",
      banlance: 1200,
    },
    {
      name: "JUL",
      banlance: 1000,
    },
    {
      name: "AUG",
      banlance: 800,
    },
    {
      name: "SEP",
      banlance: 750,
    },
    {
      name: "OCT",
      banlance: 1500,
    },
    {
      name: "NOV",
      banlance: 1000,
    },
    {
      name: "DEC",
      banlance: 1500,
    },
    {
      name: "",
      banlance: 500,
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      if (col.current) setCanvasWidth(col.current?.offsetWidth ?? 300);
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    // 清除事件监听器
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
      gap={10}
      className="box-shadow"
      style={{
        borderRadius: 10,
        background: "#fff",
        overflow: "hidden",
      }}
    >
      <Row
        align="middle"
        style={{
          padding: "1rem 1rem 0",
        }}
      >
        <Col span={18}>
          <h4>Balance History</h4>
        </Col>
        <Col span={6}>
          <Flex justify="end">
            <Select
              defaultValue="1"
              style={{ width: 120 }}
              onChange={handleChange}
              options={[
                { value: "1", label: "Last 10 days" },
                { value: "2", label: "Last 20 days" },
                { value: "3", label: "Last 30 days" },
              ]}
            />
          </Flex>
        </Col>
      </Row>

      <Row>
        <Col
          span={24}
          ref={col}
          style={{
            height: 180,
          }}
        >
          {canvasWidth && (
            <AreaChart
              width={canvasWidth}
              height={180}
              data={data}
              margin={{
                top: 0,
                right: 0,
                left: 0,
                bottom: 0,
              }}
            >
              <defs>
                <linearGradient id="colorUv4" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#68beeb" stopOpacity="1" />
                  <stop offset="90%" stopColor="#f7fcfd" stopOpacity="1" />
                </linearGradient>
              </defs>
              <Tooltip content={<CustomTooltip />} />
              <XAxis dataKey="name" />
              <Area
                dataKey="banlance"
                stroke="#10316b"
                strokeWidth={2}
                fillOpacity="1"
                fill="url(#colorUv4)"
                activeDot={{
                  stroke: "#fff",
                  strokeWidth: 2,
                  fill: "#038fde",
                  r: 5,
                }}
              />
            </AreaChart>
          )}
        </Col>
      </Row>
    </Flex>
  );
}
