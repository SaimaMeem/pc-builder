import { Button, Card, Col, Row } from "antd";
import Image from "next/image";
import Link from "next/link";

const Components = ({ components }) => {
    const { Meta } = Card;
    return (
        <>
            <h1 className="font-semibold text-3xl text-center mt-5 pt-5">
                Featured Products
            </h1>
            <Row
                gutter={{
                    xs: 8,
                    sm: 16,
                    md: 24,
                    lg: 32,
                }}
                className="py-6 px-10"
            >
                {components.slice(15).map((component) => (
                    <Col key={component.id} className="gutter-row" span={6}>
                        <Card
                            hoverable
                            cover={
                                <Image
                                    src={component?.image}
                                    width={350}
                                    height={350}
                                    responsive
                                    alt="component image"
                                    className="p-6"
                                />
                            }
                        >
                            <Meta title={component?.name} />

                            <p
                                style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    width: "100%",
                                    color: "gray",
                                    margin: "10px 0px",
                                    fontSize: "16px",
                                }}
                            >{component?.category}</p>

                            <p style={{ fontSize: "15px" }}>
                                {component?.description.length > 100
                                    ? component?.description.slice(0, 70) +
                                      "..."
                                    : component?.description}
                            </p>
                            <Link href={`/component/${component?.id}`}>
                                <Button type="primary" className="mt-6">
                                    View Details
                                </Button>
                            </Link>
                        </Card>
                    </Col>
                ))}
            </Row>
        </>
    );
};

export default Components;
