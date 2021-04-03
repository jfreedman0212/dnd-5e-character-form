import styled from "styled-components";
import { forwardRef } from "react";
import Label from "./Label";
import ErrorMessage from "./ErrorMessage";
import FormGroup from "./FormGroup";

const InputElement = styled.input`
    border: none;
    border-radius: 0;
    background-color: #e8e8e8;
    padding: 0.5rem;

    &:focus {
        outline: 1px solid ${(props) => props.theme.primary};
    }
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
