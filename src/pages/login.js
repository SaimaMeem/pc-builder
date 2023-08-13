/* eslint-disable react-hooks/rules-of-hooks */
import auth from "@/firebase/firebase.auth";
import { GoogleOutlined } from "@ant-design/icons";
import { Button, Divider, Form, Input } from "antd";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";

const login = () => {
    const [signInWithEmailAndPassword, user, loading, error] =
        useSignInWithEmailAndPassword(auth);
    const router = useRouter();
    const onFinish = async (values) => {
        await signInWithEmailAndPassword(values.email, values.password);
    };
    if (user) {
        router.push(router?.query?.callbackUrl || "/");
    }
    const onFinishFailed = (errorInfo) => {
        // console.log("Failed:", errorInfo);
    };
    return (
        <div className="flex justify-center items-center my-32 w-full md:mx-auto md:w-[450px] border-4 bg-[#F5F5F5]">
            <div className="mx-16 md:mx-10">
                <h1 className="font-semibold text-3xl text-center my-10">
                    Login
                </h1>
                <Form
                    className="px-16"
                    name="basic"
                    style={{
                        maxWidth: 600,
                    }}
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        label="Email Address"
                        name="email"
                        rules={[
                            {
                                required: true,
                                message: "Please enter your Email Address!",
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: "Please enter your password!",
                            },
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item
                        wrapperCol={{
                            offset: 8,
                            span: 32,
                        }}
                    >
                        <Button type="primary" htmlType="submit">
                            Submit{" "}
                        </Button>
                    </Form.Item>
                </Form>
                <Divider>OR</Divider>
                <div
                    className="flex justify-center items-center my-10 space-x-1 py-2 border-2 cursor-pointer hover:text-red-700 hover:rounded-lg hover:border-red-700 hover:ease-out hover:duration-500"
                    onClick={() =>
                        signIn("google", {
                            callbackUrl: "http://localhost:3000",
                        })
                    }
                >
                    <GoogleOutlined />
                    <span className="text-xs md:text-base">
                        Continue with Google
                    </span>
                </div>
            </div>
        </div>
    );
};

export default login;
