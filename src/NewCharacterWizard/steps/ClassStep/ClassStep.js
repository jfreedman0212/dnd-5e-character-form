import { useQuery } from "react-query";
import { useForm } from "react-hook-form";
import Loading from "../../../Loading";
import ClassChoicesForm from "./ClassChoicesForm";

export default function ClassStep({ defaultValue, dispatch }) {
  const { data, isLoading, isError } = useQuery("classes");
  const { handleSubmit, register, watch, reset } = useForm({
    defaultValues: {
      class: defaultValue.class || "",
      hitDie: defaultValue.hitDie || "",
      proficiencies: defaultValue.proficiencies || [],
      proficiencyOptions: defaultValue.proficiencyOptions || [],
      equipment: defaultValue.equipment || [],
      savingThrows: defaultValue.savingThrows || []
    }
  });
  const currentClass = watch("class");

  function onSubmit(data) {
    dispatch({ type: "CLASS_STEP", payload: data });
  }

  if (isLoading) {
    return (
      <section>
        <Loading message={"Loading classes..."} />
      </section>
    );
  }

  if (isError) {
    throw new Error(
      "Could not load classes! This is most likely an issue with the D&D API."
    );
  }

  return (
    <section>
      <h1>Choose a Class</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor={"class"}>Class: </label>
        <select {...register("class")} id={"class"}>
          <option value={""} disabled>
            Please select a class
          </option>
          {data.results.map((klass) => (
            <option key={klass.index} value={klass.index}>
              {klass.name}
            </option>
          ))}
        </select>
        {currentClass && currentClass !== "" ? (
          <ClassChoicesForm
            classIndex={currentClass}
            register={register}
            reset={reset}
          />
        ) : null}
        <input type="submit" />
      </form>
    </section>
  );
}
