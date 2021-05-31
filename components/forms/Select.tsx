import styled from "styled-components";
import {
    ForwardedRef,
    forwardRef,
    ReactNode,
    SelectHTMLAttributes
} from "react";
import Label from "./Label";
import ErrorMessage from "./ErrorMessage";
import FormGroup from "./FormGroup";
import { inputCss } from "./inputCss";
import { ChangeHandler } from "react-hook-form";

const SelectElement = styled.select`
    ${inputCss}
`;

type SelectProps = Readonly<{
    label: string;
    name: string;
    onChange: ChangeHandler;
    onBlur: ChangeHandler;
    errorMessage?: string;
    children: ReactNode;
}> &
    SelectHTMLAttributes<unknown>;

function SelectComponent(
    {
        label,
        name,
        onChange,
        onBlur,
        errorMessage,
        children,
        ...rest
    }: SelectProps,
    ref: ForwardedRef<unknown>
) {
    return (
        <FormGroup>
            <Label htmlFor={name}>{label}</Label>
            <SelectElement
                id={name}
                name={name}
                onChange={onChange}
                onBlur={onBlur}
                ref={ref}
                {...rest}
            >
                {children}
            </SelectElement>
            {errorMessage ? <ErrorMessage>{errorMessage}</ErrorMessage> : null}
        </FormGroup>
    );
}

const Select = forwardRef(SelectComponent);

export default Select;
