import { Row } from "react-bootstrap";
import { useState } from "react";
import StepOne from "./formctf1";
import StepTwo from "./formctf2";
import StepTwoTwo from "./formctf22";
import Final from "./formctf4";

function Formregweb() {

  //state for steps
  const [step, setstep] = useState(1);
  //state for form data
  const [formData, setFormData] = useState({
    sourceInformation: "",
    NamaTIM: "",
    NamaKetuaTIM: "",
    EmailKetuaTim: "",
    EmailAnggota1: "",
    EmailAnggota2: "",
    KontakKetua: "",
    TambahAnggota: "TIDAK",
    UkuranKaosKetuaTIM: "-",
    NamaAnggota1: "",
    UkuranKaosAnggotaTim1: "-",
    KontakAnggota1: "",
    NamaAnggota2: "",
    UkuranKaosAnggotaTim2: "-",
    KontakAnggota2: "",
    uploadedFile1: "",
    uploadedFile2: "",
    uploadedFile3: "",
  })

  // function for going to next step by increasing step state by 1
  const nextStep = () => {
    setstep(step + 1);
  };

  const playAlone1 = () => {
    setstep(step+3);
  };

  const playAlone2 = () => {
    setstep(step+2);
  };

  // function for going to previous step by decreasing step state by 1
  const prevStep = () => {
    setstep(step - 1);
  };

  // handling form input data by taking onchange value and updating our previous form data state
  const handleInputData = input => e => {
    // input value from the form
    const { value } = e.target;

    //updating for data state taking previous state and then adding new value to create new object
    setFormData(prevState => ({
      ...prevState,
      [input]: value
  }));
  }

  const handleUploadFile1 = (val) => {
    setFormData(prevState => ({
      ...prevState,
      uploadedFile1: val.path
      }));
  }
  const handleUploadFile2 = (val) => {
    setFormData(prevState => ({
      ...prevState,
      uploadedFile2: val.path
      }));
  }
  const handleUploadFile3 = (val) => {
    setFormData(prevState => ({
      ...prevState,
      uploadedFile3: val.path
      }));
  }
// javascript switch case to show different form in each step
  switch (step) {
    // case 1 to show stepOne form and passing nextStep, prevStep, and handleInputData as handleFormData method as prop and also formData as value to the fprm
    case 1:
      return (
            <Row>
                <StepOne nextStep={nextStep} handleFormData={handleInputData} values={formData} playAlone1={playAlone1} handleUploadFile={handleUploadFile1} />
            </Row>
      );
    // case 2 to show stepTwo form passing nextStep, prevStep, and handleInputData as handleFormData method as prop and also formData as value to the fprm
    case 2:
      return (
            <Row>
                <StepTwo nextStep={nextStep} prevStep={prevStep} handleFormData={handleInputData} values={formData} playAlone1={playAlone2} handleUploadFile={handleUploadFile2} />
            </Row>
      );
    case 3:
      return (
            <Row>
                <StepTwoTwo nextStep={nextStep} prevStep={prevStep} handleFormData={handleInputData} values={formData} handleUploadFile={handleUploadFile3} />
            </Row>
      );
    case 4:
      return (
        <Row>
            <Final values={formData}  />
        </Row>
      // Only formData is passed as prop to show the final value at form submit
      );
      
    
    // default case to show nothing
    default:
      return (
        <div className="cards">
        </div>
      );
  }
}

export default Formregweb;
