document.addEventListener("DOMContentLoaded", () => {
  // your code here
  
  const form = document.getElementById('create-task-form');
    const tasksList = document.getElementById('tasks');
  
    // Add event listener for form submission
    form.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent form from submitting
  
      // Get the value of the input field
      const taskDescription = document.getElementById('new-task-description').value;
  
      // Create a new list item
      const newTask = document.createElement('li');
      newTask.textContent = taskDescription;
  
      // Add the new task to the list
      tasksList.appendChild(newTask);
  
      // Clear the input field
      document.getElementById('new-task-description').value = '';
    });
  });
