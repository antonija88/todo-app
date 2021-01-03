import React, { useState, useEffect } from "react";

import config from "../../utilities/config";

export default function Sort({ onChange, defaultSort }) {
  const [sort, setSort] = useState(defaultSort);

  const changeSort = (event) => {
    setSort(event.target.value);
  };

  useEffect(() => {
    onChange(sort);
  }, [sort, onChange]);

  return (
    <div className="row">
    <div className="col-md-6">
      <label htmlFor="sort" className="lb-sm">Select sorting: </label>
      <select id="sort" className="form-select" onChange={changeSort} value={sort}>
        {config.sortOptions.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
      </div>
    </div>
  );
}
