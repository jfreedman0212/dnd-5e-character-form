import { ApiReference, Choice } from "../../../lib/frontend/dnd5e_api/types";
import SectionHeading from "../../ui/SectionHeading";
import ProficienciesList from "./ProficienciesList";
import ProficiencyChoices from "./ProficiencyChoices";

type ProficienciesSectionProps = Readonly<{
    proficiencies: ApiReference[];
    proficiencyChoices?: Choice[];
}>;

export default function ProficienciesSection({
    proficiencies,
    proficiencyChoices
}: ProficienciesSectionProps) {
    return (
        <>
            <SectionHeading>Proficiencies</SectionHeading>
            <ProficienciesList proficiencies={proficiencies} />
            {proficiencyChoices && proficiencyChoices.length > 0 ? (
                <ProficiencyChoices proficiencyChoices={proficiencyChoices} />
            ) : null}
        </>
    );
}
