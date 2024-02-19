import { Breadcrumb, Row, Col } from "react-bootstrap";
import Container from "react-bootstrap/Container";

// the object breadcrumbObject is created for steps as a string type
export interface breadcrumbObject {
  steps: string;
  designation: string;
  name: string;
  active: boolean;
}

//it expects an array of object with a steps property and a currentStepIndex property for the current step index
interface ArrayRendererProps {
  
  steps: breadcrumbObject[];
  designation: breadcrumbObject[];
  name: breadcrumbObject[];
  active: boolean;
}

//indicates that SSCBreadcrumbComponent is a functional component (FC) that expects props of type ArrayRendererProp
//expects to receive steps and currentStepIndex
const SSCBreadcrumbComponent: React.FC<ArrayRendererProps> = ({
  steps
}) => {
  return (
    <>
      {/* iterate each items of the steps and generate a breadcrumb component for each one  */}
      <Container className="breadcrumbContainer">
      {steps.map((stepItem, index) => (
        <Breadcrumb className="breadcrumbItem" key={index}>
          <div>
            <div className="breadcrumbtextHeight">
              <p
                style={{
                  color:
                    index === 0 && stepItem.active === true
                      ? "#2D83B6"
                      :  stepItem.active === true
                      ? "#2D83B6"
                      : "#767676",
                }}
              >
                {index === 0 && stepItem.active === true
                  ? "Requester"
                  :  stepItem.active === true
                  ? "Requester"
                  : stepItem.designation}
              </p>
              <h5
                style={{
                  color:
                    index === 0 && stepItem.active === true
                      ? "#2D83B6"
                      : stepItem.active === true
                      ? "#2D83B6"
                      : "#767676",
                }}
              >
                {stepItem.name}
              </h5>
            </div>
            <div>
              <Container
                className={`bg-${
                  index === 0 && stepItem.active === true
                    ? "#53A6D8"
                    :  stepItem.active === true
                    ? "#53A6D8"
                    : "#D9D9D9"
                } breadcrumbSteps`}
                style={{
                  borderTopLeftRadius: index === 0 ? "5px" : "none",
                  borderBottomLeftRadius: index === 0 ? "5px" : "none",
                  borderTopRightRadius:
                    index === steps.length - 1 ? "5px" : "none",
                  borderBottomRightRadius:
                    index === steps.length - 1 ? "5px" : "none",
                  backgroundColor:
                    index === 0 && stepItem.active === true ||  stepItem.active === true
                      ? "#53A6D8"
                      : "#D9D9D9",
                  color:
                    index === 0 && stepItem.active === true ||  stepItem.active === true
                      ? "#fff"
                      : "#636363",
                  textDecoration: "none",
                  fontSize: "12px",
                  cursor: "default",
                  width: "213.64px",
                  height: "17px",
                  top: "205px",
                  left: "504.06px",
                }}
              >
                <Row>
                  <Col key={index}>{stepItem.steps}</Col>
                </Row>
              </Container>
            </div>
          </div>
        </Breadcrumb>
      ))}
      </Container>
    
    </>
  );
};
export default SSCBreadcrumbComponent;
