import { useQuery } from "react-query";
import Loading from "../../../utils/Loading";

export default function RaceChoicesForm({ raceIndex }) {
    const { data, status } = useQuery(["api", "races", raceIndex]);

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
            <pre>
                <code>{JSON.stringify(data, null, 4)}</code>
            </pre>
        </>
    );
}