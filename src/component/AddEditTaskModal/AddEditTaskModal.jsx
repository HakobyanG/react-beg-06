import React,{createRef} from "react"
import { Modal, Button, Form } from 'react-bootstrap';
import DatePicker from "react-datepicker";
import formatDate from '../utils/dateFormatter';

class AddEditTaskModal extends React.Component{
    constructor(props) {
        super(props);
        this.inputRef = createRef();
        this.state = {
            title: "",
            description: "",
            date: new Date(),
            ...props.editableTask
        }
    }
    setDate = (date) => {
        this.setState({
            date
        });
    }
    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }
    handleS = ({ key, type }) => {
        const { title, description } = this.state;
        if (!title ||
            !description ||
            (type === 'keypress' && key !== 'Enter')
        )
            return;
            const formData = {
                ...this.state,
                date: formatDate(this.state.date)
            }
        this.props.onSubmit(formData);
        this.props.onHide();
    }
    componentDidMount() {
        this.inputRef.current.focus();
    }
    render(){
            const { onHide,isAnyTaskChecked,editableTask} = this.props;
            const { title, description ,date } = this.state;
        return (
            
            <>
            <Modal
                show={true}
                onHide={onHide}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                >
                <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                           { editableTask ? "Edit Task Modal" : "Add Task Modal" }
                        </Modal.Title>
                </Modal.Header>
                <Modal.Body >   
                        <Form className="mb-5 mt-5" onSubmit={(e) => e.preventDefault()}>
                            <Form.Group >
                                <Form.Control
                                    name="title"
                                    type="text"
                                    placeholder="Title"
                                    onChange={this.handleChange}
                                    onKeyPress={this.handleS}
                                    ref={this.inputRef}
                                    value={title}
                                />

                            </Form.Group>
                            <Form.Group >
                                <Form.Control
                                    name="description"
                                    as="textarea"
                                    rows={3}
                                    style={{ resize: "none" }}
                                    placeholder="Description"
                                    onChange={this.handleChange}
                                    value={description}
                                />
                            </Form.Group>
                            <Form.Group >
                                <DatePicker
                                    selected={date}
                                    onChange={date => this.setDate(date)}
                                />
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={onHide} variant="danger">Close</Button>
                        <Button
                            variant="success"
                            onClick={this.handleS}
                            disabled={isAnyTaskChecked || !title || !description}
                        >
                            { editableTask ? "Save" : "Add" }
                        </Button>
                    </Modal.Footer>
            </Modal>
            </>
        );
    }
}

export default AddEditTaskModal;

