import { useFormContext } from "react-hook-form";
import styled from "styled-components";
import Input from "../../forms/Input";

// TODO: refactor into form components folder?
const HiddenInput = styled(Input)`
    display: none;
`;

const UnorderedList = styled.ul`
    list-style-type: square;
    margin: 0;
    padding-left: 1rem;
`;

export default function ProficienciesList({ proficiencies }) {
    const { register } = useFormContext();
    return (
        <UnorderedList>
            {proficiencies.map((proficiency) => (
                <li key={proficiency.index}>
                    {proficiency.name}
                    <HiddenInput
                        type={"hidden"}
                        {...register("proficiencies")}
                    />
                </li>
            ))}
        </UnorderedList>
    );
}
