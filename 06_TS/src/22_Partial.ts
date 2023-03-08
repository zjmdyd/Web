interface Todo {
  title: string,
  description: string
}

type PartialTodo = Partial<Todo>

function updateTodo(todo: Todo, fieldsToUpdate: PartialTodo) {
  return { ...todo, ...fieldsToUpdate }
}

const todo1_1 = {
  title: 'org task',
  description: 'clear clutter'
}

const todo1_2 = updateTodo(todo1_1, {description: 'throw out trash'})
console.log(todo1_2)

type RequiredTodo = Required<Todo>

function updateTodo2(todo: Todo, fieldsToUpdate: RequiredTodo) {
  return { ...todo, ...fieldsToUpdate }
}

const todo2_1 = {
  title: 'org task',
  description: 'clear clutter'
}

const todo2_2 = updateTodo2(todo2_1, {title:'this is RequiredTodo', description: 'throw out trash'})
console.log(todo2_2)