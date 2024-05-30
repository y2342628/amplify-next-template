"use client";

import { Layout, Button, theme, ConfigProvider } from "antd";

import { Authenticator } from "@aws-amplify/ui-react";
import { getCurrentUser } from "aws-amplify/auth";

import { Amplify } from "aws-amplify";
import outputs from "@root/amplify_outputs.json";
Amplify.configure(outputs);

import CustomSider from "./CustomSider";
import CustomHeader from "./CustomHeader";

const { Content } = Layout;

export default function CustomLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  async function currentUser() {
    const { username, userId, signInDetails } = await getCurrentUser();

    console.log(11111111111, username, userId, signInDetails);
  }

  return (
    <Authenticator socialProviders={["google"]}>
      {({ signOut, user }) => (
        <ConfigProvider
          theme={{
            token: {
              // Seed Token，影响范围大
              colorPrimary: "var(--color-primary)",
            },
            components: {
              Layout: {
                siderBg: "var(--sider-bg)",
              },
              Menu: {
                darkItemBg: "var(--sider-bg)",
                darkSubMenuItemBg: "var(--sider-bg)",
                darkItemSelectedColor: "#fa8c15",
                darkItemHoverColor: "#fa8c15",
                darkItemSelectedBg: "transparent",
                darkItemColor: "var(--color-primary)",
                darkGroupTitleColor: "var(--color-primary)",
                subMenuItemBg: "red",
              },
            },
          }}
        >
          <Layout hasSider style={{ height: "100vh" }}>
            <CustomSider signOut={signOut} />
            <Layout>
              <CustomHeader />
              <Content
                style={{
                  padding: "32px 32px 0",
                  overflowX: "hidden",
                  overflowY: "auto",
                }}
              >
                <main
                  style={{
                    padding: 24,
                    textAlign: "center",
                    background: colorBgContainer,
                    borderRadius: borderRadiusLG,
                  }}
                >
                  <div>
                    <Button onClick={currentUser}>currentUser</Button>
                  </div>
                  {children}
                </main>
              </Content>
            </Layout>
          </Layout>
        </ConfigProvider>
      )}
    </Authenticator>
  );
}
