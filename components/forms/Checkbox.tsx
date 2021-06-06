import { ForwardedRef, forwardRef } from "react";
import { ChangeHandler } from "react-hook-form";
import styled from "styled-components";
import Label from "./Label";

const Container = styled.div`
    display: flex;
    gap: ${(props) => props.theme.spacing[1]};
    align-items: stretch;
`;

const ButtonInput = styled.input`
    margin: 0;
`;

type CheckboxProps = Readonly<{
    name: string;
    onBlur: ChangeHandler;
    onChange: ChangeHandler;
    value: string;
    label?: string;
    type?: "checkbox" | "radio";
}>;

const Checkbox = forwardRef(
    (
        { name, onBlur, onChange, value, label, type }: CheckboxProps,
        ref: ForwardedRef<HTMLInputElement>
    ) => {
        return (
            <Container>
                <ButtonInput
                    id={`${name}-${value}`}
                    onChange={onChange}
                    onBlur={onBlur}
                    name={name}
                    ref={ref}
                    type={type}
                    value={value}
                />
                {label ? (
                    <Label htmlFor={`${name}-${value}`}>{label}</Label>
                ) : null}
            </Container>
        );
    }
);

Checkbox.defaultProps = {
    type: "checkbox"
};

export default Checkbox;
