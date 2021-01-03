export default function sort(tasks, sortType) {
  switch (sortType) {
    case "name,asc":
      return tasks.sort((a, b) => a.task.localeCompare(b.task));
    case "name,desc":
      return tasks.sort((a, b) => b.task.localeCompare(a.task));
    case "date,asc":
      return tasks.sort((a, b) => a.createdAt - b.createdAt);
    case "date,desc":
      return tasks.sort((a, b) => b.createdAt - a.createdAt);
    default:
      return tasks;
  }
}
