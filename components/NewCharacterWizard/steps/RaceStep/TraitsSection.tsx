import { useFormContext } from "react-hook-form";
import { ApiReference, Choice } from "../../../../lib/frontend/dnd5e_api/types";
import { InfoExpand, InfoExpandWithCheckbox } from "../../../forms/InfoExpand";
import SubSectionHeading from "../../../ui/SubSectionHeading";

type TraitsSectionProps = Readonly<{
    traits: ApiReference[];
    traitOptions?: Choice;
}>;

export default function TraitsSection({
    traits,
    traitOptions
}: TraitsSectionProps) {
    const { register } = useFormContext();
    return (
        <>
            <SubSectionHeading>Traits</SubSectionHeading>
            {traits.map((trait) => (
                <InfoExpand
                    key={trait.index}
                    item={trait}
                    {...register("traits")}
                />
            ))}
            {traitOptions && traitOptions.from.length > 0 ? (
                <>
                    <SubSectionHeading>Trait Options</SubSectionHeading>
                    {traitOptions.from.map((trait) => (
                        <InfoExpandWithCheckbox
                            key={trait.index}
                            item={trait}
                            {...register("traitOptions")}
                        />
                    ))}
                </>
            ) : null}
        </>
    );
}
