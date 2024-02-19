import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import '../styles/PurchaseOrderModal.css';
import Table from 'react-bootstrap/Table';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Container } from 'react-bootstrap';
import SSCBreadcrumbComponent, { breadcrumbObject } from './SSC-Breadcrumb/SSCBreadcrumbComponent';

function Example() {
  const [show, setShow] = useState(false);

  const data = {
    "Name": "101 RESTAURANT CITY INC.",
    "Address": "GRAND CONVENTION CENTER OF CEBU, ARCHBISHOP REYES AVENUE LAHUG CEBU CITY",
    "Tel": "NOT PROVIDED BY SHOP",
    "Fax": "NOT PROVIDED BY SHOP",
    "Email": "RTP.SUPPLIER@AWSYS-I.COM",
    "Contact Person": "NONE",
    "Supplier Category": "Food Services",
    "Status": "Inactive/Blacklisted"
  };

  const tableData = {
    "PO No.": "PO-17-04-00023",
    "Quality": "OK",
    "Price": "OK",
    "Delivery": "OK",
    "Terms & Conditions": "OK",
    "Remarks": "OK",
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const breadcrumbSteps: breadcrumbObject[] = [
    {
      active: false,
      steps: "Step 1",
      designation: "Designation",
      name: "LastName, FirstName MI.",

    },
    {
      active: true,
      steps: "Step 2",
      designation: "Designation",
      name: "LastName, FirstName MI.",
    }
  ];
  
  return (
    <>
      <Button variant="primary" onClick={() => setShow(true)}>
        Custom Width Modal
      </Button>

      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        {/* make space between Containers using gap  */}
        {/* pass the value of breadcrumbSteps array */}
        <Container className="d-flex gap-2" style={{ paddingTop: '2rem' }}>
          <SSCBreadcrumbComponent
            steps={breadcrumbSteps}
            designation={breadcrumbSteps}
            name={breadcrumbSteps}
            active={true}
          />
        </Container>

        <Modal.Header closeButton style={{ backgroundColor: '#2D83B6', color: 'white' }}>
          <Modal.Title id="example-custom-modal-styling-title">
            Supplier
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          
        <Form>
            {Object.entries(data).map(([key, value]) => (
              <Form.Group as={Row} className="mb-3" controlId={`formPlaintext${key}`} key={key}>
                <Form.Label column sm="2">
                  {key}
                </Form.Label>
                <Col sm="10">
                  <Form.Control plaintext readOnly defaultValue={value} />
                </Col>
              </Form.Group>
            ))}
          </Form>
          <Table bordered hover>
            <thead>
              <tr>
                {Object.keys(tableData).map((header) => (
                  <th key={header}>{header}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                {Object.values(tableData).map((value, index) => (
                  <td key={index}>{value}</td>
                ))}
              </tr>
            </tbody>
          </Table>
        </Modal.Body>
        <Modal.Footer className="custom-modal-footer">
          <Button onClick={handleClose} variant="white" className="lower-left-button custom-modal-button">
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Example;