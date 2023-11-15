// step 1 : selecting button element
const modelOpener = document.querySelector('#modelOpener')

// step 2 :selecting list element
const list = document.querySelector('#myList')

// step 3 :toggle function to button element
isModelOpen = false
function toggleModel() {
  isModelOpen = !isModelOpen
  //step 5 continue : toggle the display property of model section
  if (isModelOpen) {
    model.style.display = 'flex'
  } else {
    model.style.display = 'none'
  }
}

// step 4 : hide model section through hide property

const model = document.querySelector('#model')
model.style.display = 'none'

//  step 5 : create onclick event through additem button and its toggle the model section
modelOpener.onclick = () => {
  openModel()
  // step 10 : leave empty input field
  inputValue.value = ''
}

//Step 6: accessing button in model section
const addButton = document.querySelector('#addButton')

addButton.onclick = () => {
  //Step 7 continue :
  if (inputValue.value != null || inputValue.value != '') {
    addItemToList(inputValue.value)
  }
}

// step 7 : accessing input element value
const inputValue = document.querySelector('#inputValue')

// Step 8 : function to add items below the main element
function addItemToList(value) {
  //creating elements
  const li = document.createElement('li')
  const span = document.createElement('span')
  // step 10: assign numeric value to span element
  const items = document.querySelectorAll('.listItem')
  span.innerText = items.length + 1 + '.'

  const p = document.createElement('p')
  // assign input value (value parament) into p element
  p.innerText = value
  // step 11 : create delete button next to li element
  const deleteButton = document.createElement('button')
  deleteButton.className =
    'bg-red-500 text-white p-2 rounded-full w-6 h-6 text-xs font-semibold flex items-center justify-center'
  deleteButton.innerText = 'X'
  //step 12 : onclick event for delete button
  deleteButton.onclick = deleteItem
  // note above we just as reference for onclick event, that function not called

  // styling the li element
  //   li.id = 'listItem'
  li.className = 'flex gap-3 listItem'
  //appending elements into parent element
  li.append(span)
  li.append(p)
  li.append(deleteButton)
  //step 9: append list element in list id ul elements
  list.append(li)
  // close the model section once item added in list, it change this value into false
  //   toggleModel()
  closeModel()
}

// step 12 continue:
function deleteItem() {
  //   console.log({ btn: this })
  // step 13: find span element of delete button by this object
  let parentLi = this.parentElement
  //   console.log(parentLi)
  // step 14: accessing span element
  const span = parentLi.getElementsByTagName('span')
  const itemNo = +span[0].innerText.split('.')[0]

  //now this results array with dot and number 1

  //step 15 : accessing parent of li element
  let listItems = Array.from(list.children) // to change into array
  console.log(listItems)
  listItems = listItems.filter((item) => {
    const spanID = item.getElementsByTagName('span')
    const numberID = +spanID[0].innerText.split('.')[0]
    if (itemNo === numberID) {
      return false
    } else {
      return true
    }
  })
  clearList()
  /// step 17: loop through remainin items
  listItems.forEach((item) => {
    const p = item.getElementsByTagName('p')[0]
    addItemToList(p.innerText) // this line item from beginning
  })
}

// step 16 : clear the list items
function clearList() {
  Array.from(list.children).forEach((item) => {
    item.remove()
  })
}
// step 18: toggle model to add section element

function openModel() {
  isModelOpen = true
  model.style.display = 'flex'
}
function closeModel() {
  isModel0pen = false
  model.style.display = 'none'
}
