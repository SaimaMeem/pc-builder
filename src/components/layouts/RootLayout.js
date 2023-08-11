import { Button, Layout, Menu } from "antd";
import Link from "next/link";
const { Header, Content, Footer } = Layout;
const RootLayout = ({ children }) => {
    const items = [
        {
            label: <Link href={"/"}>Home</Link>,
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
                        <Link href={"/categories/motherboard"}>
                            Motherboard
                        </Link>
                    ),
                },
                {
                    label: <Link href={"/categories/ram"}>RAM</Link>,
                },
                {
                    label: (
                        <Link href={"/categories/power-supply-unit"}>
                            Power Supply Unit
                        </Link>
                    ),
                },
                {
                    label: (
                        <Link href={"/categories/storage-device"}>
                            Storage Device
                        </Link>
                    ),
                },
                {
                    label: <Link href={"/categories/monitor"}>Monitor</Link>,
                },
                {
                    label: <Link href={"/categories/others"}>Others</Link>,
                },
            ],
        },
        {
            label: (
                <Button
                    type="primary"
                    href="https://www.google.com"
                    className=""
                >
                    PC Builder
                </Button>
            ),
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
                className="shadow-lg"
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
                }}
                className="md:px-10"
            >
                <div className="site-layout-content">{children}</div>
            </Content>
            <Footer
                style={{
                    textAlign: "center",
                }}
                className="font-semibold"
            >
                © 2023 Copyright: PC Builder
            </Footer>
        </Layout>
    );
};
export default RootLayout;
