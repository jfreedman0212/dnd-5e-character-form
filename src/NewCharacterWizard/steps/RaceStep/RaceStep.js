export default function RaceStep({ dispatch }) {
  function onClick() {
    dispatch({ type: "GO_BACK" });
  }
  return (
    <button onClick={onClick} type={"button"}>
      Go back!
    </button>
  );
}
