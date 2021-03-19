import styles from './task.module.css';
import { Card, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

const Task = ({
    task,
    handleDeleteTask,
    handleToggleCheckTask,
    isAnyTaskChecked,
    isChecked,
    setEditableTask,
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
            <Card.Title style={{ color: 'White' }}>{task.title}</Card.Title>
            <Card.Text style={{ color: 'White' ,marginBottom:"30px"}}>{task.description}</Card.Text>
            <Card.Text style={{ color: 'white', marginBottom: "30px" }}>Date :{task.date}</Card.Text>   
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
                    onClick={() => setEditableTask(task)}
                >
                    Edit
                </Button>
            </Card.Body>
        </Card>

    );
};
Task.propTypes = {
    task: PropTypes.shape({
        _id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired
    }),
    handleDeleteTask: PropTypes.func.isRequired,
    handleToggleCheckTask: PropTypes.func.isRequired,
    isAnyTaskChecked: PropTypes.bool.isRequired,
    isChecked: PropTypes.bool.isRequired

}

export default Task;