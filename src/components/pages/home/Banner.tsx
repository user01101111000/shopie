import React from "react";
import { NavigateFunction, useNavigate } from "react-router";

type BannerProps = {
    src: string,
    alt: string,
    url: string
};
const Banner: React.FC<BannerProps> = ({ alt, src, url }) => {

    const navigate: NavigateFunction = useNavigate();

    return <figure className="banner_figure" onClick={(): void => {
        navigate(url);
    }}>
        <img src={src} alt={alt} loading="lazy" className="banner_img" />
    </figure>
}

export default Banner;