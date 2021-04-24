import {
    faChevronDown,
    faChevronRight
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { forwardRef, useState } from "react";
import { useQuery } from "react-query";
import styled from "styled-components";
import Loading from "../utils/Loading";
import ErrorMessage from "./ErrorMessage";
import Checkbox from "./Checkbox";
import Label from "./Label";

const InfoExpandContainer = styled.div``;

const InfoExpandButton = styled.button`
    border: 2px solid ${(props) => props.theme.colors.dark};
    color: ${(props) => props.theme.colors.dark};
    width: 100%;
    border-radius: 0;
    margin: 0;
    background: transparent;
    padding: 0.75rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: ${(props) => props.theme.fontSizes.medium};

    &:focus {
        border: 2px solid ${(props) => props.theme.colors.primary};
        outline: none;
    }
`;

const HiddenInput = styled.input`
    display: none;
`;

const InfoExpandedAreaContainer = styled.div`
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    border: 2px solid ${(props) => props.theme.colors.dark};
    border-top: unset;
`;

function InfoExpandedArea({ name, url, children }) {
    const queryKey = url.split("/");
    const { data, status } = useQuery(queryKey);

    if (status === "loading") {
        return (
            <InfoExpandedAreaContainer>
                <Loading />
            </InfoExpandedAreaContainer>
        );
    } else if (status === "error" || status === "idle") {
        return (
            <InfoExpandedAreaContainer>
                <ErrorMessage>
                    Error loading {name}, please try again later.
                </ErrorMessage>
            </InfoExpandedAreaContainer>
        );
    }

    return (
        <InfoExpandedAreaContainer>
            {data.desc.map((desc, index) => (
                <span key={index}>{desc}</span>
            ))}
            {children}
        </InfoExpandedAreaContainer>
    );
}

export const InfoExpand = forwardRef(
    ({ item, name, onBlur, onChange, children }, ref) => {
        const [opened, setOpened] = useState(false);

        function toggle() {
            setOpened((x) => !x);
        }

        return (
            <InfoExpandContainer>
                <HiddenInput
                    type={"hidden"}
                    name={name}
                    ref={ref}
                    onBlur={onBlur}
                    onChange={onChange}
                />
                <InfoExpandButton onClick={toggle} type={"button"}>
                    <span>{item.name}</span>
                    <FontAwesomeIcon
                        icon={opened ? faChevronRight : faChevronDown}
                        fixedWidth
                    />
                </InfoExpandButton>
                {opened ? (
                    <InfoExpandedArea
                        name={item.name}
                        url={item.url.substring(1)}
                    >
                        {children}
                    </InfoExpandedArea>
                ) : null}
            </InfoExpandContainer>
        );
    }
);

const InfoExpandButtonContainer = styled.div`
    display: grid;
    grid-template-columns: min-content 2fr min-content;
    color: ${(props) => props.theme.colors.dark};
`;

const CheckboxContainer = styled.div`
    border: 2px solid ${(props) => props.theme.colors.dark};
    padding: 0.75rem;
`;

const LabelContainer = styled.div`
    border: 2px solid ${(props) => props.theme.colors.dark};
    border-left: unset;
    border-right: unset;
    padding: 0.75rem;
`;

export const InfoExpandWithCheckbox = forwardRef(
    ({ name, onBlur, onChange, item }, ref) => {
        const [opened, setOpened] = useState(false);

        function toggle() {
            setOpened((x) => !x);
        }

        return (
            <InfoExpandContainer>
                <InfoExpandButtonContainer>
                    <CheckboxContainer>
                        <Checkbox
                            name={name}
                            value={item.index}
                            onBlur={onBlur}
                            onChange={onChange}
                            ref={ref}
                        />
                    </CheckboxContainer>
                    <LabelContainer>
                        <Label htmlFor={`${name}-${item.index}`}>
                            {item.name}
                        </Label>
                    </LabelContainer>
                    <InfoExpandButton onClick={toggle} type={"button"}>
                        <FontAwesomeIcon
                            icon={opened ? faChevronRight : faChevronDown}
                            fixedWidth
                        />
                    </InfoExpandButton>
                </InfoExpandButtonContainer>
                {opened ? (
                    <InfoExpandedArea
                        key={item.index}
                        name={item.name}
                        url={item.url.substring(1)}
                    />
                ) : null}
            </InfoExpandContainer>
        );
    }
);
