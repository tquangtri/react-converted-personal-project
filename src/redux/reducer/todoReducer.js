import { ADD_TODO, STUDENT } from "./../../constants";


// Khởi tạo data
const initialState = {
  name: "toDo",
  todos: [  ],

  // Khởi tạo data students
  students: [  ]
}

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      let todoNew = [...state.todos];
      todoNew.push(action.payload)
      return {
        ...state,
        todos: todoNew
      }
    case 'DELETE_TODO':
      console.log('DELETE_TODO')
      const updatedTodos = state.todos.filter(todo => todo.id !== action.payload.id)
      return {
        ...state,
        todos: updatedTodos
      }
    case 'UPDATE_TODO':
      console.log('UPDATE_TODO')
      const updatedTodoList = state.todos.map(todo => {
        if (todo.id === action.payload.id) {
          return {
            ...todo,
            name: action.payload.name,
            completed: action.payload.completed
          }
        } else {
          return todo
        }
      })
      return {
        ...state,
        todos: updatedTodoList
      }
    // Start xử lý phần student
    case STUDENT.STUDENT_INIT:
      let newStudentList = (action.payload.studentList);
      return {
        ...state,
        students: newStudentList
      }
    case STUDENT.STUDENT_ADD:
      let students = [...state.students];
      students.push(action.payload)
      return {
        ...state,
        students: students
      }
    case STUDENT.STUDENT_DELETE:
      const updatedStudents = state.students.filter(todo => todo.id !== action.payload.id)
      return {
        ...state,
        students: updatedStudents
      }
    // end xử lý phần student  
    default:
      return state
  }
}