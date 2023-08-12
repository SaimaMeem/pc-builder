import { Carousel } from "antd";
import Image from "next/image";
import BannerImage from "../../../assets/images/banner.jpg";
const contentStyle = {
    margin: 0,
    height: "360px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
};
const Banner = () => {
    const onChange = (currentSlide) => {
        // console.log(currentSlide);
    };
    return (
        <Carousel afterChange={onChange}>
            <div>
                <Image
                    src={BannerImage}
                    alt="This is an image"
                    width={500}
                    height={500}
                    layout="responsive"
                ></Image>
            </div>
        </Carousel>
    );
};

export default Banner;
