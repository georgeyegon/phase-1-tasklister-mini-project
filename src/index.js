document.addEventListener("DOMContentLoaded", () => {
  const taskForm = document.getElementById("create-task-form");
  const taskList = document.getElementById("tasks");

  taskForm.addEventListener("submit", (event) => {
    event.preventDefault();

    // Get the task description, priority, and duration
    const taskInput = document.getElementById("new-task-description");
    const taskDescription = taskInput.value.trim() || "."; // Default to "Unnamed Task"
    
    const taskPriority = document.getElementById("task-priority").value;
    const taskDuration = document.getElementById("task-duration").value.trim();

    // Create the task item
    const taskItem = document.createElement("li");
    taskItem.textContent = `${taskDescription} (${taskDuration || 'No duration specified'})`;

    // Set the color based on priority
    if (taskPriority === "high") {
      taskItem.style.color = "red";
    } else if (taskPriority === "medium") {
      taskItem.style.color = "yellow";
    } else {
      taskItem.style.color = "green";
    }

    // Create a delete button
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "x";
    deleteButton.style.marginLeft = "10px";

    // Append delete button to the task item
    taskItem.appendChild(deleteButton);

    // Add task item to the task list
    taskList.appendChild(taskItem);

    // Add event listener to delete the task when button is clicked
    deleteButton.addEventListener("click", () => {
      taskList.removeChild(taskItem);
    });

    // Clear the input fields after adding the task
    taskInput.value = "";
    document.getElementById("task-duration").value = "";
  });

  // Sort functions
  document.getElementById("sort-tasks-asc").addEventListener("click", () => {
    sortTasks(true);
  });

  document.getElementById("sort-tasks-desc").addEventListener("click", () => {
    sortTasks(false);
  });

  function sortTasks(ascending) {
    const tasksArray = Array.from(taskList.children);

    tasksArray.sort((a, b) => {
      const priorityOrder = { "red": 1, "yellow": 2, "green": 3 };
      const aPriority = priorityOrder[a.style.color];
      const bPriority = priorityOrder[b.style.color];

      return ascending ? aPriority - bPriority : bPriority - aPriority;
    });

    tasksArray.forEach(task => taskList.appendChild(task));
  }
});
