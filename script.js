// You can access the 'todoItems' variable from the 'data.js' file, so long as 'data.js'
// comes before 'script.js' in the HTML document
console.log(todoItems)

// add items to list
const incomplete = document.querySelector("#incomplete-items")
const complete = document.querySelector("#complete-items")

incomplete.classList.add('form-check')
complete.classList.add('form-check')

function createList() {
    for (let item of todoItems) {
        // create a list item element and set appropriate bootstrap classes
        const listItem = document.createElement('li')
        listItem.classList.add('list-group-item')
        // create a checkbox and add it to the list item
        const checkbox = document.createElement('input')
        checkbox.type = 'checkbox'
        checkbox.classList.add('form-check-input')
        listItem.appendChild(checkbox)
        // create a label for the checkbox, add classes, set text and add to list item
        const label = document.createElement('label')
        label.innerText = item.title
        label.classList.add('form-check-label', 'ps-3')
        listItem.appendChild(label)
        // if the todo item has been marked as completed in the data
        if (item.completed) {
          // then add it to the complete section and check the checkbox input
          complete.appendChild(listItem)
          checkbox.checked = true
        } else {
          // otherwise, add it to the incomplete section
          incomplete.appendChild(listItem)
        }
    }
}

// submit form
const todoForm = document.querySelector('#todoForm')
const item = document.querySelector('#item')

todoForm.addEventListener('submit', (event) => {
event.preventDefault();
// add new task to array
let newTask = {
    id: (todoItems.length + 1),
    title: item.value,
    complete: false
}
todoItems.push(newTask);
todoForm.reset();
// remove all items from page
const list = document.querySelectorAll(".list-group-item")
for (let i = 0; i < list.length; i++) {
    list[i].remove()
}
// readd items with new array
console.log(todoItems)
createList(todoItems)
})


// checking items
const check = document.querySelectorAll('form-check-input')
const listItem = document.createElement('li')

for (let i = 0; i < check.length; i++) {
    check.addEventListener('click', () => {
    todoForm[i].completed = true
    check[i].checked = true
    })
console.log(todoItems)
}

createList()