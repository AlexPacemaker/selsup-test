import React from "react";
import styles from "./ParamEditor.module.scss";
import { Model, Props } from "./ParamElditor.props";

const ParamEditor = ({ params, model }: Props): JSX.Element => {
  const [values, setValues] = React.useState(model.paramValues);

  const handleChange = (paramId: number, value: string) => {
    setValues((prevValues) =>
      prevValues.map((paramValue) => (paramValue.paramId === paramId ? { ...paramValue, value } : paramValue))
    );
  };

  const getModel = (): Model => {
    return {
      ...model,
      paramValues: values,
    };
  };

  return (
    <div className={styles.container}>
      {params.map((param) => (
        <div key={param.id}>
          <label htmlFor={`param-${param.id}`}>{param.name}</label>
          <input
            type='text'
            id={`param-${param.id}`}
            value={values.find((value) => value.paramId === param.id)?.value || ""}
            onChange={(e) => handleChange(param.id, e.target.value)}
          />
        </div>
      ))}
      <button onClick={() => console.log(getModel())}>Искать модель</button>
    </div>
  );
};

export default ParamEditor;
