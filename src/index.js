document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const taskForm = document.getElementById("create-task-form");
  const taskList = document.getElementById("tasks");

  taskForm.addEventListener("submit", (event) => {
    event.preventDefault();

    // Get the task description from the input
    const taskInput = document.getElementById("new-task-description");
    const taskDescription = taskInput.value.trim();

    // If input is not empty, add the task
    if (taskDescription) {
      const taskItem = document.createElement("li");
      taskItem.textContent = taskDescription;

      // Create a delete button
      const deleteButton = document.createElement("button");
      deleteButton.textContent = "X";
      deleteButton.style.marginLeft = "10px";

      // Append delete button to the task item
      taskItem.appendChild(deleteButton);

      // Add task item to the task list
      taskList.appendChild(taskItem);

      // Add event listener to delete the task when button is clicked
      deleteButton.addEventListener("click", () => {
        taskList.removeChild(taskItem);
      });

      // Clear the input field after adding the task
      taskInput.value = "";
    }
  });
});

