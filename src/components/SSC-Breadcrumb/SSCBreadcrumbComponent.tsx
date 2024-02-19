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
const SSCBreadcrumbComponent: React.FC<ArrayRendererProps> = ({ steps }) => {
  return (
    <>
      {/* iterate each items of the steps and generate a breadcrumb component for each one  */}
      <Container className="breadcrumbContainer">
        {steps.map((stepItem, index) => (
          <Breadcrumb className="breadcrumbItem" key={index}>
            <div>
              <div className="breadcrumbtextHeight">
                <p
                  className={
                    index === 0 && stepItem.active === true
                      ? "colorActive" // Add "active" class when the color is "#2D83B6"
                      : stepItem.active === true
                      ? "colorActive"
                      : "notActive colorNotActive" // Otherwise, empty string for class name
                  }
                >
                  {index === 0 && stepItem.active === true
                    ? "Requester"
                    : stepItem.active === true
                    ? "Requester"
                    : stepItem.designation}
                </p>
                <h5
                  className={
                    index === 0 && stepItem.active === true
                      ? "active colorActive" // Add "active" class when the color is "#2D83B6"
                      : stepItem.active === true
                      ? "active colorActive"
                      : "notActive colorNotActive" // Otherwise, empty string for class name
                  }
                >
                  {stepItem.name}
                </h5>
              </div>
              <div>
                <Container
                  className={`breadcrumbSteps ${
                    index === 0 && stepItem.active
                      ? "active containerActive containerStart-forBorderRadius containerActiveBorderRadius"
                      : stepItem.active
                      ? "active containerActive containerStart-forBorderRadius containerActiveBorderRadius"
                      : "notActive containerNotActive containerNotActiveBackground container-forBorderRadius"
                  } ${
                    index === 0
                      ? "containerStart-forBorderRadius"
                      : index === steps.length - 1
                      ? "containerEnd-forBorderRadius "
                      : "container-forBorderRadius"
                  }`}
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
