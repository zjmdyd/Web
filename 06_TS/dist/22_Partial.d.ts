interface Todo {
    title: string;
    description: string;
}
type PartialTodo = Partial<Todo>;
declare function updateTodo(todo: Todo, fieldsToUpdate: PartialTodo): {
    title: string;
    description: string;
};
declare const todo1_1: {
    title: string;
    description: string;
};
declare const todo1_2: {
    title: string;
    description: string;
};
type RequiredTodo = Required<Todo>;
declare function updateTodo2(todo: Todo, fieldsToUpdate: RequiredTodo): {
    title: string;
    description: string;
};
declare const todo2_1: {
    title: string;
    description: string;
};
declare const todo2_2: {
    title: string;
    description: string;
};
