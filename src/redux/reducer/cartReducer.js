


// Khởi tạo data
const initialState = {
   name: "cart",
   carts: [],
  }

 export const cartReducer = (state = initialState, action) => {
    console.log('cartReducer running...');
    switch(action.type) {
      case 'add cart':
        
        console.log(', caught event add cart...');
        let cartsNew= [...state.carts];
        cartsNew.push(action.payload)
        return {
          ...state,
          carts:  cartsNew
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


     
      default:
        return state
    }
  }