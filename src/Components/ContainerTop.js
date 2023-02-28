import './ContainerTop.css';
import { Container, Row, Col } from "react-bootstrap";

const ContainerTop = () => {
    return (
        <Container fluid>
            <Row>
                <Col>
                    <h1 className='h1'>The Generics</h1>
                </Col>
            </Row>
        </Container>
    )
}


export default ContainerTop;