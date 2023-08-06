import RootLayout from "@/components/layouts/RootLayout";

export default function Home() {
    console.log("Home");
    return (
        <div>
            <h1 className="border-2">Home</h1>
        </div>
    );
}

Home.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>;
};
