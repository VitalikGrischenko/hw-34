contactList

document.addEventListener('DOMContentLoaded', function() {
    const taskList = document.getElementById('taskList');
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    function renderTasks() {
      taskList.innerHTML = '';

      tasks.forEach((task, index) => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
          <input type="checkbox" id="task${index}" ${task.completed ? 'checked' : ''}>
          <label for="task${index}">${task.title}</label>
        `;
        listItem.addEventListener('change', () => {
          tasks[index].completed = !tasks[index].completed;
          saveTasks();
          renderTasks();
        });
        taskList.appendChild(listItem);
      });
    }

    function saveTasks() {
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }

  });

  document.addEventListener('DOMContentLoaded', function() {
    const dataForm = document.getElementById('dataForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');

    nameInput.value = localStorage.getItem('name') || '';
    emailInput.value = localStorage.getItem('email') || '';

    window.saveData = function() {
      localStorage.setItem('name', nameInput.value);
      localStorage.setItem('email', emailInput.value);
    };
  });
  document.addEventListener('DOMContentLoaded', function() {
    const zakladkiList = document.getElementById('zakladkiList');
    let bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];

    function renderBookmarks() {
        zakladkiList.innerHTML = '';

      bookmarks.forEach((bookmark, index) => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
          <span>${bookmark.title}</span>
          <button onclick="deleteBookmark(${index})">Delete</button>
        `;
        zakladkiList.appendChild(listItem);
      });
    }

    function saveBookmarks() {
      localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    }

    window.deleteBookmark = function(index) {
      bookmarks.splice(index, 1);
      saveBookmarks();
      renderBookmarks();
    };

  });

  document.addEventListener('DOMContentLoaded', function() {
    const xzList = document.getElementById('xzList');
    let contacts = JSON.parse(localStorage.getItem('contacts')) || [];

    function renderContacts() {
        xzList.innerHTML = '';

      contacts.forEach((contact, index) => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
          <span>${contact.firstName} ${contact.lastName}</span>
          <span>${contact.phone}</span>
          <span>${contact.email}</span>
          <button onclick="editContact(${index})">Edit</button>
          <button onclick="deleteContact(${index})">Delete</button>
        `;
        xzList.appendChild(listItem);
      });
    }

    function saveContacts() {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }

    window.editContact = function(index) {
    };

    window.deleteContact = function(index) {
      contacts.splice(index, 1);
      saveContacts();
      renderContacts();
    };

  });
