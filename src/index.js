document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.getElementById('create-task-form');
  const taskslist = document.getElementById('tasks');

  form.addEventListener('submit', (e) => {
    e.preventDefault(); //To prevent from refreshing the page

    //Get the input value (task description)
    const newTaskDescription = document.getElementById('new-task-description').value;

    if (newTaskDescription.trim() !== "") {
      //Create a new list item (li) for the task
      const newTask = document.createElement('li');
      newTask.innerText = newTaskDescription;

      //Append the new task to the task list (ul)
      taskslist.appendChild(newTask);

      //clear the input field after submitting
      document.getElementById('new-task-description').value = "";
    }
  });
});

