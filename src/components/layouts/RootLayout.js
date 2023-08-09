import { Layout, Menu, theme } from "antd";
import Link from "next/link";
const { Header, Content, Footer } = Layout;
const RootLayout = ({ children }) => {
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
                }} className="shadow-lg"
            >
                <div className="demo-logo" />
                <Menu
                    className="w-full flex justify-center font-medium"
                    mode="horizontal"
                    items={items}
                />
            </Header>
            <Content
                style={{
                    minHeight: "100vh",
                }} className="md:px-10"
            >
                <div
                    className="site-layout-content"
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
