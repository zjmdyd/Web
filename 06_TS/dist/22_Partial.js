"use strict";
function updateTodo(todo, fieldsToUpdate) {
    return Object.assign(Object.assign({}, todo), fieldsToUpdate);
}
const todo1_1 = {
    title: 'org task',
    description: 'clear clutter'
};
const todo1_2 = updateTodo(todo1_1, { description: 'throw out trash' });
console.log(todo1_2);
function updateTodo2(todo, fieldsToUpdate) {
    return Object.assign(Object.assign({}, todo), fieldsToUpdate);
}
const todo2_1 = {
    title: 'org task',
    description: 'clear clutter'
};
const todo2_2 = updateTodo2(todo2_1, { title: 'this is RequiredTodo', description: 'throw out trash' });
console.log(todo2_2);
//# sourceMappingURL=22_Partial.js.map