import { useState } from "react";


const UserInputState = initialVal => {
    const [value, setValue] = useState(initialVal);
    const handleChange = e => {
        setValue(e.target.value);
    };
    const reset = () => {
        setValue("");
    };
    return [value, handleChange, reset,];
};

export { UserInputState }