import React from "react";
import './TaskForm.css';

export default function TaskForm({
  onSubmit,
  onChange,
  state,
  priorityOptions
}) {
  return (
    <form onSubmit={onSubmit}>
      <div className="form-group">
      <div className="row">
          <div className="col-md-12">
                <input
                  className="form-control"
                  placeholder="What do you need to do today?"
                  type="text"
                  name="task"
                  onChange={onChange}
                  value={state.task}
                  required
                />
          </div>
      </div>
      </div>


      <div className="form-group">
      <div className="row pt-2">
        <div className="col-md-4">
        <label htmlFor="priority" className="lb-sm">Select priority: </label>
          <select id="priority" name="priority" className="form-select" onChange={onChange} value={state.priority}>
            {priorityOptions.map((item) => (
              <option key={item.value} value={item.value}>
                {item.label}
              </option>
            ))}
          </select>
        </div>
        </div>

      </div>

      <div className="row">
      <div className="col-md-4">
      <label htmlFor="recurring" className="lb-sm" style={{marginRight: "10px"}}>Recurring: </label>

      <input
        id="recurring"
        type="checkbox"
        className="form-check-input"
        name="recurring"
        onChange={onChange}
        checked={state.recurring}
      />


      </div>

      </div>

      <button className="btn btn-primary btn-max-width" type="submit">Add</button>
      <hr/>
    </form>
  );
}
