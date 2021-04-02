import { useQuery } from "react-query";
import Loading from "../../../Loading";

export default function RaceChoicesForm({ raceIndex }) {
  const { data, status } = useQuery(["races", raceIndex]);

  if (status === "loading") {
    return (
      <section>
        <Loading />
      </section>
    );
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
    <section>
      <pre>
        <code>{JSON.stringify(data, null, 4)}</code>
      </pre>
    </section>
  );
}
