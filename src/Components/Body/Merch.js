import './Merch.css';
import { Container, Row, Col, Card, Button } from "react-bootstrap";


const Merch = () => {
    return (
        <>
            <Container className="2h-container">
                <Row>
                    <Col>
                        <Container className="Mr-container">
                            <Row>
                                <Col><h2>MERCH</h2></Col>
                            </Row>
                        </Container>
                        <Container className="2b-container">
                            <Row>
                                <Col>
                                    <div class="d-flex flex-row bd-highlight mb-3">
                                        <div class="p-2 bd-highlight">
                                            <Card style={{ width: '18rem' }}>
                                                <Card.Title>T-Shirt</Card.Title>
                                                <Card.Img variant="top" src="https://prasadyash2411.github.io/ecom-website/img/Shirt.png" />
                                                <Card.Body>

                                                    <Card.Text>
                                                        $19.99
                                                    </Card.Text>
                                                    <Button variant="primary">Add To Cart</Button>
                                                </Card.Body>
                                            </Card>
                                        </div>
                                        <div class="p-2 bd-highlight">
                                            <Card style={{ width: '18rem' }}>
                                                <Card.Title>Coffee Cup</Card.Title>
                                                <Card.Img variant="top" src="https://prasadyash2411.github.io/ecom-website/img/Cofee.png" />
                                                <Card.Body>

                                                    <Card.Text>
                                                        $6.99
                                                    </Card.Text>
                                                    <Button variant="primary">Add To Cart</Button>
                                                </Card.Body>
                                            </Card>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                </Row>
            </Container>
            <div>
            <button type="button" class="btn btn-primary btn-lg">See the cart</button>
            </div>
        </>

    )
}

export default Merch;