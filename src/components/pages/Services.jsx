import { Card, Container, Row, Col, Button, Form } from "react-bootstrap";
import FooterSection from "../common/FooterSection";
import NavigationBar from "../common/NavigationBar";
import { useState } from "react";
import { Link } from "react-router-dom";
const Services = ({comName, comPhone}) => {

    const [services, setServices] = useState([
        {
            name: 'Office 365',
            image: '//via.placeholder.com/250x150/3c1631/ffffff?text=Office+365',
            slug: 'ms-office-365'
        },
        {
            name: 'Azure Cloud',
            image: '//via.placeholder.com/250x150/5fbdff/ffffff?text=Azure+Cloud',
            slug: 'azure-cloud-platform'
        },
        {
            name: 'Windows 11',
            image: '//via.placeholder.com/250x150/c5fff8/000000?text=Windows+11',
            slug: 'windows-11-pro'
        },
    ]);

    return (
        <>
        <NavigationBar brand={comName} phone={comPhone}/>
        <Container>
            <Row>
                <Col><h3 className="text-center my-5">Services Page!</h3></Col>
            </Row>
            <Row>
                {services.map((service)=> {
                    return (
                        <Col md={4} className="mx-auto mb-3">
                            <Card>
                                <Card.Img variant="top" src={ service.image } />
                                <Card.Body>
                                    <Card.Title>{service.name}</Card.Title>
                                    <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                    </Card.Text>
                                    <Link className="btn btn-primary" to={'/service/' + service.slug}>Know More</Link>
                                </Card.Body>
                            </Card>
                        </Col>
                    );
                })}
                
            </Row>
        </Container>
        <FooterSection brand={comName}/>
        </>
    )
}

export default Services;