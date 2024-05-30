"use client";

import {useState, useEffect } from "react";
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
  BarChartOutlined
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import {  Menu } from "antd";


type MenuItem = Required<MenuProps>["items"][number];




export default function customNav() {
  const [items,setItems] =useState<MenuItem[]>();

  useEffect(()=>{

    const fontStyles = {
      fontSize:20
    }
  

    const items: MenuItem[] = [
      {
        key: "1",
        label: "Main",
        type: "group",
        children: [
          {
            key: "1-1",
            icon: <DashboardOutlined style={fontStyles}/>,
            label: "Dashboard",
            children: [
              { key: "1-1-1", icon: <ApiOutlined style={fontStyles}/>, label: <Link href="/crypto">Crypto</Link> },
            ],
          },
          { key: "1-2", icon: <CreditCardOutlined style={fontStyles}/>, label: <Link href="/layout">Layout</Link>},
        ],
      },
      {
        key: "2",
        label: "In-built Apps",
        type: "group",
        children: [
          { key: "2-1", icon: <CheckSquareOutlined style={fontStyles}/>, label: <Link href="/todo">Todo App</Link>},
          { key: "2-2", icon: <ContactsOutlined style={fontStyles}/>, label: <Link href="/contacts">Contacts App</Link>},
        ],
      },
      {
        key: "3",
        label: "Components",
        type: "group",
        children: [
          {
            key: "3-1",
            icon: <UnorderedListOutlined style={fontStyles}/>,
            label: "General",
            children: [
              { key: "3-1-1",  label: <Link href="/button">Button</Link> },
              { key: "3-1-2",  label: <Link href="/icon">Icon</Link> }
            ],
          },
          {
            key: "3-2",
            icon: <CompassOutlined style={fontStyles}/>,
            label: "Navigation",
            children: [
              { key: "3-2-1",  label: <Link href="/pagination">Pagination</Link> }
            ],
          },
          {
            key: "3-3",
            icon: <GroupOutlined style={fontStyles}/>,
            label: "Data Entry",
            children: [
              { key: "3-3-1",label: <Link href="/checkbox">Checkbox</Link> },
              { key: "3-3-2",  label: <Link href="/datepicker">Datepicker</Link> },
              { key: "3-3-3",  label: <Link href="/form">Form</Link> },
            ],
          },
          {
            key: "3-4",
            icon: <FundProjectionScreenOutlined style={fontStyles}/>,
            label: "Data Display",
            children: [
              { key: "3-4-1",  label: <Link href="/avatar">Avatar</Link> },
              { key: "3-4-2", label: <Link href="/carousel">Carousel</Link> },
              { key: "3-4-3", label: <Link href="/calender">Calender</Link> },
            ],
          },
          {
            key: "3-5",
            icon: <TableOutlined style={fontStyles}/>,
            label: "Table",
            children: [
              { key: "3-5-1",  label: <Link href="/baseTable">Base Table</Link> },
              { key: "3-5-2",  label: <Link href="/dataTable">Data Table</Link> }
            ],
          },
        ],
        
      },
      {
        key: "4",
        label: "Extensions",
        type: "group",
        children: [
          {
            key: "4-1",
            icon:<BarChartOutlined style={fontStyles}/>,
            label: "Chart",
            children: [
              { key: "4-1-1", label: <Link href="/rechart">Rechart</Link> }
            ]
          }]}
      
    ];
    setItems(items)
  },[])


  return (
    <Menu
      className="custom-menu"
      defaultSelectedKeys={["1"]}
      defaultOpenKeys={["sub1"]}
      mode="inline"
      theme="dark"
      items={items}
    />
  );
}
