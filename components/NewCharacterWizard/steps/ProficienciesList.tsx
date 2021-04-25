import { useFormContext } from "react-hook-form";
import styled from "styled-components";
import { ApiReference } from "../../../lib/dnd5e_api";

// TODO: refactor into form components folder?
const HiddenInput = styled.input`
    display: none;
`;

const UnorderedList = styled.ul`
    list-style-type: square;
    margin: 0;
    padding-left: 1rem;
`;

type ProficienciesListProps = Readonly<{
    proficiencies: ApiReference[];
}>;

export default function ProficienciesList({
    proficiencies
}: ProficienciesListProps) {
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
