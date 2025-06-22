const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('task-list');

function addTask() {
    if (inputBox.value.trim() === '') {
        alert('Please enter a task.');
    } else {
        const li = document.createElement('li');
        li.textContent = inputBox.value;
        listContainer.appendChild(li);

        const span = document.createElement("span");
        span.textContent = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = '';
    saveData();
}

listContainer.addEventListener('click', function(e) {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked');
        saveData();
    } else if (e.target.tagName === 'SPAN') {
        e.target.parentElement.remove();
        saveData();
    }
});

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem("data") || '';
}

showTask();

inputBox.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        addTask();
    }
});
