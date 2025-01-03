import useGetAllProductsQuery from "../../../hooks/service/useGetAllProductsQuery";
import { Product } from "../../../ts/interfaces/products";
import ProductCard from "../../ui/ProductCard";
import SectionTitle from "../../ui/SectionTitle";
import ViewAllProductsButton from "../../ui/ViewAllProductsButton";

const BestSelling = () => {


    const { data, isLoading } = useGetAllProductsQuery("best_selling");


    const best_selling_elements = data?.products.filter(((x: Product) => x.popular)).slice(4, 8).map((x: Product) => <ProductCard key={x.id} data={x} />);



    return <section className="best_selling_container">
        <SectionTitle title="This Month" />

        <div className="best_selling_container_header">
            <h1>Best Selling Products</h1>
            <div className="best_selling_button_wrapper">
                <ViewAllProductsButton title="View All" url="/products" />
            </div>
        </div>

        <div className="best_selling_container_body">{best_selling_elements}</div>

    </section>
}

export default BestSelling;