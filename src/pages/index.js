import RootLayout from "@/components/layouts/RootLayout";
import Products from "@/components/UI/Products";
import Head from "next/head";

export default function Home({ products }) {
    console.log(products);
    return (
        <>
            <Head>
                <title>PH-News Portal</title>
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
            <Products products={products}></Products>
        </>
    );
}

Home.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>;
};

export const getStaticProps = async () => {
    const res = await fetch("http://localhost:5000/products/");
    const data = await res.json();
    console.log(data);
    return {
        props: {
            products: data,
        },
    };
};
