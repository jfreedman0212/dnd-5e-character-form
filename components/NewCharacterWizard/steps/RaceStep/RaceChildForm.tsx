import SubSectionHeading from "../../../ui/SubSectionHeading";
import Input from "../../../forms/Input";
import React from "react";
import styled from "styled-components";
import Select from "../../../forms/Select";
import LanguagesSection from "./LanguagesSection";
import TraitsSection from "./TraitsSection";
import ProficienciesList from "../ProficienciesList";
import { useQuery } from "react-query";
import {
    AbilityBonus,
    ApiReference,
    Choice,
    ResourceList
} from "../../../../lib/dnd5e_api";
import { useFormContext } from "react-hook-form";
import Loading from "../../../utils/Loading";

type RaceChildFormProps = Readonly<{
    abilityBonuses: AbilityBonus[];
    languages: ApiReference[];
    languageOptions: Choice;
    languageDescription: string;
    sizeDescription: string;
    ageDescription: string;
    traits: ApiReference[];
    traitOptions: any;
    alignmentDescription: string;
    startingProficiencies: ApiReference[];
}>;

const BonusContainer = styled.div`
    display: grid;
    gap: 1.5rem;
    grid-template-columns: repeat(2, 1fr);
`;

const SubSection = styled.section`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 2rem;
    border: 2px solid ${(props) => props.theme.colors.neutral[900]};
`;

export default function RaceChildForm({
    abilityBonuses,
    languages,
    languageOptions,
    languageDescription,
    sizeDescription,
    ageDescription,
    traits,
    traitOptions,
    alignmentDescription,
    startingProficiencies
}: RaceChildFormProps) {
    const {
        register,
        formState: { errors }
    } = useFormContext();

    const {
        data: alignments,
        status: alignmentsStatus
    } = useQuery<ResourceList>(["api", "alignments"]);

    if (alignmentsStatus === "error" || alignmentsStatus === "idle") {
        throw new Error(
            "Could not fetch alignments. This is most likely an issue with the D&D API."
        );
    }

    return (
        <>
            <Input label={"Speed"} {...register("speed")} readOnly />
            <SubSection>
                <SubSectionHeading>Size</SubSectionHeading>
                <Input label={"Size"} {...register("size")} readOnly />
                <span>{sizeDescription}</span>
            </SubSection>
            <SubSection>
                <SubSectionHeading>Ability Score Bonuses</SubSectionHeading>
                <BonusContainer>
                    {abilityBonuses.map(({ ability_score }) => (
                        <Input
                            key={ability_score.index}
                            label={ability_score.name}
                            {...register(
                                `abilityScoreBonus.${ability_score.index}`
                            )}
                            readOnly
                        />
                    ))}
                </BonusContainer>
            </SubSection>
            <SubSection>
                <SubSectionHeading>Alignment</SubSectionHeading>
                {alignmentsStatus === "loading" ? (
                    <Loading />
                ) : (
                    <>
                        <Select
                            label={"Alignment"}
                            {...register("alignment", {
                                required: "This field is required"
                            })}
                            errorMessage={errors?.alignment?.message}
                        >
                            <option value={""} disabled>
                                Choose an alignment
                            </option>
                            {alignments &&
                                alignments.results.map((alignment) => (
                                    <option
                                        key={alignment.index}
                                        value={alignment.index}
                                    >
                                        {alignment.name}
                                    </option>
                                ))}
                        </Select>
                        <span>{alignmentDescription}</span>
                    </>
                )}
            </SubSection>
            <SubSection>
                <SubSectionHeading>Age</SubSectionHeading>
                <Input
                    label={"Age"}
                    type={"number"}
                    {...register("age", {
                        required: "This field is required",
                        min: {
                            value: 0,
                            message: "Must be greater than 0"
                        },
                        valueAsNumber: true
                    })}
                    errorMessage={errors?.age?.message}
                />
                <span>{ageDescription}</span>
            </SubSection>
            <SubSection>
                <LanguagesSection
                    languages={languages}
                    languageOptions={languageOptions}
                    languageDescription={languageDescription}
                />
            </SubSection>
            {traits.length > 0 ? (
                <SubSection>
                    <TraitsSection
                        traits={traits}
                        traitOptions={traitOptions}
                    />
                </SubSection>
            ) : null}
            {startingProficiencies && startingProficiencies.length > 0 ? (
                <SubSection>
                    <SubSectionHeading>Proficiencies</SubSectionHeading>
                    <ProficienciesList proficiencies={startingProficiencies} />
                </SubSection>
            ) : null}
        </>
    );
}
