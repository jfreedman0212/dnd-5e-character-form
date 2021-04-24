import SectionHeading from "../../ui/SectionHeading";
import ProficienciesList from "./ProficienciesList";
import ProficiencyChoices from "./ProficiencyChoices";

export default function ProficienciesSection({
    proficiencies,
    proficiencyChoices
}) {
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
