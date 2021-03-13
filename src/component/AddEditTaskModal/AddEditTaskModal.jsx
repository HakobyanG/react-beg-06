import React,{createRef} from "react"
import { Modal, Button, Form } from 'react-bootstrap';


class AddEditTaskModal extends React.Component{
    constructor(props) {
        super(props);
        this.titleInputRef = createRef(null);
        this.state = {
            title: "",
            description: "",
            ...props.editableTask
        }
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


        this.props.onSubmit(this.state);
        this.props.onHide();
    }
    // componentDidMount() {
    //     this.inputRef.current.focus();
    // }

    render(){
            const { onHide,isAnyTaskChecked } = this.props;
            const { title, description } = this.state;
        return (
            
            <>
            {/* <Button >Edit</Button>{' '}
            <Button >Add Task Modal</Button> */}
            <Modal
                show={true}
                onHide={onHide}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                            Add Task Modal
                        </Modal.Title>
                </Modal.Header>
                <Modal.Body>   
                        <Form className="mb-5 mt-5" onSubmit={(e) => e.preventDefault()}>
                            <Form.Group >
                                <Form.Control
                                    name="title"
                                    type="text"
                                    placeholder="Title"
                                    onChange={this.handleChange}
                                    onKeyPress={this.handleS}
                                    disabled={isAnyTaskChecked}
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
                                    disabled={isAnyTaskChecked}
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
                            Add
                        </Button>
                    </Modal.Footer>
            </Modal>
            <Modal
                show={true}
                    onHide={onHide}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                            Edit Task Modal
            </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form className="mb-5 mt-5" onSubmit={(e) => e.preventDefault()}>
                            <Form.Group >
                                <Form.Control
                                    name="title"
                                    type="text"
                                    placeholder="Title"
                                    onChange={this.handleChange}
                                    onKeyPress={this.handleS}
                                    ref={this.titleInputRef}
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
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="warning" onClick={onHide}>Close</Button>
                        <Button
                            onClick={this.handleS}
                            variant="success"
                        >
                            Save
                        </Button>
                    </Modal.Footer>
            </Modal>
            </>
        );
    }
}

export default AddEditTaskModal;

