import { useQuery } from "react-query";
import Loading from "../../../utils/Loading";
import SubSectionHeading from "../../../ui/SubSectionHeading";
import Input from "../../../forms/Input";
import ErrorMessage from "../../../forms/ErrorMessage";
import OptionCheckboxField from "../../../forms/OptionCheckboxField";
import FieldSet from "../../../forms/FieldSet";
import { useFormContext } from "react-hook-form";
import React from "react";
import styled from "styled-components";
import Select from "../../../forms/Select";

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

const HiddenFieldSet = styled(FieldSet)`
    display: none;
`;

export default function RaceChoicesForm({ raceIndex }) {
    const {
        register,
        formState: { errors },
        reset
    } = useFormContext();

    const { data, status } = useQuery({
        queryKey: ["api", "races", raceIndex],
        onSuccess: (successfulData) => {
            const { speed, ability_bonuses, languages, size } = successfulData;
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
                languageOptions: []
            });
        },
        // only refetch when raceIndex changes and NEVER at another time
        refetchOnMount: false,
        refetchOnWindowFocus: false,
        refetchOnReconnect: false
    });

    const { data: alignments, status: alignmentsStatus } = useQuery([
        "api",
        "alignments"
    ]);

    if (alignmentsStatus === "error" || alignmentsStatus === "idle") {
        throw new Error(
            "Could not fetch alignments. This is most likely an issue with the D&D API."
        );
    }

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
            <Input label={"Speed"} {...register("speed")} readOnly />
            <SubSection>
                <SubSectionHeading>Size</SubSectionHeading>
                <Input label={"Size"} {...register("size")} readOnly />
                <span>{data.size_description}</span>
            </SubSection>
            <SubSection>
                <SubSectionHeading>Ability Score Bonuses</SubSectionHeading>
                <BonusContainer>
                    {data.ability_bonuses.map(({ ability_score }) => (
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
                            <option value={alignment.index}>
                                {alignment.name}
                            </option>
                        ))}
                </Select>
                <span>{data.alignment}</span>
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
                        }
                    })}
                    errorMessage={errors?.age?.message}
                />
                <span>{data.age}</span>
            </SubSection>
            <SubSection>
                <SubSectionHeading>Languages</SubSectionHeading>
                <HiddenFieldSet disabled>
                    {data.languages.map((language) => (
                        <OptionCheckboxField
                            key={language.index}
                            item={language}
                            {...register("languages")}
                        />
                    ))}
                </HiddenFieldSet>
                <span>{data.language_desc}</span>
                {data.language_options ? (
                    <FieldSet>
                        <legend>Choose {data.language_options.choose}</legend>
                        {errors?.languageOptions?.message ? (
                            <ErrorMessage>
                                {errors.languageOptions.message}
                            </ErrorMessage>
                        ) : null}
                        {data.language_options.from.map((language) => (
                            <OptionCheckboxField
                                key={language.index}
                                item={language}
                                {...register("languageOptions", {
                                    validate: (value) => {
                                        if (
                                            value.length !==
                                            data.language_options.choose
                                        ) {
                                            return `Must choose exactly ${data.language_options.choose}`;
                                        }
                                        return true;
                                    }
                                })}
                            />
                        ))}
                    </FieldSet>
                ) : null}
            </SubSection>
        </>
    );
}
