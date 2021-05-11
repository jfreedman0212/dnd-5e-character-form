import { useFormContext } from "react-hook-form";
import ErrorMessage from "../../../forms/ErrorMessage";
import OptionCheckboxField from "../../../forms/OptionCheckboxField";
import styled from "styled-components";
import FieldSet from "../../../forms/FieldSet";
import SubSectionHeading from "../../../ui/SubSectionHeading";
import { ApiReference, Choice } from "../../../../lib/frontend/dnd5e_api/types";

const HiddenFieldSet = styled(FieldSet)`
    display: none;
`;

type LanguagesSectionProps = Readonly<{
    languages: ApiReference[];
    languageOptions?: Choice;
    languageDescription: string;
}>;

export default function LanguagesSection({
    languages,
    languageOptions,
    languageDescription
}: LanguagesSectionProps) {
    const {
        register,
        formState: { errors }
    } = useFormContext();

    return (
        <>
            <SubSectionHeading>Languages</SubSectionHeading>
            <HiddenFieldSet disabled>
                {languages.map((language) => (
                    <OptionCheckboxField
                        key={language.index}
                        item={language}
                        {...register("languages")}
                    />
                ))}
            </HiddenFieldSet>
            <span>{languageDescription}</span>
            {languageOptions ? (
                <FieldSet>
                    <legend>Choose {languageOptions.choose}</legend>
                    {errors?.languageOptions?.message ? (
                        <ErrorMessage>
                            {errors.languageOptions.message}
                        </ErrorMessage>
                    ) : null}
                    {languageOptions.from.map((language) => (
                        <OptionCheckboxField
                            key={language.index}
                            item={language}
                            {...register("languageOptions", {
                                validate: (value) => {
                                    if (
                                        value.length !== languageOptions.choose
                                    ) {
                                        return `Must choose exactly ${languageOptions.choose}`;
                                    }
                                    return true;
                                }
                            })}
                        />
                    ))}
                </FieldSet>
            ) : null}
        </>
    );
}
