import { forwardRef } from "react";
import Checkbox from "./Checkbox";

const OptionCheckboxField = forwardRef(
    ({ item, onChange, onBlur, name }, ref) => {
        return (
            <Checkbox
                onChange={onChange}
                onBlur={onBlur}
                name={name}
                ref={ref}
                value={item.index}
                label={item.name}
            />
        );
    }
);

export default OptionCheckboxField;
