import RootLayout from "@/components/layouts/RootLayout";
import { Button, Card, Col, Row } from "antd";
import Link from "next/link";
import { useSelector } from "react-redux";
const PCBuilder = () => {
    const categories = [
        {
            label: "CPU / Processor",
            link: "/pc-builder/cpu",
        },
        {
            label: "Motherboard",
            link: "/pc-builder/motherboard",
        },
        {
            label: "RAM",
            link: "/pc-builder/ram",
        },
        {
            label: "Power Supply Unit",
            link: "/pc-builder/power-supply-unit",
        },
        {
            label: "Storage Device",
            link: "/pc-builder/storage-device",
        },
        {
            label: "Monitor",
            link: "/pc-builder/monitor",
        },
        {
            label: "Others",
            link: "/pc-builder/others",
        },
    ];
    const selectedCategories = useSelector(
        (state) => state.pcBuilder.categories
    );
    let selectedCategoryKeys = [];
    let selectedCategoryValues = [];

    selectedCategories.forEach((obj) => {
        selectedCategoryKeys = selectedCategoryKeys.concat(Object.keys(obj));
        selectedCategoryValues = selectedCategoryValues.concat(Object.values(obj));
    });
    console.log(selectedCategoryKeys);
    console.log(selectedCategories);
    console.log(selectedCategoryValues);
    return (
        <div className="mt-10">
            <h1 className="font-semibold text-3xl text-center my-10">
                PC Builder - Build Your Own Computer
            </h1>
            <Row
                gutter={32}
                className="text-center font-semibold justify-center"
            >
                {categories.map((category) => (
                    <Col key={category.label} span={16} className="py-2">
                        <Card>
                            <div className="flex justify-between px-4">
                                <h4>{category.label}</h4>
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
                                        {
                                            selectedCategories.find(obj => obj.hasOwnProperty(category.label))[category.label]
                                            }
                                    </Card>
                                </div>
                            )}
                        </Card>
                    </Col>
                ))}
            </Row>
            <div className="flex justify-center my-5">
                {" "}
                <Button type="primary" size="large" disabled={true}>
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
