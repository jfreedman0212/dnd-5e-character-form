import { ForwardedRef, forwardRef } from "react";
import { ChangeHandler } from "react-hook-form";
import styled from "styled-components";
import Label from "./Label";

const Container = styled.div`
    display: flex;
    gap: 0.25rem;
    align-items: center;
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
                <input
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
