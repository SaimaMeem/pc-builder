import { Card, Col, Row } from "antd";
import Link from "next/link";

const Categories = () => {
    return (
        <div className="mt-10">
            <h1 className="font-semibold text-3xl text-center my-10">
                Featured Categories
            </h1>
            <Row gutter={16} className="text-center font-semibold">
                <Col span={6} className="py-2">
                    <Card bordered={false}>
                        {" "}
                        <Link href={"/categories/cpu"}>CPU / Processor </Link>
                    </Card>
                </Col>
                <Col span={6} className="py-2">
                    <Card bordered={false}>
                        <Link href={"/categories/motherboard"}>
                            Motherboard
                        </Link>
                    </Card>
                </Col>
                <Col span={6} className="py-2">
                    <Card bordered={false}>
                        <Link href={"/categories/ram"}>RAM</Link>
                    </Card>
                </Col>
                <Col span={6} className="py-2">
                    <Card bordered={false}>
                        {" "}
                        <Link href={"/categories/power-supply-unit"}>
                            Power Supply Unit
                        </Link>
                    </Card>
                </Col>
                <Col span={6} className="py-2">
                    <Card bordered={false}>
                        {" "}
                        <Link href={"/categories/storage-device"}>
                            Storage Device
                        </Link>
                    </Card>
                </Col>
                <Col span={6} className="py-2">
                    <Card bordered={false}>
                        <Link href={"/categories/monitor"}>Monitor</Link>
                    </Card>
                </Col>
                <Col span={6} className="py-2">
                    <Card bordered={false}>
                        {" "}
                        <Link href={"/categories/others"}>Other</Link>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default Categories;
