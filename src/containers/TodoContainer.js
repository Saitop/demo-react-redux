import {connect} from "react-redux";
import TodoWrapper from "../components/Todo/TodoWrapper";
import TodoResouce from "../api/TodoResouce";


const mapStateProps = state => ({
  todos: state.todoPage.todos
});
const mapDispatchToProps = dispatch => ({
  createNewTodo: (todoItem) => {
    TodoResouce.createTodo(todoItem)
      .then(res => res.json()).then(res=>
      dispatch({
        type: 'ADD_TODO',
        payload: todoItem
      })
    );

  },
  refreshTodos: (todos) => (dispatch({
    type: 'REFRESH_TODOS',
    payload: todos
  }))
});
// export default TodoWrapper;
export default connect(
  mapStateProps,
  mapDispatchToProps
)(TodoWrapper)
