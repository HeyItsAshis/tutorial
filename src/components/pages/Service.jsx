import { Card, Container, Row, Col, Button, Form } from "react-bootstrap";
import FooterSection from "../common/FooterSection";
import NavigationBar from "../common/NavigationBar";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const Service = ({comName, comPhone}) => {
    const { slug } = useParams();
    // const nav = useNavigate();
    const [count, setCount] = useState(0);

    const handleClick = () => {
        // nav("/services");

        setCount(count + 1);
    }

    useEffect(() => {
        console.log("effect called", slug);
    }, [count]) 

    return (
        <>
        <NavigationBar brand={comName} phone={comPhone}/>
        <Container>
            <Row>
                <Col className="text-center">
                    <h3 className="text-center my-5">{slug}</h3>
                    <Button variant="primary" onClick={handleClick}>Clicked {count} time(s)</Button>
                </Col>
            </Row>
        </Container>
        <FooterSection brand={comName}/>
        </>
    )
}

export default Service;