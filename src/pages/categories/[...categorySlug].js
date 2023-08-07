import { useRouter } from "next/router";

const Category = () => {
    const router = useRouter();
    console.log(router);
    return <div>This is {router.query.categorySlug[0]}</div>;
};

export default Category;
