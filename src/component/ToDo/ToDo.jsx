import React from 'react';
import Task from '../Task/Task';
import styles from './todo.module.css';
import Confirm from '../Confirm/Confirm';
import {Container, Row, Col, Button } from 'react-bootstrap';
import idGenerator from '../utils/idGenerator';
import PropTypes from 'prop-types';
import AddTaskModal from '../AddTaskModal/AddTaskModal';

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
                title: 'Task 1 ',
                description: "Task 1"
            },
            {
                _id: idGenerator(),
                title: 'Task 2 ',
                description: "Task 2"
            },
            {
                _id: idGenerator(),
                title: 'Task 3',
                description: "Task 3"
            },
        ],
        checkedTasks: new Set(),
        OpenAddTaskModal: false,
        OpenConfirm: false,
    }
    toggleOpenConfirm = () => {
        this.setState({
            OpenConfirm: !this.state.OpenConfirm
        });
    }
    toggleOpenAddTaskModal = () => {
        this.setState({
            OpenAddTaskModal: !this.state.OpenAddTaskModal
        });
    }
    handleSubmit = (formData) => {
        const tasks = [...this.state.tasks];
        tasks.push({
            ...formData,
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
        const { 
            checkedTasks,
             tasks ,
             OpenAddTaskModal ,
             OpenConfirm,
            } = this.state;
        const tasksJSX = tasks.map(task => {
            return (
                <Col key={task._id} className="mt-3" xs={12} sm={6} md={4} lg={3}>
                    <Task
                        task={task}
                        handleDeleteTask={this.handleDeleteTask}
                        handleToggleCheckTask={this.handleToggleCheckTask}
                        isAnyTaskChecked={!!checkedTasks.size}
                        isChecked={checkedTasks.has(task._id)}
                    />
                </Col>
            );

        });


        return (
            <>
                <Container>
                <h1 className={styles.heading1}>ToDo Component</h1>
                    <Row className="mt-5">
                        <Col>
                            <Button
                                    variant="success"
                                    onClick={this.toggleOpenAddTaskModal}
                                >
                                Add Task Modal
                            </Button>
                        </Col>
                    </Row>

                    <Row className={tasksWrapperRowCls.join(' ')}  >
                        {tasksJSX.length ? tasksJSX : <p>There are no Tasks !</p>}
                    </Row>

                    <Row className="justify-content-center mt-3">
                        <Button
                            variant="danger"
                            onClick={this.toggleOpenConfirm}
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
                            {
                             tasks.length === checkedTasks.size ? "Remove Selected" :"Check All"
                             }
                        </Button>
                    </Row>
                </Container>


                { OpenAddTaskModal && <AddTaskModal
                    onHide={this.toggleOpenAddTaskModal}
                    onSubmit={this.handleSubmit}
                    isAnyTaskChecked={!!checkedTasks.size}
                />}


                 {
                    OpenConfirm && <Confirm
                        onHide={this.toggleOpenConfirm}
                        onSubmit={this.handleDeleteCheckedTasks}
                    />
                }
             </>
        );
    }
};
ToDo.propTypes={
    ToDo: PropTypes.element,
}

export default ToDo;