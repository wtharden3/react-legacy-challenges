import React, { Component } from 'react';
import { Form, Input, Button, Row, Col } from 'reactstrap';
//import DisplayTodos from './DisplayTodos';

class TodoIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: '',
      taskCompleted: false,
      taskList: [],
    };
  }

  addTask = () => {
    let arr = this.state.taskList;
    let task = this.state.task;

    arr.push(task);

    this.setState({ taskList: arr });
  };

  componentDidMount() {
    console.log(this.state.taskList);
  }

  checkBox = () => {
    this.setState({ taskCompleted: !this.state.taskCompleted });
  };

  displayTasks = () => {
    let task = this.state.task;
    let taskList = this.state.taskList;
    let isComplete = this.state.taskCompleted;
    let updateCheckBox = this.checkBox;

    if (task && taskList) {
      return (
        <div>
          <h2>Task List</h2>
          <br />
          <ul>
            {taskList.map((task, index) => {
              return (
                <li key={index}>
                <Row>
                  <Col xs="9" className="bg-info">
                  <p className="text-white font-weight-bold py-1">{task}</p>
                  
                  </Col>
                  <Col xs="3">
                  <span>Completed?</span>
                  <br/>
                  <Input
                    className="text-info"
                    type="checkbox"
                    checked={isComplete}
                    onClick={updateCheckBox}
                    onChange={() => console.log('checkbox clicked')}
                  />
                  
                  </Col>
                </Row>
                </li>
              );
            })}
          </ul>
        </div>
      );
    } else {
      return (
        <div>
          <span style={{ fontStyle: 'italic' }}>Add a task</span>
          <h3>Task List</h3>
          <br />
          <ul>
            {taskList.map((task, index) => {
              return (
                <li key={index} style={{ marginRight: '0' }}>
                  <Row>
                  <Col xs="9" className="bg-info">
                  <p className="text-white font-weight-bold py-1">{task}</p>
                  
                  </Col>
                  <Col xs="3">
                  <span>Completed?</span>
                  <br/>
                  <Input
                    className="text-info"
                    type="checkbox"
                    checked={isComplete}
                    onClick={updateCheckBox}
                    onChange={() => console.log('checkbox clicked')}
                  />
                  
                  </Col>
                </Row>
                </li>
              );
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
        <Form onSubmit={this.handleSubmit}>
          <Row>
            <Col
              xs="12"
              sm="10"
              style={{ paddingRight: '0', paddingLeft: '0' }}
            >
              <Input
                style={{ width: '100%' }}
                type="text"
                onChange={e => this.setState({ task: e.target.value })}
              ></Input>
            </Col>
            <Col xs="12" sm="2" style={{ paddingRight: '0', paddingLeft: '0' }}>
              <Button style={{ width: '100%' }}>Add to List</Button>
            </Col>
          </Row>
        </Form>
        {this.displayTasks()}
        {/*<DisplayTodos task={this.state.task} taskList={this.state.taskList} taskCompleted={this.state.taskCompleted} updateCheckBox={this.checkBox()}/>*/}
      </div>
    );
  }
}

export default TodoIndex;
