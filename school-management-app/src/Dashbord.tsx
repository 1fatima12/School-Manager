import { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import {
    Navbar,
    NavItem,
    NavbarToggler,
    Collapse,
    NavLink,
    Nav,
    NavbarBrand,
    Container,
    Card,
    Row,
    Col,
    CardTitle,
    CardText,
    Button,
    CardBody,
    CardFooter
} from 'reactstrap';
import{
    IoSchoolOutline,
    IoMan,
    IoSettings,
    IoWomanOutline
}from "react-icons/io5"
import { CreationModal } from "./creationModal";
interface MyState{
    isOpen : boolean,

students:[],
};





export class Dashbord extends Component<{},MyState>{
    state:MyState={
        isOpen : false,

        students:[]
    };
componentDidMount(){
    axios.get("http://localhost:8080/all")
    .then(res=>{
        const students =res.data
        this.setState({students})

    })
  }
  toggle=()=>{

    this.setState((prevstate)=>({isOpen: !prevstate.isOpen}))
  }
render() {
    return (
        <div>
            <Navbar color="dark" light md-2>
<NavbarBrand  className="text-white">
<IoSchoolOutline  className="foot-size-xxl"/>

<span  className="font-size-l ml-3">School Manager Application</span>

</NavbarBrand>
            </Navbar>
            <Container className="mt-3">
                <Row>
<Col sm='4'>
    <Card body>
<CardTitle tag="h5">
<IoMan className="font-size-xl"/> 86 Students
</CardTitle>
<CardText>be nice :) </CardText>
<Button>Manage Students</Button>
 </Card>
</Col>
<Col sm='4'>
    <Card body>
<CardTitle tag="h5">
<IoSchoolOutline className="font-size-xl"/> 8 teacher
</CardTitle>
<CardText>be nice :) </CardText>
<Button>Manage Students</Button>
 </Card>
</Col>
<Col sm='4'>
    <Card body>
<CardTitle tag="h5">
<IoSettings className="font-size-xl"/> 13 employees
</CardTitle>
<CardText>be nice :) </CardText>
<Button>Manage Students</Button>
 </Card>
</Col>
                </Row>



            </Container>
            <CreationModal isOpen={this.state.isOpen} toggle={this.toggle}></CreationModal>
            <Container className="mt-3">
                <Row>
<Col sm="12">
    <Button block color="success" onClick={this.toggle}>Add Student</Button>
</Col>
                </Row>
            </Container>
            <Container className="mt-4">
{
    this.state.students.map(student=>recordStudent(student))
}
            </Container>
        </div>
       
    )    



    }}
function recordStudent(student) {
        return(
            <Row>
<Col sm="12">
    <Card body>
<CardTitle tag="h5">
    <IoMan className="font-size-xl"/>
    {student.fistName+" "+student.lastName}
</CardTitle>
<CardBody>
    <Row>
        <Col sm="4" className="text-center">
            <span className="font-weight-bold">Class</span>
            <span>Second year</span>
        </Col>
        <Col sm="4" className="text-center">
            <span className="font-weight-bold">Age</span>
            <span>{student.age}</span>
        </Col>
        <Col sm="4" className="text-center">
        <span className="font-weight-bold">Teacher</span>
            <span>{student.teacher}</span>
        </Col>
    </Row>
</CardBody>
<CardFooter>
    <Row>
        <Col sm-6>
            <Button block outline color="primary">
                Edit
            </Button>
        </Col>
        <Col sm-6>
            <Button block outline color="danger"
           onClick={()=>deleteStudent(student.id)}
            >
                delete
            </Button>
        </Col>
    </Row>
</CardFooter>
    </Card>
</Col>
            </Row>
        )
    }
    function deleteStudent(id:any):void{
        axios.delete(`http://localhost:8080/deleteById/${id}`)
    }

