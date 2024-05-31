"use client";
import { useState } from "react";
import { Row, Col, Card, Flex, Pagination } from "antd";
import type { PaginationProps } from "antd";

export default function Page() {
  const onShowSizeChange: PaginationProps["onShowSizeChange"] = (
    current,
    pageSize
  ) => {
    console.log(current, pageSize);
  };
  const onChange: PaginationProps["onChange"] = (pageNumber) => {
    console.log("Page: ", pageNumber);
  };

  const showTotal: PaginationProps["showTotal"] = (total) =>
    `Total ${total} items`;

  const [current, setCurrent] = useState(3);

  const onChange1: PaginationProps["onChange"] = (page) => {
    console.log(page);
    setCurrent(page);
  };
  const itemRender: PaginationProps["itemRender"] = (
    _,
    type,
    originalElement
  ) => {
    if (type === "prev") {
      return <a>Previous</a>;
    }
    if (type === "next") {
      return <a>Next</a>;
    }
    return originalElement;
  };

  return (
    <Row gutter={32}>
      <Col span={12}>
        <Flex gap="large" vertical>
          <Card title="BASIC  PAGINATION" hoverable className="box-shadow">
            <Pagination defaultCurrent={1} total={50} />
          </Card>
          <Card title="MORE PAGINATION" hoverable className="box-shadow">
            <Pagination defaultCurrent={6} total={500} />
          </Card>
          <Card title="CHANGER PAGINATION" hoverable className="box-shadow">
            <Pagination
              showSizeChanger
              onShowSizeChange={onShowSizeChange}
              defaultCurrent={3}
              total={500}
            />
          </Card>
          <Card title="JUMPER PAGINATION" hoverable className="box-shadow">
            <Pagination
              showQuickJumper
              defaultCurrent={2}
              total={500}
              onChange={onChange}
            />
          </Card>
          <Card title="MINI SIZE PAGINATION" hoverable className="box-shadow">
            <Pagination size="small" total={50} />
            <br />
            <Pagination
              size="small"
              total={50}
              showSizeChanger
              showQuickJumper
            />
            <br />
            <Pagination size="small" total={50} showTotal={showTotal} />
          </Card>
        </Flex>
      </Col>
      <Col span={12}>
        <Flex gap="large" vertical>
          <Card title="SIMPLE MODE PAGINATION" hoverable className="box-shadow">
            <Pagination simple defaultCurrent={2} total={50} />
          </Card>
          <Card title="CONTROLLED PAGINATION" hoverable className="box-shadow">
            <Pagination current={current} onChange={onChange1} total={50} />
          </Card>
          <Card
            title="TOTAL NUMBER PAGINATION"
            hoverable
            className="box-shadow"
          >
            <Pagination
              total={85}
              showTotal={(total) => `Total ${total} items`}
              defaultPageSize={20}
              defaultCurrent={1}
            />
            <br />
            <Pagination
              total={85}
              showTotal={(total, range) =>
                `${range[0]}-${range[1]} of ${total} items`
              }
              defaultPageSize={20}
              defaultCurrent={1}
            />
          </Card>
          <Card
            title="JPREV AND NEXT PAGINATION"
            hoverable
            className="box-shadow"
          >
            <Pagination total={500} itemRender={itemRender} />
          </Card>
        </Flex>
      </Col>
    </Row>
  );
}
