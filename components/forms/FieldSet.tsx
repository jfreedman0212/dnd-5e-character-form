import { ComponentProps } from "react";
import styled from "styled-components";

const FieldSetContainer = styled.div`
    background-color: ${(props) => props.theme.colors.neutral[300]};
    border-radius: 5px;
    padding: ${(props) => props.theme.spacing[3]};
`;

const FieldSetElement = styled.fieldset`
    display: flex;
    flex-direction: column;
    gap: ${(props) => props.theme.spacing[2]};
    border: none;
    margin: 0;
    padding: 0;
    color: ${(props) => props.theme.colors.neutral[900]};
    & legend {
        font-weight: bold;
    }
`;

type FieldSetProps = ComponentProps<typeof FieldSetElement>;

export default function FieldSet(props: FieldSetProps) {
    return (
        <FieldSetContainer>
            <FieldSetElement {...props} />
        </FieldSetContainer>
    );
}
