import { useState } from "react";
import { Button, Card, Col, Container, ListGroup, Row } from "react-bootstrap";

const Master = () => {
    const [user, setUser] = useState({
        name: 'Monali',
        age: 25,
        phone: 9856231321,
        email: 'monali@gmail.com',
        gender: 'Female'
    });

    const [newVar, setNewVar] = useState({
        name: '',
        age: '',
        phone: '',
        email: '',
        gender: ''
    });

    const updateUser = (data) => {
        setNewVar(initState => ({...initState, ...data}))
    }

    const handleChangeUser = () => {
        setUser(prevState => ({
            ...prevState,
            ...newVar
        }));
        setNewVar({
            name: '',
            age: '',
            phone: '',
            email: '',
            gender: ''
        });
    }

    return (
        <Container>
            <Row>
                <Col md={8} className="mx-auto mt-5">
                    <Card>
                        <Card.Header> <h3 className="card-title">New User</h3>    </Card.Header>
                        <Card.Body>
                            <input type="text" className="form-control mb-3" placeholder="Name" value={newVar.name} onChange={(e)=>{updateUser({ name: e.target.value });}}/>
                            <input type="text" className="form-control mb-3" placeholder="Gender" value={newVar.gender} onChange={(e)=>updateUser({ gender: e.target.value })}/>
                            <input type="number" className="form-control mb-3" placeholder="Age" value={newVar.age} onChange={(e)=>updateUser({ age: e.target.value })}/>
                            <input type="text" className="form-control mb-3" placeholder="Phone" value={newVar.phone} onChange={(e)=>updateUser({ phone: e.target.value })}/>
                            <input type="email" className="form-control mb-3" placeholder="Email" value={newVar.email} onChange={(e)=>updateUser({ email: e.target.value })}/>
                        </Card.Body>
                        <Card.Footer>
                            <Button variant="primary" onClick={handleChangeUser}>Change User</Button>
                        </Card.Footer>
                    </Card>
                </Col>
                <Col md={4} className="mx-auto mt-5">
                    <Card>
                        <Card.Header>
                            <h3 className="card-title">{user.name}</h3>
                        </Card.Header>
                        <Card.Body>
                            <ListGroup>
                                <ListGroup.Item><strong>Gender:</strong> {user.gender}</ListGroup.Item>
                                <ListGroup.Item><strong>Phone:</strong> {user.phone}</ListGroup.Item>
                                <ListGroup.Item><strong>Email:</strong> {user.email}</ListGroup.Item>
                                <ListGroup.Item><strong>Age:</strong> {user.age}</ListGroup.Item>
                            </ListGroup>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default Master;
