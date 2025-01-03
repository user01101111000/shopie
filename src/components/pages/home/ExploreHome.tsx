import useGetAllProductsQuery from "../../../hooks/service/useGetAllProductsQuery";
import { Product } from "../../../ts/interfaces/products";
import ProductCard from "../../ui/ProductCard";
import SectionTitle from "../../ui/SectionTitle";
import ViewAllProductsButton from "../../ui/ViewAllProductsButton";

const ExploreHome = () => {

    const { data, isLoading } = useGetAllProductsQuery("best_selling");

    const best_selling_elements = data?.products.slice(90, 100).map((x: Product) => <ProductCard key={x.id} data={x} />);

    return <section className="explore_home_container">
        <SectionTitle title="Our Products" />

        <div className="explore_home_container_header">
            <h1>Explore Our Products</h1>
        </div>

        <div className="explore_home_container_body">{best_selling_elements}</div>


        <div className="explore_home_container_button_wrapper">
            <ViewAllProductsButton title="View All Products" url="/products" />
        </div>
    </section >
}

export default ExploreHome;