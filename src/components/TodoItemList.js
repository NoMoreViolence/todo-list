import React, { Component } from 'react';
import TodoItem from './TodoItem';

class TodoItemList extends Component {
  // true면 렌더링을 하고 아닐 때에는 하지 않기에 이 것을 넣어줌으로써 최적화
  shouldComponentUpdate(nextProps, nextState) {
    return this.props.todos !== nextProps.todos;
  }

  render() {
    const { todos, onToggle, onRemove } = this.props;

    const todoList = todos.map(({ id, text, checked }) => (
      <TodoItem
        id={id}
        text={text}
        checked={checked}
        onToggle={onToggle}
        onRemove={onRemove}
        key={id}
      />
    ));

    return <div>{todoList}</div>;
  }
}

export default TodoItemList;
