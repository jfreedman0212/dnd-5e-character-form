import { useQuery } from "react-query";
import Loading from "../../../utils/Loading";
import SubSectionHeading from "../../../ui/SubSectionHeading";
import Input from "../../../forms/Input";
import { useFormContext, useWatch } from "react-hook-form";
import React from "react";
import styled from "styled-components";
import Select from "../../../forms/Select";
import LanguagesSection from "./LanguagesSection";
import TraitsSection from "./TraitsSection";
import ProficienciesList from "../ProficienciesList";
import { Race, ResourceList } from "../../../../lib/dnd5e_api";
import RaceChildForm from "./RaceChildForm";

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
    border: 2px solid ${(props) => props.theme.colors.dark};
`;

type RaceChoicesFormProps = Readonly<{
    raceIndex: string;
}>;

export default function RaceChoicesForm({ raceIndex }: RaceChoicesFormProps) {
    const {
        register,
        formState: { errors },
        reset
    } = useFormContext();

    const watchSubRace = useWatch({ name: "subrace", defaultValue: "" });

    const { data, status } = useQuery<Race>({
        queryKey: ["api", "races", raceIndex],
        onSuccess: (successfulData) => {
            const {
                speed,
                ability_bonuses,
                languages,
                size,
                traits,
                starting_proficiencies
            } = successfulData;
            reset({
                race: raceIndex,
                speed,
                size,
                abilityScoreBonus: ability_bonuses.reduce(
                    (previous, { ability_score, bonus }) => {
                        return {
                            ...previous,
                            [ability_score.index]: bonus
                        };
                    },
                    {}
                ),
                alignment: "",
                languages: languages.map((language) => language.index),
                languageOptions: [],
                traits: traits.map((trait) => trait.index),
                proficiencies: starting_proficiencies.map((x) => x.index),
                proficiencyChoices: []
            });
        },
        // only refetch when raceIndex changes and NEVER at another time
        refetchOnMount: false,
        refetchOnWindowFocus: false,
        refetchOnReconnect: false
    });

    if (status === "loading") {
        return <Loading />;
    } else if (status === "error") {
        throw new Error(
            `Could not load ${raceIndex}! This is most likely an issue with the D&D API.`
        );
    } else if (status === "idle") {
        throw new Error(
            `Race query for ${raceIndex} is idle. This is an application issue.`
        );
    }

    return (
        <>
            {data.subraces.length > 0 ? (
                <Select
                    label={"Subrace"}
                    {...register("subrace", {
                        required: "This field is required."
                    })}
                    defaultValue={""}
                    errorMessage={errors?.subrace?.message}
                >
                    <option value={""} disabled>
                        Please select a subrace
                    </option>
                    {data.subraces.map((subrace) => (
                        <option key={subrace.index} value={subrace.index}>
                            {subrace.name}
                        </option>
                    ))}
                </Select>
            ) : null}
            <RaceChildForm 
                abilityBonuses={data.ability_bonuses}
                languages={data.languages}
                languageOptions={data.language_options}
                languageDescription={data.language_desc}
                sizeDescription={data.size_description}
                ageDescription={data.age}
                traits={data.traits}
                traitOptions={data.trait_options}
                alignmentDescription={data.alignment}
                startingProficiencies={data.starting_proficiencies}
            />
        </>
    );
}
