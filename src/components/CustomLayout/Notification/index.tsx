import {  Row, Col, Avatar, Dropdown, Space } from "antd";
import {
  DownOutlined,
  SearchOutlined,
  NotificationOutlined,
  MessageOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";

export default function Notification({
    signOut,
  }: {
    signOut?: (data?: any | undefined) => void;
  }) {
  const items: MenuProps["items"] = [
    {
      label: "My Account",
      key: "0",
    },
    {
      label: "Connections",
      key: "1",
    },
    {
      type: "divider",
    },
    {
      label: "logout",
      key: "3",
    },
  ];

  return (
    <div
      style={{
        padding: "30px 10px 10px",
        margin: "0 20px 10px",
        borderBottom: "solid 1px #e8e8e8",
        borderBottomColor: "#038fdd",
      }}
    >
      <Row
        align="middle"
        style={{
          marginBottom: "1.5rem",
        }}
      >
        <Col
          style={{
            marginRight: "1rem",
          }}
        >
          <Avatar size="large" src="/user-logo.png" />
        </Col>
        <Col>
          <Dropdown
            menu={{ items }}
            trigger={["click"]}
            placement="bottomRight"
            arrow={true}
            overlayStyle={{width:150}}
          >
            <span style={{
                cursor:"pointer"
            }} onClick={(e) => e.preventDefault()}>
              <Space>
                Rob Farnandies
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
      <Row>
        <Col span={6}>
          <SearchOutlined style={{
            fontSize:20
          }}/>
        </Col>
        <Col span={6}>
          <NotificationOutlined style={{
            fontSize:20
          }}/>
        </Col>
        <Col span={6}>
          <MessageOutlined style={{
            fontSize:20
          }} />
        </Col>
      </Row>
    </div>
  );
}
