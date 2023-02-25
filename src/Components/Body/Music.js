import { Container, Row, Col, Card, Button } from "react-bootstrap";
import './Music.css'

const Music = () => {
    return (
        <Container className="T-container">
            <Row>
                <Col>
                    <Container className="M-container">
                        <Row>
                            <Col><h2>MUSIC</h2></Col>
                        </Row>
                    </Container>
                    <Container className="B-container">
                        <Row>
                            <Col>
                                <div class="d-flex flex-row bd-highlight mb-3">
                                    <div class="p-2 bd-highlight">
                                        <Card style={{ width: '18rem' }}>
                                            <Card.Title>Album 1</Card.Title>
                                            <Card.Img variant="top" src="https://prasadyash2411.github.io/ecom-website/img/Album%201.png" />
                                            <Card.Body>

                                                <Card.Text>
                                                    $12.99
                                                </Card.Text>
                                                <Button variant="primary">Add To Cart</Button>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                    <div class="p-2 bd-highlight">
                                        <Card style={{ width: '18rem' }}>
                                            <Card.Title>Album 2</Card.Title>
                                            <Card.Img variant="top" src="https://prasadyash2411.github.io/ecom-website/img/Album%202.png" />
                                            <Card.Body>

                                                <Card.Text>
                                                    $14.99
                                                </Card.Text>
                                                <Button variant="primary">Add To Cart</Button>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                </div>
                                <div class="d-flex flex-row bd-highlight mb-3">
                                    <div class="p-2 bd-highlight">
                                        <Card style={{ width: '18rem' }}>
                                            <Card.Title>Album 3</Card.Title>
                                            <Card.Img variant="top" src="https://prasadyash2411.github.io/ecom-website/img/Album%203.png" />
                                            <Card.Body>

                                                <Card.Text>
                                                    $9.99
                                                </Card.Text>
                                                <Button variant="primary">Add To Cart</Button>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                    <div class="p-2 bd-highlight">
                                        <Card style={{ width: '18rem' }}>
                                            <Card.Title>Album 4</Card.Title>
                                            <Card.Img variant="top" src="https://prasadyash2411.github.io/ecom-website/img/Album%204.png" />
                                            <Card.Body>

                                                <Card.Text>
                                                    $19.99
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
    )
}

export default Music;
