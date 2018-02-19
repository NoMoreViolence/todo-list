import React, { Component } from 'react';
import './TodoItem.css';

class TodoItem extends Component {
  // true면 렌더링을 하고 아닐 때에는 하지 않기에 이 것을 넣어줌으로써 최적화
  shouldComponentUpdate(nextProps, nextState) {
    return this.props.checked !== nextProps.checked;
  }

  render() {
    // props 바인딩
    const { text, checked, id, onToggle, onRemove } = this.props;
    // 어떤 번호 변경되었는지 렌더링 될 때마다 콘솔에 출력
    console.log(id);
    return (
      // App.js의 onToggle 함수
      <div className="todo-item" onClick={() => onToggle(id)}>
        <div
          className="remove"
          onClick={e => {
            e.stopPropagation(); // 이벤트 버블링 방지용: 윗 이벤트 까지 확장이 되어버리기 때문에 여기서 막고 한개의 이벤트만 발생해야한다
            onRemove(id);
          }}
        >
          &times;
        </div>
        <div className={`todo-text ${checked && 'checked'}`}>
          <div>{text}</div>
        </div>
        {checked && <div className="check-mark">✓</div>}
      </div>
    );
  }
}

export default TodoItem;
