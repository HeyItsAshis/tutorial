import { Card, Container, Row, Col, Button } from "react-bootstrap";
import FooterSection from "./common/FooterSection";
import NavigationBar from "./common/NavigationBar";

const Home = ({comName, comPhone, comEmail, onPress}) => {

    function handleButtonClick(){
        onPress();
    }
    
    return (
        <>
        <NavigationBar brand={comName} phone={comPhone}/>
        <Container>
            <Row>
                <Col md={4} className="mx-auto mb-3 mt-5">
                    <Card>
                        <Card.Body>
                            <p className="text-center">In case of any enquiry please drop a mail to </p>
                            <h4 className="text-primary text-center">{comEmail}</h4>
                            <div className="text-center mt-4">
                                <div className="btn-group">
                                    <Button variant="outline-secondary">Cancel Mail</Button>
                                    <Button variant="primary" onClick={handleButtonClick}>Change Mail</Button>
                                </div>
                            </div>
                            
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
        <FooterSection brand={comName}/>
        </>
    )
}

export default Home;