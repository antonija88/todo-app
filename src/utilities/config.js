export default {
  defaultValues: {
    filter: {
      task: "",
      recurring: "",
      priority: ""
    },
    sort: "name,asc"
  },
  priorityOptions: [
    { value: "1", label: "Low" },
    { value: "2", label: "Medium" },
    { value: "3", label: "High" },
    { value: "4", label: "Urgent" }
  ],
  sortOptions: [
    { value: "name,asc", label: "Name (ASC)" },
    { value: "name,desc", label: "Name (DESC)" },
    { value: "date,asc", label: "Date (ASC)" },
    { value: "date,desc", label: "Date (DESC)" }
  ]
};
