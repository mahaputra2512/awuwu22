import React, { useState } from "react";
import { Form, Card, Button } from "react-bootstrap";
import validator from "validator";

// creating functional component ans getting props from app.js and destucturing them
const StepOneWebinar = ({ nextStep, handleFormData, values }) => {
  //creating error state for validatio
  const [sourceInformationError, setSourceInformationError] = useState(false);
  const [namaError, setNamaError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [attendanceError, setAttendanceError] = useState(false);
  const [kontakWebinarError, setKontakWebinarError] = useState(false);
  
  const submitFormData = (e) => {
    e.preventDefault();
    // checking if value of first name and last name is empty show error else take to step 2
    const {
      sourceInformation,
      Nama,
      Email,
      Attendance,
      kontakWebinar
    } = values;
  
    setSourceInformationError(validator.isEmpty(sourceInformation));
    setNamaError(validator.isEmpty(Nama));
    setEmailError(validator.isEmpty(Email));
    setAttendanceError(validator.isEmpty(Attendance));
    setKontakWebinarError(validator.isEmpty(kontakWebinar));
  
    // checking if all errors are false, take to step 2
    if (
      !validator.isEmpty(sourceInformation) &&
      !validator.isEmpty(Nama) &&
      !validator.isEmpty(Email) &&
      !validator.isEmpty(Attendance) &&
      !validator.isEmpty(kontakWebinar)
    ) {
      nextStep();
    }
  };
  
  
  // const [error, setError] = useState(false);
  // // after form submit validating the form data using validator
  // const submitFormData = (e) => {
  //   e.preventDefault();
  //   // checking if value of first name and last name is empty show error else take to step 2
  //   if (validator.isEmpty(values.sourceInformation) || validator.isEmpty(values.Nama) || validator.isEmpty(values.Email) || validator.isEmpty(values.Attendance) || validator.isEmpty(values.kontakWebinar)) {
  //     setError(true);
  //   } else {
  //     nextStep();
  //   }
  // };

  return (
    <>
      <div id="ctf" className="max-w-[300px] w-full h-full mx-auto p-2 flex justify-center items-center text-center">
        <Card style={{ marginTop: 5 }}>
          <Card.Body>
            Pastikan anda telah membaca{" "}
            <a href="https://drive.google.com/drive/folders/1xbIEg9X2IPyJWEHeRAw7t0ff33F-tAyo" target="_blank" rel="noopener noreferrer" className="text-[#FFFFFF] font-bold underline mb-3">
              GUIDEBOOK
            </a>
            <Form onSubmit={submitFormData}>
              <Form.Group className="mb-3">
                <Form.Label>Darimana kalian tahu event ini?</Form.Label>
                <br />
                <Form.Select style={{ border: sourceInformationError ? "2px solid red" : "" }} name="sourceInformation" placeholder="This is a required field" onChange={handleFormData("sourceInformation")} className="quiz-input">
                  <option value="">-</option>
                  <option value="Teman">Teman</option>
                  <option value="Instagram">Instagram</option>
                  <option value="Facebook">Facebook</option>
                  <option value="Twitter">Twitter</option>
                  <option value="Telegram">Telegram</option>
                  <option value="WhatsApp">WhatsApp</option>
                  <option value="Grup Komunitas">Grup Komunitas</option>
                  <option value="Website PoltekSSN">Website PoltekSSN</option>
                  <option value="Website Wreck-IT">Website Wreck-IT</option>
                  <option value="Lainnya">Lainnya</option>
                </Form.Select>
                {sourceInformationError ? (
                  <Form.Text style={{ color: "red" }}>
                    <br />
                    This is a required field
                  </Form.Text>
                ) : (
                  ""
                )}
              </Form.Group>
              <Form.Group className="mb-3 mt-4">
                <Form.Label>Nama Lengkap</Form.Label>
                <br />
                <Form.Control style={{ border: namaError ? "2px solid red" : "" }} name="Nama" defaultValue={values.Nama} type="text" placeholder="This is a required field" onChange={handleFormData("Nama")} className="quiz-input" />
                {namaError ? (
                  <Form.Text style={{ color: "red" }}>
                    <br />
                    This is a required field
                  </Form.Text>
                ) : (
                  ""
                )}
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control style={{ border: emailError ? "2px solid red" : "" }} type="email" placeholder="This is a required field" onChange={handleFormData("Email")} className="quiz-input" />
                {emailError ? (
                  <Form.Text style={{ color: "red" }}>
                    <br />
                    This is a required field
                  </Form.Text>
                ) : (
                  ""
                )}
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Nomor Telepon</Form.Label>
                <br />
                <Form.Control style={{ border: kontakWebinarError ? "2px solid red" : "" }} type="tel" placeholder="This is a required field" onChange={handleFormData("kontakWebinar")} className="quiz-input" />
                {kontakWebinarError ? (
                  <Form.Text style={{ color: "red" }}>
                    <br />
                    This is a required field
                  </Form.Text>
                ) : (
                  ""
                )}
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Jenis Kegiatan</Form.Label>
                <br />
                <Form.Select style={{ border: attendanceError ? "2px solid red" : "" }} name="Attendance" defaultValue="Luring" placeholder="This is a required field" onChange={handleFormData("Attendance")} className="quiz-input">
                  {/* <option value="Luring">Luring</option> */}
                  <option value="Daring">Daring</option>
                </Form.Select>
                {attendanceError ? (
                  <Form.Text style={{ color: "red" }}>
                    <br />
                    This is a required field
                  </Form.Text>
                ) : (
                  ""
                )}
              </Form.Group>
              <Button className="mb-4 quiz-submit" variant="primary" type="submit">
                Continue
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default StepOneWebinar;
