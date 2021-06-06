import { useFormContext } from "react-hook-form";
import ErrorMessage from "../../../forms/ErrorMessage";
import OptionCheckboxField from "../../../forms/OptionCheckboxField";
import FieldSet from "../../../forms/FieldSet";
import { Choice } from "../../../../lib/dnd5e_api";

type LanguagesSectionProps = Readonly<{
    languageOptions: Choice;
}>;

export default function LanguagesSection({
    languageOptions
}: LanguagesSectionProps) {
    const {
        register,
        formState: { errors }
    } = useFormContext();

    return (
        <FieldSet>
            <legend>Choose {languageOptions.choose} Extra Language</legend>
            {errors?.languageOptions?.message ? (
                <ErrorMessage>{errors.languageOptions.message}</ErrorMessage>
            ) : null}
            {languageOptions.from.map((language) => (
                <OptionCheckboxField
                    key={language.index}
                    item={language}
                    {...register("languageOptions", {
                        validate: (value) => {
                            if (value.length !== languageOptions.choose) {
                                return `Must choose exactly ${languageOptions.choose}`;
                            }
                            return true;
                        }
                    })}
                />
            ))}
        </FieldSet>
    );
}
