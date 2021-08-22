import React from "react";
import onClickOutside from "react-onclickoutside";

const ClickOutsideWrapper = (props) => {
    const { setStatefn } = props
    ClickOutsideWrapper.handleClickOutside = () => setStatefn(false);
    return (
        <>
            {props.children}
        </>
    );
};

const clickOutsideConfig = {
    handleClickOutside: () => ClickOutsideWrapper.handleClickOutside
};

export default onClickOutside(ClickOutsideWrapper, clickOutsideConfig);
