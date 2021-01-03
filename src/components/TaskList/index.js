import React from "react";

import getTaskModel from "./Task.model";

export default function TaskList({ items, onTaskRemove }) {
  return (
    <div>
    <hr/>
    <div className="card">
      <div className="card-body">
        <ul className="list-group">

          {items.map(getTaskModel).map((item) => (
            <li key={item.createdAt} className="list-group-item d-flex justify-content-between align-items-center">
                {item.task}
                <span className="badge bg-info text-dark">{item.priority}</span>


              <h4>{item.displayDate}{" "} {item.recurring && "is recurring"}</h4>

                <button className="btn btn-danger" onClick={() => onTaskRemove(item)}>X</button>

            </li>
          ))}

        </ul>
      </div>
    </div>
    </div>
  );
}
