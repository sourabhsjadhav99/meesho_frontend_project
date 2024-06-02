import React from "react";
import style from "./spinner.module.css"; // Change this to your CSS file

const Spinner = ({ initial }) => {
    return (
        <div className={`${style.loadingSpinner} ${initial ? "initial" : ""}`}>
            <svg className={`${style.spinner}`} viewBox="0 0 50 50">
                <circle
                    className={`${style.path}`}
                    cx="25"
                    cy="25"
                    r="20"
                    fill="none"
                    strokeWidth="5"
                ></circle>
            </svg>
        </div>
    );
};

export default Spinner;
