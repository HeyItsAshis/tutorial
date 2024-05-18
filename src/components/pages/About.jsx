import { Card, Container, Row, Col, Button, Form } from "react-bootstrap";
import FooterSection from "../common/FooterSection";
import NavigationBar from "../common/NavigationBar";
const About = ({comName, comPhone}) => {

    return (
        <>
        <NavigationBar brand={comName} phone={comPhone}/>
        <Container>
            <Row>
                <Col md={4} className="mx-auto mb-3 mt-5">
                    <Card>
                        <Card.Body>
                            <h3 className="text-center">About Page!</h3>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
        <FooterSection brand={comName}/>
        </>
    )
}

export default About;