// You can access the 'todoItems' variable from the 'data.js' file, so long as 'data.js'
// comes before 'script.js' in the HTML document
console.log(todoItems)

// Use the 'todoItems' variable to create the appropriate elements and append them onto
// the page.
const incomplete = document.querySelector("#incomplete-items")
const complete = document.querySelector("#complete-items")

incomplete.classList.add('form-check')
complete.classList.add('form-check')

for (let item of todoItems) {
    if (item.completed == true) {
        let input = document.createElement("input")
        input.classList.add('form-check-input')
        input.type = 'checkbox'
        input.value = ' '
        input.id = 'flexCheckChecked'
        input.checked = ' '
        complete.appendChild(input)

        let label = document.createElement("label")
        label.classList.add('form-check-label')
        label.for = 'flexCheckChecked'
        complete.appendChild(label)

        let listItem = document.createElement("li")
        listItem.innerText = item.title
        listItem.classList.add('list-group-item')
        complete.appendChild(listItem)
    }
    else if (item.completed == false){
        let input = document.createElement("input")
        input.classList.add('form-check-input')
        input.type = 'checkbox'
        input.value = ''
        input.id = 'flexCheckDefault'
        incomplete.appendChild(input)

        let label = document.createElement("label")
        label.classList.add('form-check-label')
        label.for = 'flexCheckDefault'
        incomplete.appendChild(label)

        let listItem = document.createElement("li")
        listItem.innerText = item.title
        listItem.classList.add('list-group-item')
        incomplete.appendChild(listItem)
    }
}