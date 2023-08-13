import { Card, Col, Row } from "antd";
import Link from "next/link";

const Categories = () => {
    const categories = [
        {
            label: "CPU / Processor",
            link: "/cpu",
        },
        {
            label: "Motherboard",
            link: "/motherboard",
        },
        {
            label: "RAM",
            link: "/ram",
        },
        {
            label: "Power Supply Unit",
            link: "/power-supply-unit",
        },
        {
            label: "Storage Device",
            link: "/storage-device",
        },
        {
            label: "Monitor",
            link: "/monitor",
        },
        {
            label: "Others",
            link: "/others",
        },
    ];
    return (
        <div className="mt-10">
            <h1 className="font-semibold text-3xl text-center my-10">
                Featured Categories
            </h1>
            <Row gutter={16} className="text-center font-semibold w-full">
                {categories.map((category) => (
                    <Col key={category.label} span={6} xs={12} md={6} className="py-2">
                        <Card bordered={false}>
                            {" "}
                            <Link href={category.link}>{category.label}</Link>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default Categories;
