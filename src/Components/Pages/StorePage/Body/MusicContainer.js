import './MusicContainer.css';
import { Container, Row, Col } from 'react-bootstrap';

const MusicContainer = () => {
    return (
        <Container className="M-container">
            <Row>
                <Col><h2>MUSIC</h2></Col>
            </Row>
        </Container>
    )
}

export default MusicContainer;