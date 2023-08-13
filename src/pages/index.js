import RootLayout from "@/components/layouts/RootLayout";
import Banner from "@/components/UI/home/Banner";
import Categories from "@/components/UI/home/Categories";
import Products from "@/components/UI/home/Products";
import Head from "next/head";

export default function Home({ products }) {
    return (
        <>
            <Head>
                <title>PC Builder</title>
                <meta
                    name="description"
                    content="This is a pc-builder website made using next-js"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Banner />
            <Categories />
            <Products products={products}></Products>
        </>
    );
}

Home.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>;
};

export const getStaticProps = async () => {
    const res = await fetch(`${process.env.SERVER_URL}/products`);
    const data = await res.json();
    return {
        props: {
            products: data.data,
        },
        revalidate: 30,
    };
};
