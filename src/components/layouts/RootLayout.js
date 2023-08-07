import { Layout, Menu, theme } from "antd";
import Link from "next/link";
const { Header, Content, Footer } = Layout;
const RootLayout = ({ children }) => {
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    const items = [
        {
            label: "Home",
            key: "/",
        },
        {
            label: "Categories",
            key: "SubMenu",
            children: [
                {
                    label: (
                        <Link href={"/categories/cpu"}>CPU / Processor</Link>
                    ),
                },
                {
                    label: (
                        <Link href={"/categories/motherboard"}>Motherboard</Link>
                    ),
                },
                {
                    label: (
                        <Link href={"/categories/ram"}>RAM</Link>
                    ),
                },
            ],
        },
    ];

    return (
        <Layout className="layout">
            <Header
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "white",
                }}
            >
                <div className="demo-logo" />
                <Menu
                    className="w-full flex justify-center"
                    mode="horizontal"
                    items={items}
                />
            </Header>
            <Content
                style={{
                    padding: "0 50px",
                    minHeight: "100vh",
                }}
            >
                <div
                    className="site-layout-content"
                    style={{
                        background: colorBgContainer,
                    }}
                >
                    {children}
                </div>
            </Content>
            <Footer
                style={{
                    textAlign: "center",
                }}
            >
                © 2023 Copyright: PC Builder
            </Footer>
        </Layout>
    );
};
export default RootLayout;
