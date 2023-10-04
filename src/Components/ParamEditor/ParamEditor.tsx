import React, { useState } from "react";

interface Param {
  id: number;
  name: string;
  type: "string";
}

interface ParamValue {
  paramId: number;
  value: string;
}

interface Color {
  // Define the properties of the Color interface here
}

interface Model {
  paramValues: ParamValue[];
  colors: Color[];
}

interface Props {
  params: Param[];
  model: Model;
}

const ParamEditor: React.FC<Props> = ({ params, model }) => {
  const [values, setValues] = useState(model.paramValues);

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
    <div>
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
      <button onClick={() => console.log(getModel())}>Get Model</button>
    </div>
  );
};

export default ParamEditor;
