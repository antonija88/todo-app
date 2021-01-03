import React, { useState } from "react";
import './App.css';

import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import config from "./utilities/config";
import Sort from "./components/Sort";
import sortTasks from "./utilities/sort";
import filterTasks from "./utilities/filter";
import Filter from "./components/Filter";


let defaultFilter = window.localStorage.getItem("filter");

if (!defaultFilter) {
  defaultFilter = config.defaultValues.filter;
} else {
  defaultFilter = JSON.parse(defaultFilter);
}

export default function App() {
  const [state, setState] = useState([]);
  const [sort, setSort] = useState(config.defaultValues.sort);
  const [filter, setFilter] = useState(defaultFilter);

  const addTask = (task) => {
    setState([task, ...state]);
  };

  const removeTask = (task) => {
    const newState = state.filter((item) => item.createdAt !== task.createdAt);
    setState(newState);
  };

  const changeSort = (sortValue) => {
    setSort(sortValue);
    window.localStorage.setItem("sort", JSON.stringify(sortValue));
  };

  const changeFilter = (filterValue) => {
    setFilter(filterValue);
    window.localStorage.setItem("filter", JSON.stringify(filterValue));
  };

  let sortedState = state;
  window.localStorage.setItem("state", JSON.stringify(sortedState));

  sortedState = sortTasks(sortedState, sort);
  sortedState = filterTasks(sortedState, filter);

  return (
    <div className="App">
      <div className="page-content page-container">
        <div className="padding">
          <div className="row container d-flex justify-content-center">
            <div className="col-md-12">
              <div className="card px-3">
                <div className="card-body">
                  <h4 className="card-title text-center">To- Do App</h4>
                  <hr/>
                  <TaskForm onSubmit={addTask} />
                  <Sort onChange={changeSort} defaultSort={config.defaultValues.sort} />
                  <Filter onChange={changeFilter} defaultFilter={defaultFilter} />
                  <TaskList items={sortedState} onTaskRemove={removeTask} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
