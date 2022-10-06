import { Button, Col, Form, Modal, ModalBody, ModalHeader, Row } from "reactstrap"
import {Component} from "react"
import axios from "axios"


type MyProps={
    isOpen : boolean
    toggle
}

export class CreationModal extends Component<MyProps>{

      handleSubmit=(event)=>{
        event.preventDefault()
        const data = new FormData(event.target)
        const student={
            firstName:data.get("fistName"),
            lastName:data.get("lastName"),
            age:data.get("age"),
            teacher:data.get("teacher"),

        }
        axios.post("http://localhost:8080/addStudent",student)
      this.props.toggle();
    }



     render(){
        return(<Modal isOpen={this.props.isOpen} toggle={this.props.toggle}>
            <ModalHeader toggle={this.props.toggle}>
               Adding new wize Student
            </ModalHeader>
           
            <ModalBody>
            <Form onSubmit={this.handleSubmit}>
               <Row>
                <Col>
                <label>FirstName</label>
                </Col>
                <Col>
                <input id="firstName" name="firstName" type="text"/>
                </Col>
               </Row> 
               <Row>
                <Col>
                <label>LastName</label>
                </Col>
                <Col>
                <input id="lastName" name="lastName" type="text"/>
                </Col>
               </Row> 
               <Row>
                <Col>
                <label>Age</label>
                </Col>
                <Col>
                <input id="age" name="age" type="number"/>
                </Col>
               </Row> 
               <Row>
                <Col>
                <label>Teacher</label>
                </Col>
                <Col>
                <input id="teacher" name="teacher" type="text"/>
                </Col>
               </Row> 
               <Button color="primary" >Add Student</Button>
            </Form>
            </ModalBody>
        </Modal>)
     }

}