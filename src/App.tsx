// import React from "react";
// import "./App.css";

// const App = (): JSX.Element => {
//   return <></>;
// };

// export default App;



import React from 'react';
import ParamEditor from './ParamEditor';

const params = [
  {
    id: 1,
    name: 'Назначение',
    type: 'string',
  },
  {
    id: 2,
    name: 'Длина',
    type: 'string',
  },
];

const model = {
  paramValues: [
    {
      paramId: 1,
      value: 'повседневное',
    },
    {
      paramId: 2,
      value: 'макси',
    },
  ],
};

const App: React.FC = () => {
  return (
    <div>
      <ParamEditor params={params} model={model} />
    </div>
  );
};

export default App;

