import React, { useEffect, useState } from "react";

import config from "../../utilities/config";

export default function Filter({ onChange, defaultFilter }) {
  const [filter, setFilter] = useState(defaultFilter);

  const changeFilter = (event) => {
    if (event.target.type === "checkbox") {
      setFilter({ ...filter, [event.target.name]: event.target.checked });
    } else {
      setFilter({ ...filter, [event.target.name]: event.target.value });
    }
  };

  const resetFilters = () => {
    setFilter(defaultFilter);
  };

  useEffect(() => {
    onChange(filter);
  }, [filter, onChange]);

  return (
    <div>

      <div className="row">
        <div className="col-md-6">
          <label className="lb-sm">Task: </label>
          <input
            className="form-control"
            placeholder="Search..."
            type="text"
            name="task"
            onChange={changeFilter}
            value={filter.task}
          />
        </div>
      </div>

          <label className="lb-sm">Priority: </label>
          <select name="priority" className="form-select" onChange={changeFilter} value={filter.priority}>
            <option value="">All</option>
            {config.priorityOptions.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>


          <label className="lb-sm">Recurring: </label>
          <select name="recurring" className="form-select" onChange={changeFilter} value={filter.recurring}>
            <option value="">All</option>
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>

          <div className="row">
            <div className="col-md-4 mb-2">
              <button className="btn btn-primary" onClick={resetFilters}>Reset Filters</button>
            </div>
          </div>

    </div>
  );
}
