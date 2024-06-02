import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Img = ({ src, className, ...rest }) => {
    return (
        <LazyLoadImage
            className={className || ""}
            alt="no image"
            effect="blur"
            src={src}
            {...rest}
        />
    );
};

export default Img;