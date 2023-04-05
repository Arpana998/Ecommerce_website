import "./Tickets.css";
import { Table, Button } from "react-bootstrap";

const Tickets = () => {
  return (
    <div>
      <h2 className="tours">TOURS</h2>
      <div className="ticketorg">
        <Table striped>
          <tbody>
            <tr>
              <td>1</td>
              <td>JUL16</td>
              <td>DETROIT,MI</td>
              <td>DTE ENERGY MUSIC THEATRE</td>
              <div>
                <Button variant="secondary" size="sm">
                  Buy Tickets
                </Button>
              </div>
            </tr>
            <tr>
              <td>2</td>
              <td>JUL19</td>
              <td>TORONTO,ON</td>
              <td>BUDWEISER STAGE</td>
              <div>
                <Button variant="secondary" size="sm">
                  Buy Tickets
                </Button>
              </div>
            </tr>
            <tr>
              <td>3</td>
              <td>JUL22</td>
              <td>BRISTOW,VA</td>
              <td>JIGGY LUBE LIVE</td>
              <div>
                <Button variant="secondary" size="sm">
                  Buy Tickets
                </Button>
              </div>
            </tr>
            <tr>
              <td>4</td>
              <td>JUL29</td>
              <td>PHOENIX</td>
              <td>AK-CHIN PAVILION</td>
              <div>
                <Button variant="secondary" size="sm">
                  Buy Tickets
                </Button>
              </div>
            </tr>
            <tr>
              <td>5</td>
              <td>AUG 2</td>
              <td>LAS VEGAS, NV</td>
              <td>T-MOBILE ARENA</td>
              <div>
                <Button variant="secondary" size="sm">
                  Buy Tickets
                </Button>
              </div>
            </tr>
            <tr>
              <td>6</td>
              <td>AUG 7</td>
              <td>CONCARD, CA</td>
              <td>CONCARD PAVILION</td>
              <div>
                <Button variant="secondary" size="sm">
                  Buy Tickets
                </Button>
              </div>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
};
export default Tickets;

// <div className="ticketwrapper">
//   <h2>TOURS</h2>
//   <div>
//     <ListGroup variant="flush">
//       <ListGroup.Item>
//         <div className="line">
//         <span>JUL16</span>
//         <span>DETROIT,MI</span>
//         <span>DTE ENERGY MUSIC THEATRE</span>
//         </div>
//       </ListGroup.Item>
//     </ListGroup>
//   </div>
//   <div>
//     <ListGroup variant="flush">
//       <ListGroup.Item>
//         <span>JUL19</span>
//         <span>TORONTO,ON</span>
//         <span>BUDWEISER STAGE</span>
//       </ListGroup.Item>
//     </ListGroup>
//   </div>
//   <div>
//     <ListGroup variant="flush">
//       <ListGroup.Item>
//         <span>JUL22</span>
//         <span>BRISTOW,VA</span>
//         <span>JIGGY LUBE LIVE</span>
//       </ListGroup.Item>
//     </ListGroup>
//   </div>
//   <div>
//     <ListGroup variant="flush">
//       <ListGroup.Item>
//         <span>JUL29</span>
//         <span>PHOENIX,AZ</span>
//         <span>AK-CHIN PAVILION</span>
//       </ListGroup.Item>
//     </ListGroup>
//   </div>
//   <div>
//     <ListGroup variant="flush">
//       <ListGroup.Item>
//         <span>Aug2</span>
//         <span>LAS VEGAS, NV</span>
//         <span>T-MOBILE ARENA</span>
//       </ListGroup.Item>
//     </ListGroup>
//   </div>
//   <div>
//     <ListGroup variant="flush">
//       <ListGroup.Item>
//         <span>AUG7</span>
//         <span>CONCARD,CA</span>
//         <span>CONCARD PAVILION</span>
//       </ListGroup.Item>
//     </ListGroup>
//   </div>
// </div>
