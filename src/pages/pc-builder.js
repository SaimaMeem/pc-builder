import RootLayout from "@/components/layouts/RootLayout";
import { Button, Card, Col, Row, message } from "antd";
import Link from "next/link";
import { useSelector } from "react-redux";

const PCBuilder = () => {
    const categories = [
        {
            label: "CPU / Processor",
            link: "/categories/cpu",
        },
        {
            label: "Motherboard",
            link: "/categories/motherboard",
        },
        {
            label: "RAM",
            link: "/categories/ram",
        },
        {
            label: "Power Supply Unit",
            link: "/categories/power-supply-unit",
        },
        {
            label: "Storage Device",
            link: "/categories/storage-device",
        },
        {
            label: "Monitor",
            link: "/categories/monitor",
        },
        {
            label: "Others",
            link: "/categories/others",
        },
    ];
    const selectedCategories = useSelector(
        (state) => state.pcBuilder.categories
    );

    let selectedCategoryKeys = [];
    selectedCategories.forEach((obj) => {
        selectedCategoryKeys = selectedCategoryKeys.concat(Object.keys(obj));
    });

    const showInnerProductCard = (categoryLabel) => {
        const product = selectedCategories.find((obj) =>
            obj.hasOwnProperty(categoryLabel)
        )[categoryLabel];
        return (
            <div className="flex flex-col md:flex-row items-center justify-around">
                <div className="w-[25%] hidden md:block">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={product?.image} alt="Product Image" />
                </div>
                <div className="flex flex-col md:flex-row justify-between w-[50%] space-y-1">
                    <div className="text-left">
                        <h1 className="text-xs md:text-lg font-semibold">
                            {product?.name}
                        </h1>
                        <div className="flex flex-col justify-between items-start">
                            <p className="py-1">
                                <span className="font-semibold text-xs md:text-base">
                                    {product?.status}
                                </span>
                            </p>
                        </div>
                    </div>
                    <div className="flex items-start">
                        <p className="lg:text-right">
                            <span className="font-semibold  text-xs md:text-xl">
                                {" "}
                                {product?.price}
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        );
    };
    const [messageApi, contextHolder] = message.useMessage();
    const success = () => {
        messageApi.open({
            type: "success",
            content: "The build process has been completed successfully.",
        });
    };
    return (
        <div className="mt-10 w-full">
            {contextHolder}
            <h1 className="font-semibold md:text-2xl text-center my-10">
                PC Builder - Build Your Own Computer
            </h1>
            <Row
                gutter={32}
                className="text-center font-semibold flex justify-center w-full"
            >
                {categories.map((category) => (
                    <Col
                        key={category.label}
                        span={32}
                        xs={32}
                        md={20}
                        lg={32}
                        xl={32}
                        className="py-2 w-full ml-8 md:ml-0"
                    >
                        <Card>
                            <div className="flex flex-col md:flex-row justify-between md:px-4 text-xs md:text-base space-y-2 md:space-y-0">
                                <h4 className="">{category.label}</h4>
                                {!selectedCategoryKeys.includes(
                                    category.label
                                ) && (
                                    <Link
                                        href={category.link}
                                        className="font-semibold"
                                    >
                                        Select
                                    </Link>
                                )}
                            </div>
                            {selectedCategoryKeys.includes(category.label) && (
                                <div className="mt-4">
                                    <Card type="inner">
                                        {showInnerProductCard(category.label)}
                                    </Card>
                                </div>
                            )}
                        </Card>
                    </Col>
                ))}
            </Row>
            <div className="flex justify-center my-5">
                {" "}
                <Button
                    type="primary"
                    size="large"
                    disabled={selectedCategories.length >= 5 ? false : true}
                    onClick={success}
                >
                    Complete Build
                </Button>
            </div>
        </div>
    );
};

export default PCBuilder;

PCBuilder.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>;
};
