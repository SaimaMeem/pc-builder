import auth from "@/firebase/firebase.auth";
import { CaretDownOutlined } from "@ant-design/icons";
import { Button, Layout, Menu } from "antd";
import { signOut as nSignOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useAuthState, useSignOut } from "react-firebase-hooks/auth";
const { Header, Content, Footer } = Layout;
const RootLayout = ({ children }) => {
    const { data: session } = useSession();
    const [user, loading, error] = useAuthState(auth);
    const [signOut] = useSignOut(auth);

    const logOut = async () => {
        if (session?.user) {
            await nSignOut();
        } else {
            await signOut();
        }
    };
    const items = [
        {
            label: <Link href={"/"}>Home</Link>,
            key: "",
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
                <Button type="primary" href={"/pc-builder/"} className="">
                    PC Builder
                </Button>
            ),
        },
    ];
    if (session?.user || user?.email) {
        items.push({
            label: (
                <div className="flex justify-center items-center space-x-2">
                    <span>
                        {session?.user?.name || user?.email.split("@")[0]}
                    </span>{" "}
                    <span className="hidden md:block">
                        <CaretDownOutlined />
                    </span>
                </div>
            ),
            key: "SubMenu2",

            children: [
                {
                    label: (
                        <Link
                            href={"/"}
                            className="text-center"
                            onClick={() => logOut()}
                        >
                            Log Out
                        </Link>
                    ),
                },
            ],
        });
    } else {
        items.push({
            label: (
                <Link type="primary" href={"/login"} className="">
                    Login
                </Link>
            ),
        });
    }

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
                    placement="bottomLeft"
                    arrow={{
                        pointAtCenter: true,
                    }}
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
