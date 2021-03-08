import styles from './task.module.css';
import { Card, Button } from 'react-bootstrap';


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


export default Task;