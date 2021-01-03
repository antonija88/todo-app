import config from "./config";

export function formatDate(timestamp) {
  const date = new Date(timestamp);
  const d = date.getDate();
  const M = date.getMonth() + 1;
  const y = date.getFullYear();
  const h = date.getHours();
  const m = date.getMinutes();
  const s = date.getSeconds();

  return `${d}.${M}.${y}. @ ${h}h ${m}m ${s}s`;
}

export function getPriorityLabel(value) {
  const priority = config.priorityOptions.find((item) => item.value === value);

  if (!priority) return "";

  return priority.label;
}
