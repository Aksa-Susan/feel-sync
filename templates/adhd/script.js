document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");
    const addTaskButton = document.getElementById("add-task");
  
    const noteInput = document.getElementById("note-input");
    const notesList = document.getElementById("notes-list");
    const saveNoteButton = document.getElementById("save-note");
  
    // Function to toggle visibility of sections
    function toggleSection(sectionId) {
      const sections = document.querySelectorAll(".section");
      sections.forEach((section) => {
        if (section.id === sectionId) {
          section.style.display = "block";
        } else {
          section.style.display = "none";
        }
      });
    }
  
    // Handle icon clicks to show respective sections
    const iconItems = document.querySelectorAll(".icon-item");
    iconItems.forEach((item) => {
      item.addEventListener("click", function () {
        const sectionId = this.getAttribute("data-id") + "-section";
        toggleSection(sectionId);
      });
    });
  
    // Task Manager
    addTaskButton.addEventListener("click", function () {
      const taskText = taskInput.value.trim();
      if (taskText !== "") {
        const listItem = document.createElement("li");
        listItem.innerHTML = `${taskText} <button class="edit-task">Edit</button> <button class="delete-task">Delete</button>`;
        taskList.appendChild(listItem);
  
        taskInput.value = "";  // Clear the input field
      }
    });
  
    // Event delegation for task actions (edit/delete)
    taskList.addEventListener("click", function (event) {
      if (event.target.classList.contains("delete-task")) {
        const taskItem = event.target.closest("li");
        taskItem.remove(); // Remove task item
      }
      if (event.target.classList.contains("edit-task")) {
        const taskItem = event.target.closest("li");
        const newTaskText = prompt("Edit your task:", taskItem.textContent.replace("EditDelete", "").trim());
        if (newTaskText !== null && newTaskText.trim() !== "") {
          taskItem.firstChild.textContent = newTaskText + " ";
        }
      }
    });
  
    // Notes Section
    saveNoteButton.addEventListener("click", function () {
      const noteText = noteInput.value.trim();
      if (noteText !== "") {
        const listItem = document.createElement("li");
        listItem.innerHTML = `${noteText} <button class="edit-note">Edit</button> <button class="delete-note">Delete</button>`;
        notesList.appendChild(listItem);
  
        noteInput.value = "";  // Clear the input field
      }
    });
  
    // Event delegation for note actions (edit/delete)
    notesList.addEventListener("click", function (event) {
      if (event.target.classList.contains("delete-note")) {
        const noteItem = event.target.closest("li");
        noteItem.remove(); // Remove note item
      }
      if (event.target.classList.contains("edit-note")) {
        const noteItem = event.target.closest("li");
        const newNoteText = prompt("Edit your note:", noteItem.textContent.replace("EditDelete", "").trim());
        if (newNoteText !== null && newNoteText.trim() !== "") {
          noteItem.firstChild.textContent = newNoteText + " ";
        }
      }
    });
  });
  