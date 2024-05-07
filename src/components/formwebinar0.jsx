import { Row, Col } from "react-bootstrap";
import React, { useState } from "react";
import StepOneWebinar from "./formwebinar1";
import StepUploadWebinar from "./formwebinarupload";
import Final from "./formwebinar2";

function FormWebinar() {
  //state for steps

  const [step, setstep] = useState(1);

  //state for form data
  const [formData, setFormData] = useState({
    sourceInformation: "",
    Nama: "",
    Email: "",
    kontakWebinar :"",
    Attendance:"Luring",
    uploadedFileIGKorpstar: "",
    uploadedFileIGWreckIT: "",
    uploadedFileIGSinarmas: "",
    uploadedFileAplSinarmas: "",
  })

  // function for going to next step by increasing step state by 1
  const nextStep = () => {
    setstep(step + 1);
  };

  // function for going to previous step by decreasing step state by 1
//   const prevStep = () => {
//     setstep(step - 1);
//   };

  // handling form input data by taking onchange value and updating our previous form data state
  const handleInputData = input => e => {
    // input value from the form
    const {value } = e.target;

    //updating for data state taking previous state and then adding new value to create new object
    setFormData(prevState => ({
      ...prevState,
      [input]: value
  }));


  }
  const handleUploadFileIGKorpstar = (val) => {
    console.log(val);
    setFormData(prevState => ({
      ...prevState,
      uploadedFileIGKorpstar: val.path
  }));

  }

  const handleUploadFileIGWreckIT = (val) => {
    console.log(val);
    setFormData(prevState => ({
      ...prevState,
      uploadedFileIGWreckIT: val.path
  }));

  }
  const handleUploadFileIGSinarmas = (val) => {
    console.log(val);
    setFormData(prevState => ({
      ...prevState,
      uploadedFileIGSinarmas: val.path
  }));

  }
  const handleUploadFileAplSinarmas = (val) => {
    console.log(val);
    setFormData(prevState => ({
      ...prevState,
      uploadedFileAplSinarmas: val.path
  }));

  }
// javascript switch case to show different form in each step
  switch (step) {
    // case 1 to show stepOne form and passing nextStep, prevStep, and handleInputData as handleFormData method as prop and also formData as value to the fprm
    case 1:
      return (
        <div className="App">
            <Row>
              <Col className="custom-margin">
                <StepOneWebinar nextStep={nextStep} handleFormData={handleInputData} values={formData} />
              </Col>
            </Row>
        </div>
      );

      case 2:
      return (
        <div className="App">
            <Row>
              <Col className="custom-margin">
                <StepUploadWebinar nextStep={nextStep} values={formData} handleUploadFileIGKorpstar={handleUploadFileIGKorpstar} handleUploadFileIGWreckIT={handleUploadFileIGWreckIT} handleUploadFileIGSinarmas={handleUploadFileIGSinarmas} handleUploadFileAplSinarmas={handleUploadFileAplSinarmas} />
              </Col>
            </Row>
        </div>
      );
    // case 2 to show stepTwo form passing nextStep, prevStep, and handleInputData as handleFormData method as prop and also formData as value to the fprm
    case 3:
      return (
        <div className="App">
            <Row>
              <Col  md={{ span: 6, offset: 3 }} className="custom-margin">
                <Final values={formData}  />
              </Col>
            </Row>
        </div>
      );
    // default case to show nothing
    default:
      return (
        <div className="App">
        </div>
      );
  }
}

export default FormWebinar;
