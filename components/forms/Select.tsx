import styled from "styled-components";
import { ComponentProps, ForwardedRef, forwardRef, ReactNode } from "react";
import Label from "./Label";
import ErrorMessage from "./ErrorMessage";
import FormGroup from "./FormGroup";
import { inputCss } from "./inputCss";
import { ChangeHandler } from "react-hook-form";
import InputDescription from "./InputDescription";

const SelectElement = styled.select`
    ${inputCss}
`;

type SelectProps = Readonly<{
    label: string;
    name: string;
    onChange: ChangeHandler;
    onBlur: ChangeHandler;
    errorMessage?: string;
    description?: string;
    children: ReactNode;
}> &
    ComponentProps<typeof SelectElement>;

function SelectComponent(
    {
        label,
        name,
        onChange,
        onBlur,
        errorMessage,
        description,
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
                aria-describedby={`${name}Description`}
                {...rest}
            >
                {children}
            </SelectElement>
            {description ? (
                <InputDescription id={`${name}Description`}>
                    {description}
                </InputDescription>
            ) : null}
            {errorMessage ? (
                <ErrorMessage role="status" aria-live="polite">
                    {errorMessage}
                </ErrorMessage>
            ) : null}
        </FormGroup>
    );
}

export default forwardRef(SelectComponent);
