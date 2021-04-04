import styled from "styled-components";
import { forwardRef } from "react";
import Label from "./Label";
import ErrorMessage from "./ErrorMessage";
import FormGroup from "./FormGroup";
import { inputCss } from "./input-css";

const InputElement = styled.input`
    ${inputCss}
`;

const Input = forwardRef(
    ({ label, name, onChange, onBlur, errorMessage, ...rest }, ref) => {
        return (
            <FormGroup>
                <Label htmlFor={name}>{label}</Label>
                <InputElement
                    type={"text"}
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
