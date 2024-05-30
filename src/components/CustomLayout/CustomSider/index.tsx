"use client";
import Nav from "@/components/Nav";
import Link from "next/link";
import Image from "next/image";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { useState } from "react";

import {Row, Col, Layout, Flex } from "antd";
import Notification from "../Notification";
import styles from "./index.module.css"



const { Header, Content, Footer, Sider } = Layout;

export default function CustomSider({
  signOut,
}: {
  signOut?: (data?: any | undefined) => void;
}) {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    console.log(1);
    setCollapsed(!collapsed);
  };

  return (
    <Sider trigger={null} collapsible collapsed={collapsed} width="280">
      <Row style={{ height: 72, background: "rgba(0,0,0,0.3)" }} align="middle">
        <Col flex="50px" style={{ paddingLeft: 20 }}>
          <Flex
            align="center"
            justify="center"
            style={{
              color: "var(--root-white)",
              width: "40px",
              height: "40px",
            }}
            onClick={toggleCollapsed}
          >
            {collapsed ? (
              <MenuFoldOutlined style={{ fontSize: "20px" }} />
            ) : (
              <MenuUnfoldOutlined style={{ fontSize: "20px" }} />
            )}
          </Flex>
        </Col>
        <Col flex="auto">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="Logo"
              width={150}
              height={37}
              priority
            />
          </Link>
        </Col>
      </Row>
      <Notification signOut={signOut} />
      <div className={styles.menuWrap} >

        <Nav />
      </div>
    </Sider>
  );
}
