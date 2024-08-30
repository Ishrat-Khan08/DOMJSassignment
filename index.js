
// scripts.js
document.getElementById('student-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const studentClass = document.getElementById('class').value;
    const address = document.getElementById('address').value;
    const contact = document.getElementById('contact').value;

    addStudent(name, studentClass, address, contact);

    // Clear the form
    document.getElementById('student-form').reset();
});

function addStudent(name, studentClass, address, contact) {
    const studentList = document.getElementById('student-list');
    const studentItem = document.createElement('li');

    studentItem.innerHTML = `
        <span>Name: ${name}, Class: ${studentClass}, Address: ${address}, Contact: ${contact}</span>
        <button onclick="editStudent(this)">Edit</button>
        <button onclick="deleteStudent(this)">Delete</button>`;

    studentList.appendChild(studentItem);
}
//edit details
function editStudent(button) {
    const studentItem = button.parentElement;
    const details = studentItem.querySelector('span').textContent.split(', ');

    document.getElementById('name').value = details[0].split(': ')[1];
    document.getElementById('class').value = details[1].split(': ')[1];
    document.getElementById('address').value = details[2].split(': ')[1];
    document.getElementById('contact').value = details[3].split(': ')[1];

    deleteStudent(button);
}
//delete details
function deleteStudent(button) {
    const studentItem = button.parentElement;
    studentItem.remove();
}


