import React, { PureComponent } from 'react';
import styles from './addtask.module.css';
import { Form,Button, InputGroup } from 'react-bootstrap';
import PropTypes from 'prop-types';

class AddTask extends PureComponent {
    state = {
        inputValue: ''
    }
    handleChange = (event) => {
        const { value } = event.target;
        this.setState({
            inputValue: value
        });
    }
    handleS = ({ key, type }) => {
        if (!this.state.inputValue ||
            (type === 'keypress' && key !== 'Enter')
        )
            return;



        this.props.handleSubmit(this.state.inputValue);
        this.setState({
            inputValue: ''
        });
    }

    render() {
        const { isAnyTaskChecked } = this.props;
        const {inputValue} = this.state;
        return (
            <div>
                <InputGroup className="mb-5 mt-5">
                    <Form.Control
                        type="text"
                        placeholder="Add Task"
                        onChange={this.handleChange}
                        onKeyPress={this.handleS}
                        value={this.state.inputValue}
                        className={styles.input}
                        disabled={isAnyTaskChecked}
                    />
                    <InputGroup.Append>
                        <Button
                            variant="success"
                            onClick={this.handleS}
                            className="ml-3"
                            disabled={isAnyTaskChecked || !inputValue}
                        >
                            Add
                    </Button>
                    </InputGroup.Append>
                </InputGroup>
            </div>
        );
    }
};
AddTask.propTypes = {
    handleSubmit: PropTypes.func,
    isAnyTaskChecked: PropTypes.bool,
}

export default AddTask;