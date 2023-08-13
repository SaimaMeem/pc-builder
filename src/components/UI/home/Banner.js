import { Carousel } from "antd";
import Image from "next/image";
import BannerImage from "../../../assets/images/banner.jpg";

const Banner = () => {
    const onChange = (currentSlide) => {
        // console.log(currentSlide);
    };
    return (
        <Carousel afterChange={onChange}>
            <div className="max-h-[520px]">
                <Image
                    src={BannerImage}
                    alt="This is an image"
                    width={350}
                    height={350}
                    layout="responsive"
                ></Image>
            </div>
        </Carousel>
    );
};

export default Banner;
