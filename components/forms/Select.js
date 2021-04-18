import styled from "styled-components";
import { forwardRef } from "react";
import Label from "./Label";
import ErrorMessage from "./ErrorMessage";
import FormGroup from "./FormGroup";
import { inputCss } from "./inputCss";

const SelectElement = styled.select`
    ${inputCss};

    & option {
        background: ${(props) => props.theme.colors.dark};
        color: ${(props) => props.theme.colors.light};
    }

    & option:disabled {
        color: ${(props) => props.theme.colors.secondary};
    }
`;

const Select = forwardRef(
    (
        { label, name, onChange, onBlur, errorMessage, children, ...rest },
        ref
    ) => {
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
                {errorMessage ? (
                    <ErrorMessage>{errorMessage}</ErrorMessage>
                ) : null}
            </FormGroup>
        );
    }
);

export default Select;
