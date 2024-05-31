"use client";

import { Row, Col,  Flex } from "antd";
import AreaChardCard from "./components/AreaChartCard";
import AreaChardCard1 from "./components/AreaChartCard1";
import AreaChardCard2 from "./components/AreaChartCard2";
import AreaChardCard3 from "./components/AreaChartCard3";
import PortfolioBalance from "./components/PortfolioBalance";
import BalanceHistory from "./components/BalanceHistory"

export default function Page() {
  return (
    <Flex gap={30} vertical>
      <Row
       gutter={30}
        style={{
          width: "100%",
        }}
      >
        <Col span={6}>
          <AreaChardCard />
        </Col>
        <Col span={6}>
          <AreaChardCard1 />
        </Col>
        <Col span={6}>
        <AreaChardCard2 />
        </Col>
        <Col span={6}>
        <AreaChardCard3 />
        </Col>
      </Row>
      <Row
       gutter={30}
        style={{
          width: "100%",
        }}
      >
        <Col span={12}>
          <PortfolioBalance />
        </Col>
        <Col span={12}>
          <BalanceHistory />
        </Col>
   
      </Row>
    </Flex>
  );
}
