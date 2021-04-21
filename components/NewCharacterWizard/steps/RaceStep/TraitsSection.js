import { useFormContext } from "react-hook-form";
import { InfoExpand, InfoExpandWithCheckbox } from "../../../forms/InfoExpand";
import SubSectionHeading from "../../../ui/SubSectionHeading";

export default function TraitsSection({ traits, traitOptions }) {
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
