import { Fragment } from "react";
import styled from "styled-components";
import Button from "../components/ui/Button";
import ButtonGroup from "../components/ui/ButtonGroup";
import OutlineButton from "../components/ui/OutlineButton";

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${(props) => props.theme.spacing[3]};
`;

const ColorContainer = styled.div`
    display: grid;
    grid-auto-flow: row;
    grid-template-columns: 1fr 1fr 1fr;
    gap: ${(props) => props.theme.spacing[2]};
`;

const ColorSquare = styled.div<{ value: number; type: string }>`
    padding: ${(props) => props.theme.spacing[1]};
    border-radius: 4px;
    background-color: ${(props) => props.theme.colors[props.type][props.value]};
`;

const shades = [100, 200, 300, 400, 500, 600, 700, 800, 900];

function ColorView({ type }) {
    return (
        <ColorContainer>
            {shades.map((val) => (
                <ColorSquare type={type} key={val} value={val}>
                    {val}
                </ColorSquare>
            ))}
        </ColorContainer>
    );
}

const colorTypes = [
    "primaryShades",
    "successShades",
    "dangerShades",
    "warningShades",
    "infoShades",
    "neutralShades"
];

export default function Colors() {
    return (
        <PageContainer>
            {colorTypes.map((type) => (
                <Fragment key={type}>
                    <h1>{type}</h1>
                    <ColorView type={type} />
                </Fragment>
            ))}
            <h1>Regular Buttons</h1>
            <ButtonGroup>
                <Button palette="primary">Primary</Button>
                <Button palette="success">Success</Button>
            </ButtonGroup>
            <ButtonGroup>
                <Button palette="warning">Warning</Button>
                <Button palette="danger">Danger</Button>
            </ButtonGroup>
            <ButtonGroup>
                <Button palette="info">Info</Button>
                <Button palette="neutral">Neutral</Button>
            </ButtonGroup>
            <h1>Outline Buttons</h1>
            <ButtonGroup>
                <OutlineButton palette="primary">Primary Outline</OutlineButton>
                <OutlineButton palette="success">Success Outline</OutlineButton>
            </ButtonGroup>
            <ButtonGroup>
                <OutlineButton palette="warning">Warning Outline</OutlineButton>
                <OutlineButton palette="danger">Danger Outline</OutlineButton>
            </ButtonGroup>
            <ButtonGroup>
                <OutlineButton palette="info">Info Outline</OutlineButton>
                <OutlineButton palette="neutral">Neutral Outline</OutlineButton>
            </ButtonGroup>
        </PageContainer>
    );
}
