"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

import {
  DashboardOutlined,
  ApiOutlined,
  CreditCardOutlined,
  CheckSquareOutlined,
  ContactsOutlined,
  UnorderedListOutlined,
  CompassOutlined,
  GroupOutlined,
  FundProjectionScreenOutlined,
  TableOutlined,
  BarChartOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Menu } from "antd";

type MenuItem = Required<MenuProps>["items"][number];

export default function customNav() {
  const [items, setItems] = useState<MenuItem[]>();

  const [defaultSelectedKeys, setDefaultSelectedKeys] = useState<string[]>();
  const [defaultOpenKeys, setDefaultOpenKeys] = useState<string[]>();

  const pathname = usePathname();

  useEffect(() => {
    const fontStyles = {
      fontSize: 20,
    };

    const items: MenuItem[] = [
      {
        key: "main",
        label: "Main",
        type: "group",
        children: [
          {
            key: "dashboard",
            icon: <DashboardOutlined style={fontStyles} />,
            label: "Dashboard",
            children: [
              {
                key: "crypto",
                icon: <ApiOutlined style={fontStyles} />,
                label: <Link href="/dashboard/crypto">Crypto</Link>,
              },
            ],
          },
          {
            key: "layout",
            icon: <CreditCardOutlined style={fontStyles} />,
            label: <Link href="/layout">Layout</Link>,
          },
        ],
      },
      {
        key: "in-built",
        label: "In-built Apps",
        type: "group",
        children: [
          {
            key: "todo",
            icon: <CheckSquareOutlined style={fontStyles} />,
            label: <Link href="/todo">Todo App</Link>,
          },
          {
            key: "contacts",
            icon: <ContactsOutlined style={fontStyles} />,
            label: <Link href="/contacts">Contacts App</Link>,
          },
        ],
      },
      {
        key: "components",
        label: "Components",
        type: "group",
        children: [
          {
            key: "general",
            icon: <UnorderedListOutlined style={fontStyles} />,
            label: "General",
            children: [
              {
                key: "button",
                label: <Link href="/general/button">Button</Link>,
              },
              { key: "icon", label: <Link href="/general/icon">Icon</Link> },
            ],
          },
          {
            key: "navigation",
            icon: <CompassOutlined style={fontStyles} />,
            label: "Navigation",
            children: [
              {
                key: "pagination",
                label: <Link href="/navigation/pagination">Pagination</Link>,
              },
            ],
          },
          {
            key: "data-entry",
            icon: <GroupOutlined style={fontStyles} />,
            label: "Data Entry",
            children: [
              {
                key: "checkbox",
                label: <Link href="/data-entry/checkbox">Checkbox</Link>,
              },
              {
                key: "datepicker",
                label: <Link href="/data-entry/datepicker">Datepicker</Link>,
              },
              { key: "form", label: <Link href="/data-entry/form">Form</Link> },
            ],
          },
          {
            key: "data-display",
            icon: <FundProjectionScreenOutlined style={fontStyles} />,
            label: "Data Display",
            children: [
              {
                key: "avatar",
                label: <Link href="/data-display/avatar">Avatar</Link>,
              },
              {
                key: "carousel",
                label: <Link href="/data-display/carousel">Carousel</Link>,
              },
              {
                key: "calender",
                label: <Link href="/data-display/calender">Calender</Link>,
              },
            ],
          },
          {
            key: "table",
            icon: <TableOutlined style={fontStyles} />,
            label: "Table",
            children: [
              {
                key: "base-table",
                label: <Link href="/table/base-table">Base Table</Link>,
              },
              {
                key: "data-table",
                label: <Link href="/table/data-table">Data Table</Link>,
              },
            ],
          },
        ],
      },
      {
        key: "extensions",
        label: "Extensions",
        type: "group",
        children: [
          {
            key: "chart",
            icon: <BarChartOutlined style={fontStyles} />,
            label: "Chart",
            children: [
              {
                key: "re-chart",
                label: <Link href="/chart/rechart">Rechart</Link>,
              },
            ],
          },
        ],
      },
    ];
    setItems(items);
  }, []);

  useEffect(() => {
    if (!pathname) return;
    const path = pathname.split("/").filter((i) => i);
    const selectedKey = path.pop();
    if (selectedKey) setDefaultSelectedKeys([selectedKey]);
    if (path.length) setDefaultOpenKeys(path);
  }, []);

  if (!defaultSelectedKeys) return null;

  return (
    <Menu
      className="custom-menu"
      defaultSelectedKeys={defaultSelectedKeys}
      defaultOpenKeys={defaultOpenKeys}
      mode="inline"
      theme="dark"
      items={items}
    />
  );
}
