"use client";

import { Row, Col, Card, Flex } from "antd";

import {
  StepBackwardOutlined,
  StepForwardOutlined,
  FastBackwardOutlined,
  FastForwardOutlined,
  ShrinkOutlined,
  ArrowsAltOutlined,
  DownOutlined,
  UpOutlined,
  LeftOutlined,
  RightOutlined ,
  CaretUpOutlined ,
  CaretDownOutlined ,
  CaretLeftOutlined ,
  CaretRightOutlined ,
  UpCircleOutlined ,
  DownCircleOutlined ,
  LeftCircleOutlined ,
  RightCircleOutlined ,
  DoubleRightOutlined ,
  DoubleLeftOutlined ,
  VerticalLeftOutlined ,
  VerticalRightOutlined ,
  VerticalAlignTopOutlined ,
  VerticalAlignMiddleOutlined ,
  VerticalAlignBottomOutlined ,
  ForwardOutlined ,
  BackwardOutlined ,
  RollbackOutlined ,
  EnterOutlined ,
  RetweetOutlined ,
  SwapOutlined ,
  SwapLeftOutlined ,
  SwapRightOutlined ,
  ArrowUpOutlined ,
  ArrowDownOutlined ,
  ArrowLeftOutlined ,
  ArrowRightOutlined ,
  PlayCircleOutlined ,
  UpSquareOutlined ,
  DownSquareOutlined ,
  LeftSquareOutlined ,
  RightSquareOutlined ,
  LoginOutlined ,
  LogoutOutlined ,
  MenuFoldOutlined ,
  MenuUnfoldOutlined ,
  BorderBottomOutlined ,
  PicCenterOutlined ,
  PicLeftOutlined ,
  PicRightOutlined ,
  EditOutlined ,
  FormOutlined ,
  CopyOutlined ,
  ScissorOutlined ,
  DeleteOutlined ,
  AccountBookOutlined ,
  AimOutlined ,
  AlertOutlined ,
  AuditOutlined ,
  BankOutlined ,
  BarcodeOutlined ,
  BarsOutlined ,
  BellOutlined ,
  BlockOutlined ,
  BookOutlined ,
  BorderOutlined ,
  BorderlessTableOutlined ,
  CommentOutlined ,
  CompassOutlined ,
  ContainerOutlined ,
  ControlOutlined ,
  CopyrightOutlined ,
  CrownOutlined ,
  CustomerServiceOutlined ,
  DashboardOutlined ,
  DatabaseOutlined ,
  DeleteColumnOutlined ,
  DeleteRowOutlined ,
  DeliveredProcedureOutlined 
} from "@ant-design/icons";
import styles from "./index.module.css";

const _icons = [
  { name: "StepBackwardOutlined", component: StepBackwardOutlined },
  { name: "StepForwardOutlined", component: StepForwardOutlined },
  { name: "FastBackwardOutlined", component: FastBackwardOutlined },
  { name: "FastForwardOutlined", component: FastForwardOutlined },
  { name: "ShrinkOutlined", component: ShrinkOutlined },
  { name: "ArrowsAltOutlined", component: ArrowsAltOutlined },
  { name: "DownOutlined", component: DownOutlined },
  { name: "UpOutlined", component: UpOutlined },
  { name: "LeftOutlined", component: LeftOutlined },
  { name: "RightOutlined", component: RightOutlined },
  { name: "CaretUpOutlined", component: CaretUpOutlined },
  { name: "CaretDownOutlined", component: CaretDownOutlined },
  { name: "CaretLeftOutlined", component: CaretLeftOutlined },
  { name: "CaretRightOutlined", component: CaretRightOutlined },
  { name: "UpCircleOutlined", component: UpCircleOutlined },
  { name: "DownCircleOutlined", component: DownCircleOutlined },
  { name: "LeftCircleOutlined", component: LeftCircleOutlined },
  { name: "RightCircleOutlined", component: RightCircleOutlined },
  { name: "DoubleRightOutlined", component: DoubleRightOutlined },
  { name: "DoubleLeftOutlined", component: DoubleLeftOutlined },
  { name: "VerticalLeftOutlined", component: VerticalLeftOutlined },
  { name: "VerticalRightOutlined", component: VerticalRightOutlined },
  { name: "VerticalAlignTopOutlined", component: VerticalAlignTopOutlined },
  { name: "VerticalAlignMiddleOutlined", component: VerticalAlignMiddleOutlined },
  { name: "VerticalAlignBottomOutlined", component: VerticalAlignBottomOutlined },
  { name: "ForwardOutlined", component: ForwardOutlined },
  { name: "BackwardOutlined", component: BackwardOutlined },
  { name: "RollbackOutlined", component: RollbackOutlined },
  { name: "EnterOutlined", component: EnterOutlined },
  { name: "RetweetOutlined", component: RetweetOutlined },
  { name: "SwapOutlined", component: SwapOutlined },
  { name: "SwapLeftOutlined", component: SwapLeftOutlined },
  { name: "SwapRightOutlined", component: SwapRightOutlined },
  { name: "ArrowUpOutlined", component: ArrowUpOutlined },
  { name: "ArrowDownOutlined", component: ArrowDownOutlined },
  { name: "ArrowLeftOutlined", component: ArrowLeftOutlined },
  { name: "ArrowRightOutlined", component: ArrowRightOutlined },
  { name: "PlayCircleOutlined", component: PlayCircleOutlined },
  { name: "UpSquareOutlined", component: UpSquareOutlined },
  { name: "DownSquareOutlined", component: DownSquareOutlined },
  { name: "LeftSquareOutlined", component: LeftSquareOutlined },
  { name: "RightSquareOutlined", component: RightSquareOutlined },
  { name: "LoginOutlined", component: LoginOutlined },
  { name: "LogoutOutlined", component: LogoutOutlined },
  { name: "MenuFoldOutlined", component: MenuFoldOutlined },
  { name: "MenuUnfoldOutlined", component: MenuUnfoldOutlined },
  { name: "BorderBottomOutlined", component: BorderBottomOutlined },
  { name: "PicCenterOutlined", component: PicCenterOutlined },
  { name: "PicLeftOutlined", component: PicLeftOutlined },
  { name: "PicRightOutlined", component: PicRightOutlined },
  { name: "EditOutlined", component: EditOutlined },
  { name: "FormOutlined", component: FormOutlined },
  { name: "CopyOutlined", component: CopyOutlined },
  { name: "ScissorOutlined", component: ScissorOutlined },
  { name: "DeleteOutlined", component: DeleteOutlined },
  { name: "AccountBookOutlined", component: AccountBookOutlined },
  { name: "AimOutlined", component: AimOutlined },
  { name: "AlertOutlined", component: AlertOutlined },
  { name: "AuditOutlined", component: AuditOutlined },
  { name: "BankOutlined", component: BankOutlined },
  { name: "BarcodeOutlined", component: BarcodeOutlined },
  { name: "BarsOutlined", component: BarsOutlined },
  { name: "BellOutlined", component: BellOutlined },
  { name: "BlockOutlined", component: BlockOutlined },
  { name: "BookOutlined", component: BookOutlined },
  { name: "BorderOutlined", component: BorderOutlined },
  { name: "BorderlessTableOutlined", component: BorderlessTableOutlined },

  { name: "CommentOutlined", component: CommentOutlined },
  { name: "CompassOutlined", component: CompassOutlined },
  { name: "ContainerOutlined", component: ContainerOutlined },
  { name: "ControlOutlined", component: ControlOutlined },
  { name: "CopyrightOutlined", component: CopyrightOutlined },
  { name: "CrownOutlined", component: CrownOutlined },
  { name: "CustomerServiceOutlined", component: CustomerServiceOutlined },
  { name: "DashboardOutlined", component: DashboardOutlined },
  { name: "DatabaseOutlined", component: DatabaseOutlined },
  { name: "DeleteColumnOutlined", component: DeleteColumnOutlined },
  { name: "DeleteRowOutlined", component: DeleteRowOutlined },
  { name: "DeliveredProcedureOutlined", component: DeliveredProcedureOutlined }
];
export default function Page() {
  return (
    <Card title="ICONS" hoverable className="box-shadow">
      <Row gutter={[16, 16]}>
        {_icons.map(({ name, component: Component }) => (
          <Col key={name} span={4} xs={12} sm={8} md={6} lg={4}>
            <Flex
              className={styles.iconItem}
              vertical
              justify="center"
              align="center"
            >
              <Component
                style={{
                  fontSize: 20,
                }}
              />
              <p>{name}</p>
            </Flex>
          </Col>
        ))}
      </Row>
    </Card>
  );
}
