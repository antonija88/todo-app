import React, { useState } from "react";

import Component from "./TaskForm.component";
import config from "../../utilities/config";

export default function TaskForm(props) {
  const [state, setState] = useState({
    task: "",
    priority: config.priorityOptions[0].value,
    recurring: false
  });

  const onChange = (event) => {
    if (event.target.type === "checkbox") {
      setState({ ...state, [event.target.name]: event.target.checked });
    } else {
      setState({ ...state, [event.target.name]: event.target.value });
    }
  };

  const onSubmit = (event) => {
    event.preventDefault();

    props.onSubmit({ ...state, createdAt: Date.now() });
  };

  return (
    <Component
      onSubmit={onSubmit}
      onChange={onChange}
      state={state}
      priorityOptions={config.priorityOptions}
    />
  );
}
