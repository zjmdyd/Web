interface Todo {
  title: string,
  description: string
}

/**
 * Make all properties in T optional
 * 
 * type Partial<T> = {
 * [P in keyof T]?: T[P];
};
 */

type PartialTodo = Partial<Todo>

function updateTodo(todo: Todo, fieldsToUpdate: PartialTodo) {
  return { ...todo, ...fieldsToUpdate }
}

const todo1_1 = {
  title: 'org task',
  description: 'clear clutter'
}

const todo1_2: PartialTodo = {
  // title: 'org task',
  description: 'throw out trash'
}

const todo1 = updateTodo(todo1_1, todo1_2)
console.log(todo1)

/**
 * Make all properties in T required
 * type Required<T> = {
 * [P in keyof T]-?: T[P];
* };
 */

type RequiredTodo = Required<Todo>

function updateTodo2(todo: Todo, fieldsToUpdate: RequiredTodo) {
  return { ...todo, ...fieldsToUpdate }
}

const todo2_1 = {
  title: 'org task',
  description: 'clear clutter'
}

const todo2_2: RequiredTodo = {
  title: 'this is RequiredTodo',
  description: 'throw out trash agein'
}

const todo2 = updateTodo2(todo2_1, todo2_2)
console.log(todo2)