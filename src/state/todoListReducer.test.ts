import {
    addTodoListAC, changeFilterTodoListAC, changeTitleTodoListAC, removeTodoListAC,
    todoListReducer, TodoListType
} from "./todoListReducer";
import {v1} from "uuid";



test('todoList reducer should remove one todoList', () => {
    const todoList1 = v1()
    const todoList2 = v1()
    const todoList3 = v1()
    const startState: Array<TodoListType> = [
        {id: todoList1, title: 'Study', filter: 'all'},
        {id: todoList2, title: 'Book', filter: 'active'},
        {id: todoList3, title: 'Мои таски', filter: 'all'},
    ]

    const endState = todoListReducer(startState, removeTodoListAC(todoList3) )
    expect(endState.length).toBe(2)
})

test('todolist reducer should add one todolist to the start', () => {
    const todoList1 = v1()
    const todoList2 = v1()
    const todoList3 = v1()
    const startState: Array<TodoListType> = [
        {id: todoList1, title: 'Study', filter: 'all'},
        {id: todoList2, title: 'Book', filter: 'active'},
        {id: todoList3, title: 'Мои таски', filter: 'all'},
    ];

    const endState = todoListReducer(startState, addTodoListAC('new title', 'some id') )

    expect(endState.length).toBe(4)
    expect(endState[0].title).toBe('new title')
    expect(endState[0].filter).toBe('all')
})

test('todolist reducer should change filter only one todolist', () => {
    const todoList1 = v1()
    const todoList2 = v1()
    const todoList3 = v1()
    const startState: Array<TodoListType> = [
        {id: todoList1, title: 'Study', filter: 'all'},
        {id: todoList2, title: 'Book', filter: 'active'},
        {id: todoList3, title: 'Мои таски', filter: 'all'},
    ];

    const endState = todoListReducer(startState, changeFilterTodoListAC(todoList3, 'active'))

    expect(endState[2].filter).toBe('active')
})

test('todolist reducer should change title only one todolist', () => {
    const todoList1 = v1()
    const todoList2 = v1()
    const todoList3 = v1()
    const startState: Array<TodoListType> = [
        {id: todoList1, title: 'Study', filter: 'all'},
        {id: todoList2, title: 'Book', filter: 'active'},
        {id: todoList3, title: 'Мои таски', filter: 'all'},
    ];


    const endState = todoListReducer(startState, changeTitleTodoListAC('new title',todoList3 ))

    expect(endState[2].title).toBe('new title')
    expect(endState[2].filter).toBe('all')
})