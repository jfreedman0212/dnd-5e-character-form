import styled from "styled-components";
import { forwardRef, InputHTMLAttributes } from "react";
import Label from "./Label";
import ErrorMessage from "./ErrorMessage";
import FormGroup from "./FormGroup";
import { inputCss } from "./inputCss";
import { ChangeHandler } from "react-hook-form";

const InputElement = styled.input`
    ${inputCss}
`;

type InputProps = Readonly<{
    label: string;
    name: string;
    onChange: ChangeHandler;
    onBlur: ChangeHandler;
    errorMessage?: string;
}> &
    InputHTMLAttributes<unknown>;

const Input = forwardRef(
    (
        { label, name, onChange, onBlur, errorMessage, ...rest }: InputProps,
        ref
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
                    {...rest}
                />
                {errorMessage ? (
                    <ErrorMessage>{errorMessage}</ErrorMessage>
                ) : null}
            </FormGroup>
        );
    }
);

export default Input;
