import { formatDate, getPriorityLabel } from "../../utilities/helpers";

const getTaskModel = (model) => ({
  ...model,
  priority: getPriorityLabel(model.priority),
  displayDate: formatDate(model.createdAt)
});

export default getTaskModel;
