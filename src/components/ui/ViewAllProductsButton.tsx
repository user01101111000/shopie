import React from "react";
import { NavigateFunction, useNavigate } from "react-router";

type ViewAllProductsButtonProps = {
    title: string,
    url: string
}

const ViewAllProductsButton: React.FC<ViewAllProductsButtonProps> = ({ title, url }) => {

    const navigate: NavigateFunction = useNavigate();

    return <button className="view_all_products_button" onClick={() => {
        navigate(url);
    }}>{title}</button>
}
export default ViewAllProductsButton;
