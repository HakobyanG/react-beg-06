import styles from './task.module.css';
import { Card, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

const Task = ({
    task,
    handleDeleteTask,
    handleToggleCheckTask,
    isAnyTaskChecked,
    isChecked
}) => {
    const cls = [styles.task];
    if (isChecked)
        cls.push(styles.checked);
    return (
        <Card className={cls.join(' ')}>
            <input
                type="checkbox"
                onClick={() =>  handleToggleCheckTask (task._id)}
            />
            <Card.Body>
                <Card.Title>{task.text}</Card.Title>
                <Button
                    variant="danger"
                    onClick={() => handleDeleteTask(task._id)}
                    disabled={isAnyTaskChecked}
                >
                    Delete
                </Button>
                <Button
                    variant="warning"
                    className="ml-3"
                    disabled={isAnyTaskChecked}
                >
                    Join
                </Button>
            </Card.Body>
        </Card>

    );
};
Task.propTypes = {
    task: PropTypes.node,
    _id: PropTypes.string,
    text: PropTypes.string,
    handleDeleteTask: PropTypes.func,
    handleToggleCheckTask: PropTypes.func,
    handleCheckAllTask: PropTypes.func,
    isAnyTaskChecked: PropTypes.bool,
    isChecked: PropTypes.bool,
}

export default Task;