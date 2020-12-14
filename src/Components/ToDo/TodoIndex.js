import React, { Component } from 'react';

class TodoIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: '',
      taskList: [],
    };
  }

  addTask = () => {
    let arr = this.state.taskList;
    let task = this.state.task;

    arr.push(task);

    this.setState({ taskList: arr });

    console.log(
      'I added a task',
      task,
      ' and here is the updated task list ',
      arr
    );
  };

  componentDidMount() {
    console.log(this.state.taskList);
  }

  displayTasks = () => {
    let task = this.state.task;
    let taskList = this.state.taskList;
    if (task && taskList) {
      return (
        <div>
          <h2>Task List</h2>
          <ul>
            {taskList.map((task, index) => {
              return <li key={index}>{task}</li>;
            })}
          </ul>
        </div>
      );
    } else {
      return (
        <div>
          <span style={{ fontStyle: 'italic' }}>Add a task</span>
          <h2>Task List</h2>
          <ul>
            {taskList.map((task, index) => {
              return <li key={index} style={{ marginRight: '0' }}>{task}</li>;
            })}
          </ul>
        </div>
      );
    }
  };

  handleSubmit = e => {
    e.preventDefault();
    this.addTask();
    console.log(this.state.task);
    console.log(this.state.taskList);
  };

  render() {
    return (
      <div>
        TodoIndex
        <form onSubmit={this.handleSubmit}>
          <input
            style={{ minWidth: '300px', width: '40%'}}
            type="text"
            onChange={e => this.setState({ task: e.target.value })}
          ></input>
          <button>Add to List</button>
        </form>
        {this.displayTasks()}
      </div>
    );
  }
}

export default TodoIndex;
