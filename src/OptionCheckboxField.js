import { forwardRef } from "react";

const OptionCheckboxField = forwardRef(
  ({ item, onChange, onBlur, name }, ref) => {
    // TODO: use React Query to pull more information about
    // this particular item and display it
    return (
      <label>
        <input
          onChange={onChange}
          onBlur={onBlur}
          name={name}
          ref={ref}
          type={"checkbox"}
          value={item.index}
        />
        {item.name}
      </label>
    );
  }
);

export default OptionCheckboxField;
