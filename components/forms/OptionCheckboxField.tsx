import { ForwardedRef, forwardRef } from "react";
import { ChangeHandler } from "react-hook-form";
import { ApiReference } from "../../lib/dnd5e_api";
import Checkbox from "./Checkbox";

type OptionCheckboxFieldProps = Readonly<{
    item: ApiReference;
    onChange: ChangeHandler;
    onBlur: ChangeHandler;
    name: string;
}>;

const OptionCheckboxField = forwardRef(
    (
        { item, onChange, onBlur, name }: OptionCheckboxFieldProps,
        ref: ForwardedRef<HTMLInputElement>
    ) => {
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
