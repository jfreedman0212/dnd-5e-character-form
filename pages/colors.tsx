import { Fragment } from "react";
import styled from "styled-components";
import Button from "../components/ui/Button";
import ButtonGroup from "../components/ui/ButtonGroup";

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
            <ButtonGroup>
                <Button color="primary">Primary</Button>
                <Button color="success">Success</Button>
            </ButtonGroup>
            <ButtonGroup>
                <Button color="warning">Warning</Button>
                <Button color="danger">Danger</Button>
            </ButtonGroup>
            <ButtonGroup>
                <Button color="info">Info</Button>
                <Button color="neutral">Neutral</Button>
            </ButtonGroup>
        </PageContainer>
    );
}
