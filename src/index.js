document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById('create-task-form');
  const taskslist = document.getElementById('tasks');

  form.addEventListener('submit', (e) => {
    e.preventDefault(); // To prevent the page from refreshing

    // Get the input value (task description)
    const newTaskDescription = document.getElementById('new-task-description').value;

    if (newTaskDescription.trim() !== "") {
      // Create a new list item (li) for the task
      const newTask = document.createElement('li');
      newTask.classList.add('task-item'); // Add class to list item for styling
      newTask.innerText = newTaskDescription;

      // Create a delete button styled as a small red box with a white 'X'
      const deleteButton = document.createElement('button');
      deleteButton.innerText = "X"; // Button text
      deleteButton.classList.add('delete-btn'); // Add class for styling
      deleteButton.addEventListener('click', () => {
        taskslist.removeChild(newTask); // Remove the task when the button is clicked
      });

      // Append the delete button to the new task
      newTask.appendChild(deleteButton);

      // Append the new task to the task list (ul)
      taskslist.appendChild(newTask);

      // Clear the input field after submitting
      document.getElementById('new-task-description').value = "";
    }
  });
});