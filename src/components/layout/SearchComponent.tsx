import React from "react";
import { FiSearch } from "react-icons/fi";
import useGetAllProductsQuery from "../../hooks/service/useGetAllProductsQuery";
import { Product } from "../../ts/interfaces/products";

const SearchComponent = () => {

    const [show, setShow] = React.useState<boolean>(true);
    const [input_value, setInputValue] = React.useState<string>("");
    const { data, isLoading } = useGetAllProductsQuery(input_value)


    const li_elements = data?.products.filter((product: Product) => product.title.toLowerCase().includes(input_value)).map((product: Product) => <li key={product.id}>
        <img src="https://img.freepik.com/free-vector/white-blurred-background_1034-249.jpg?w=360" alt={product.title} data-src={product.image} onLoad={(e) => {
            e.currentTarget.src = e.currentTarget.dataset.src as string;
        }} />
        <p>{product.title}</p>
    </li>)


    return <div className="input_area_header">

        {input_value && show && <div className="search_result_wrapper">
            {isLoading ? <h1>Loading</h1> : <ul>{li_elements}</ul>}
        </div>}

        <input type="text" placeholder="Search for products" value={input_value} onChange={(e) => {
            setInputValue(e.target.value)
            setShow(true)
        }} onBlur={() => {
            setTimeout(() => {
                setShow(false);
            }, 100);
        }} />
        <FiSearch className="nav_tools_icon" />
    </div>
}

export default SearchComponent;