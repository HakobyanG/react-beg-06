import React from 'react';
import Task from '../Task/Task';
import AddTask from '../AddTask/AddTask';
import styles from './todo.module.css';
import { Container, Row, Col, Button } from 'react-bootstrap';
import idGenerator from '../utils/idGenerator';
import PropTypes from 'prop-types';

const tasksWrapperRowCls = [
    "mt-5",
    "d-flex",
    "justify-content-center",
];
class ToDo extends React.Component {
    state = {
        tasks: [
            {
                _id: idGenerator(),
                text: 'Task 1 '
            },
            {
                _id: idGenerator(),
                text: 'Task 2'
            },
            {
                _id: idGenerator(),
                text: 'Task 3'
            },
        ],
        checkedTasks: new Set(),
    }

    handleSubmit = (value) => {
        const tasks = [...this.state.tasks];
        tasks.push({
            text: value,
            _id: idGenerator()
        });
        this.setState({
            tasks
        });

    }

    handleDeleteTask = (_id) => {
        let tasks = [...this.state.tasks];
        tasks = tasks.filter(task => task._id !== _id);

        this.setState({
            tasks
        });

    }
    handleToggleCheckTask = (_id) => {
        let checkedTasks = new Set(this.state.checkedTasks);
        if (!checkedTasks.has(_id)) {
            checkedTasks.add(_id);
        } else {
            checkedTasks.delete(_id);
        }
        this.setState({
            checkedTasks
        });
    }
    handleDeleteCheckedTasks = () => {

        const { checkedTasks } = this.state;
        let tasks = [...this.state.tasks];
        tasks = tasks.filter(task => !checkedTasks.has(task._id));
        this.setState({
            tasks,
            checkedTasks: new Set()
        });

    }
    handleCheckAllTask =() => {
        const { tasks } = this.state;
        let checkedTasks = new Set(this.state.checkedTasks);
        if (tasks.length === checkedTasks.size) {
            checkedTasks.clear();
        } else {
            tasks.forEach(task => {
                checkedTasks.add(task._id);
            });
        }
        this.setState({
            checkedTasks
        });
    }
    render() {
        const { checkedTasks, tasks ,value } = this.state;
        const tasksJSX = tasks.map(task => {
            return (
                <Col key={task._id} className="mt-3" xs={12} sm={6} md={4} lg={3}>
                    <Task
                        task={task}
                        handleDeleteTask={this.handleDeleteTask}
                        handleToggleCheckTask={this.handleToggleCheckTask}
                        handleCheckAllTask={this.handleCheckAllTask}
                        isAnyTaskChecked={!!checkedTasks.size}
                        isChecked={checkedTasks.has(task._id)}
                    />
                </Col>
            );

        });


        return (
            <Container>
                <Row>
                    <Col>
                        <h1 className={styles.heading1}>ToDo Component</h1>
                        <AddTask
                            handleSubmit={this.handleSubmit}
                            isAnyTaskChecked={!!checkedTasks.size}
                        />
                    </Col>
                </Row>

                <Row className={tasksWrapperRowCls.join(' ')}  >
                    {tasksJSX.length ? tasksJSX : <p>There are no Tasks !</p>}
                </Row>

                <Row className="justify-content-center mt-5">
                    <Button
                        variant="danger"
                        onClick={this.handleDeleteCheckedTasks}
                        disabled={!!!checkedTasks.size}
                    >
                        Delete All Cheked
                    </Button>
                    <Button
                        type="checkbox"
                        variant="success"
                        className="ml-5"
                        onClick={this.handleCheckAllTask}
                    >
                        Check All
                    </Button>
                </Row>
            </Container>
        );
    }
};
ToDo.propTypes={
    ToDo: PropTypes.element,
}

export default ToDo;