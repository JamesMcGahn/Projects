import { down } from "./sizes"
import chroma from "chroma-js";

const styles = {
    root: {
        width: "20%",
        height: '25%',
        margin: "0 auto",
        display: "inline-block",
        position: "relative",
        cursor: "pointer",
        marginBottom: "-3.5px",
        "&:hover svg": {
            color: "white",
            transform: "scale(1.5)"
        },
        [down("lg")]: {
            width: "25%",
            height: "20%"
        },
        [down("md")]: {
            width: "50%",
            height: "10%"
        },
        [down("sm")]: {
            width: "100%",
            height: "5%"
        }
    },
    boxContent: {
        position: "absolute",
        width: "100%",
        left: "0px",
        bottom: "0px",
        padding: "10px",
        color: props =>
            chroma(props.color).luminance() <= 0.08 ? "white" : "black",
        letterSpacing: "1px",
        textTransform: "uppercase",
        fontSize: "12px",
        display: "flex",
        justifyContent: "space-between"
    },
    deleteIcon: {
        transition: "all 0.3s ease-in-out"
    }
};

export default styles