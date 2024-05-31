"use client";
import { Layout, theme, Row, Col, Input, Dropdown, Space } from "antd";
import { SearchOutlined, DownOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import ReactCountryFlag from "react-country-flag";
import { useState } from "react";

const { Header } = Layout;

export default function CustomHeader() {
  const {
    token: { colorBgContainer ,boxShadowSecondary,boxShadowTertiary},
  } = theme.useToken();

  const [languageCode, setLanguageCode] = useState<string>("US");

  const CountryEnum: Record<string, string> = {
    US: "English",
    CN: "Chinese",
    ES: "Spanish",
    FR: "French",
    IT: "Italian",
    SA: "Arabic",
  };

  const items: MenuProps["items"] = [
    {
      label: (
        <Space>
          <ReactCountryFlag
            countryCode="US"
            svg
            style={{
              width: "24px",
              height: "24px",
            }}
            title="US"
          />
          {CountryEnum.US}
        </Space>
      ),
      key: "US",
    },
    {
      type: "divider",
    },
    {
      label: (
        <Space>
          <ReactCountryFlag
            countryCode="CN"
            svg
            style={{
              width: "24px",
              height: "24px",
            }}
            title="CN"
          />
          {CountryEnum.CN}
        </Space>
      ),
      key: "CN",
    },
    {
      type: "divider",
    },
    {
      label: (
        <Space>
          <ReactCountryFlag
            countryCode="ES"
            svg
            style={{
              width: "24px",
              height: "24px",
            }}
            title="ES"
          />
          {CountryEnum.ES}
        </Space>
      ),
      key: "ES",
    },
    {
      type: "divider",
    },
    {
      label: (
        <Space>
          <ReactCountryFlag
            countryCode="FR"
            svg
            style={{
              width: "24px",
              height: "24px",
            }}
            title="FR"
          />
          {CountryEnum.FR}
        </Space>
      ),
      key: "FR",
    },
    {
      type: "divider",
    },
    {
      label: (
        <Space>
          <ReactCountryFlag
            countryCode="IT"
            svg
            style={{
              width: "24px",
              height: "24px",
            }}
            title="IT"
          />
          {CountryEnum.IT}
        </Space>
      ),
      key: "IT",
    },
    {
      type: "divider",
    },
    {
      label: (
        <Space>
          <ReactCountryFlag
            countryCode="SA"
            svg
            style={{
              width: "24px",
              height: "24px",
            }}
            title="SA"
          />
          {CountryEnum.SA}
        </Space>
      ),
      key: "SA",
    },
  ];

  const onClick: MenuProps["onClick"] = ({ key }) => {
    setLanguageCode(key)
  };

  return (
    <Header
      style={{
        padding: "0 32px",
        background: colorBgContainer,
        boxShadow: "0 0 4px 4px rgba(0, 0, 0, 0.08)",
        height: 72,
        zIndex:100
      }}
    >
      <Row
        style={{
          height: 72,
        }}
      >
        <Col span={6}>
          <Input
            placeholder="Search in app..."
            prefix={
              <SearchOutlined
                style={{ color: "rgba(0,0,0,.25)", fontSize: 16 }}
              />
            }
            variant="borderless"
          />
        </Col>
        <Col span={2} offset={16}>
          <Dropdown
            menu={{ items, onClick }}
            trigger={["click"]}
            placement="bottomRight"
            arrow={true}
            overlayStyle={{ width: 150 }}
          >
            <span
              style={{
                cursor: "pointer",
              }}
              onClick={(e) => e.preventDefault()}
            >
              <Space>
                <ReactCountryFlag
                  countryCode={languageCode}
                  svg
                  style={{
                    width: "24px",
                    height: "24px",
                  }}
                  title={languageCode}
                />
                {CountryEnum[languageCode]}
                <DownOutlined
                  style={{
                    fontSize: 8,
                  }}
                />
              </Space>
            </span>
          </Dropdown>
        </Col>
      </Row>
    </Header>
  );
}
