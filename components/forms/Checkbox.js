import { forwardRef } from "react";
import styled from "styled-components";
import Label from "./Label";

const Container = styled.div`
    display: flex;
    gap: 0.25rem;
    align-items: center;
`;

const Checkbox = forwardRef(({ name, onBlur, onChange, value, label }, ref) => {
    return (
        <Container>
            <input
                id={`${name}-${value}`}
                onChange={onChange}
                onBlur={onBlur}
                name={name}
                ref={ref}
                type={"checkbox"}
                value={value}
            />
            {label ? <Label htmlFor={`${name}-${value}`}>{label}</Label> : null}
        </Container>
    );
});

export default Checkbox;
