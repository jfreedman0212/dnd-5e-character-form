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
import RaceInformationSection from "./RaceInformationSection";

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
    return (
        <>
            <RaceInformationSection
                sizeDescription={sizeDescription}
                languagesDescription={languageDescription}
            />
            {languageOptions ? (
                <LanguagesSection languageOptions={languageOptions} />
            ) : null}
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
