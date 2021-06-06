import { Control, useController } from "react-hook-form";
import styled, { css } from "styled-components";
import Card from "../../../ui/Card";

const Container = styled(Card)`
    ${(props) => css`
        @media only screen and (min-width: ${props.theme.breakpoints.medium}) {
            display: grid;
            grid-template-areas:
                "speed        size     "
                "abilityBonus languages";
            grid-template-columns: 1fr 1fr;
        }
    `};
`;

const Info = styled.article<{ gridArea: string }>`
    display: flex;
    flex-direction: column;
    gap: ${(props) => props.theme.spacing[1]};
    grid-area: ${(props) => props.gridArea};
`;

const InfoLabel = styled.span`
    color: ${(props) => props.theme.colors.neutral[700]};
    font-size: ${(props) => props.theme.fontSizes.small};
`;

const InfoValue = styled.span`
    color: ${(props) => props.theme.colors.primary[600]};
    font-weight: 600;
`;

const InfoDescription = styled.small`
    color: ${(props) => props.theme.colors.neutral[700]};
    font-size: ${(props) => props.theme.fontSizes.extraSmall};
`;

const UnorderedList = styled.ul`
    margin: 0;
    padding: 0;
    list-style-type: none;
`;

type RaceInformationSectionProps = Readonly<{
    control?: Control;
    sizeDescription: string;
    languagesDescription: string;
}>;

export default function RaceInformationSection({
    control,
    sizeDescription,
    languagesDescription
}: RaceInformationSectionProps) {
    const { field: speedField } = useController({
        name: "speed",
        control
    });
    const { field: sizeField } = useController({
        name: "size",
        control
    });
    const { field: languagesField } = useController({
        name: "languages",
        control
    });
    const { field: charismaField } = useController({
        name: "abilityScoreBonus.cha",
        control
    });
    const { field: strengthField } = useController({
        name: "abilityScoreBonus.str",
        control
    });
    const { field: wisdomField } = useController({
        name: "abilityScoreBonus.wis",
        control
    });
    const { field: constitutionField } = useController({
        name: "abilityScoreBonus.con",
        control
    });
    const { field: dexterityField } = useController({
        name: "abilityScoreBonus.dex",
        control
    });
    const { field: intelligenceField } = useController({
        name: "abilityScoreBonus.int",
        control
    });

    const abilityScores = [
        charismaField,
        strengthField,
        wisdomField,
        constitutionField,
        dexterityField,
        intelligenceField
    ]
        .filter((score) => score.value !== undefined)
        .map((score) => `${mapName(score.name)} +${score.value}`);

    return (
        <Container>
            <Info gridArea="speed">
                <InfoLabel id="speedLabel">Speed</InfoLabel>
                <InfoValue aria-labelledby="speedLabel">
                    {speedField.value} feet
                </InfoValue>
            </Info>

            <Info gridArea="size">
                <InfoLabel id="sizeLabel">Size</InfoLabel>
                <InfoValue
                    aria-labelledby="sizeLabel"
                    aria-describedby="sizeDescription"
                >
                    {sizeField.value}
                </InfoValue>
                <InfoDescription id="sizeDescription">
                    {sizeDescription}
                </InfoDescription>
            </Info>

            <Info gridArea="abilityBonus">
                <InfoLabel id="abilityBonusLabel">
                    Ability Score Bonuses
                </InfoLabel>
                <InfoValue aria-labelledby="abilityBonusLabel">
                    <UnorderedList>
                        {abilityScores.map((score) => (
                            <li key={score}>{score}</li>
                        ))}
                    </UnorderedList>
                </InfoValue>
            </Info>

            <Info gridArea="languages">
                <InfoLabel id="languagesLabel">Languages</InfoLabel>
                <InfoValue
                    aria-labelledby="languagesLabel"
                    aria-describedby="languagesDescription"
                    style={{ textTransform: "capitalize" }}
                >
                    {languagesField.value.join(", ")}
                </InfoValue>
                <InfoDescription id="languagesDescription">
                    {languagesDescription}
                </InfoDescription>
            </Info>
        </Container>
    );
}

function mapName(name: string): string {
    const score = name.substring(name.lastIndexOf(".") + 1);
    switch (score) {
        case "cha":
            return "Charisma";
        case "str":
            return "Strength";
        case "wis":
            return "Wisdom";
        case "con":
            return "Constitution";
        case "dex":
            return "Dexterity";
        case "int":
            return "Intelligence";
    }
}
