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

function InfoExpandedArea({ name, url }) {
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
            <ErrorMessage>
                Error loading {name}, please try again later.
            </ErrorMessage>
        );
    }

    return (
        <InfoExpandedAreaContainer>
            {data.desc.map((desc, index) => (
                <span key={index}>{desc}</span>
            ))}
        </InfoExpandedAreaContainer>
    );
}

function InfoExpand({ itemName, itemUrl, name, onBlur, onChange }, ref) {
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
                <span>{itemName}</span>
                <FontAwesomeIcon
                    icon={opened ? faChevronRight : faChevronDown}
                    fixedWidth
                />
            </InfoExpandButton>
            {opened ? (
                <InfoExpandedArea name={itemName} url={itemUrl.substring(1)} />
            ) : null}
        </InfoExpandContainer>
    );
}

export default forwardRef(InfoExpand);
