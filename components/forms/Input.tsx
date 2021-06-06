import styled from "styled-components";
import { ComponentProps, ForwardedRef, forwardRef } from "react";
import Label from "./Label";
import ErrorMessage from "./ErrorMessage";
import FormGroup from "./FormGroup";
import { inputCss } from "./inputCss";
import { ChangeHandler } from "react-hook-form";
import InputDescription from "./InputDescription";

const InputElement = styled.input`
    ${inputCss}
`;

type InputProps = Readonly<{
    label: string;
    name: string;
    onChange: ChangeHandler;
    onBlur: ChangeHandler;
    errorMessage?: string;
    description?: string;
}> &
    ComponentProps<typeof InputElement>;

const Input = forwardRef(
    (
        {
            label,
            name,
            onChange,
            onBlur,
            errorMessage,
            description,
            ...rest
        }: InputProps,
        ref: ForwardedRef<HTMLInputElement>
    ) => {
        return (
            <FormGroup>
                <Label htmlFor={name}>{label}</Label>
                <InputElement
                    id={name}
                    name={name}
                    onChange={onChange}
                    onBlur={onBlur}
                    ref={ref}
                    aria-describedby={`${name}Description`}
                    {...rest}
                />
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
);

export default Input;
