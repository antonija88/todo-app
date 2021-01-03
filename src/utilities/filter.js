export default function filterTasks(tasks, filter) {
  let filteredTasks = tasks;

  switch (filter.recurring) {
    case "true":
      filteredTasks = filteredTasks.filter((item) => item.recurring);
      break;
    case "false":
      filteredTasks = filteredTasks.filter((item) => !item.recurring);
      break;
    default:
      break;
  }

  if (filter.priority) {
    filteredTasks = filteredTasks.filter(
      (item) => item.priority === filter.priority
    );
  }

  if (filter.task) {
    filteredTasks = filteredTasks.filter(
      (item) =>
        item.task.toLocaleLowerCase().indexOf(filter.task.toLocaleLowerCase()) >
        -1
    );
  }

  return filteredTasks;
}
