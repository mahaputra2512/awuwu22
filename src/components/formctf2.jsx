import React, { useState } from "react";
import { Form, Card, Button } from "react-bootstrap";
import validator from "validator";
import Uploadbukti from "./uploadbukti";

// creating functional component ans getting props from app.js and destucturing them
const StepTwo = ({ playAlone1, nextStep, handleFormData, prevStep, values, handleUploadFile }) => {
  //creating error state for validation
  const [error, setError] = useState(false);

  // after form submit validating the form data using validator
  const submitFormData = (e) => {
    e.preventDefault();

    if (validator.isEmpty(values.EmailAnggota1) || validator.isEmpty(values.TambahAnggota) || validator.isEmpty(values.NamaAnggota1) || validator.isEmpty(values.UkuranKaosAnggotaTim1) || validator.isEmpty(values.uploadedFile2)) {
      setError(true);
    } else {
      if (values.TambahAnggota == "YA") {
        nextStep();
      } else {
        playAlone1();
      }
    }
  };

  const backFormData = (e) => {
    e.preventDefault();
    prevStep();
  };

  return (
    <>
      <div id="ctf" className="max-w-[500px] w-full h-full mx-auto p-2 flex justify-center items-center text-center">
        <Card style={{ marginTop: 1 }}>
          <Card.Body>
            <Form onSubmit={submitFormData}>
              <Form.Group className="mb-3 mt-4">
                <Form.Label>Nama Lengkap Anggota 1</Form.Label>
                <br />
                <Form.Control style={{ border: error ? "2px solid red" : "" }} name="NamaAnggota1" defaultValue={values.NamaAnggota1} type="text" placeholder="Fill in '-' if not exist" onChange={handleFormData("NamaAnggota1")} className="quiz-input" />
                {error ? (
                  <Form.Text style={{ color: "red" }}>
                    <br />
                    This is a required field
                  </Form.Text>
                ) : (
                  ""
                )}
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Email Anggota 1</Form.Label>
                <br />
                <Form.Control style={{ border: error ? "2px solid red" : "" }} type="email" placeholder="This is a required field" onChange={handleFormData("EmailAnggota1")} className="quiz-input" />
                {error ? (
                  <Form.Text style={{ color: "red" }}>
                    <br />
                    This is a required field
                  </Form.Text>
                ) : (
                  ""
                )}
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Ukuran Kaos Anggota Tim 1</Form.Label>
                <br />
                <Form.Select style={{ border: error ? "2px solid red" : "" }} name="UkuranKaosAnggotaTim1" defaultValue={values.UkuranKaosAnggotaTim1} type="text" placeholder="Fill in '-' if not exist" onChange={handleFormData("UkuranKaosAnggotaTim1")} className="quiz-input">
                  <option value="-">-</option>
                  <option value="XS">XS</option>
                  <option value="S">S</option>
                  <option value="M">M</option>
                  <option value="L">L</option>
                  <option value="XL">XL</option>
                  <option value="XXL">XXL</option>
                </Form.Select>
                {error ? (
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
                <Form.Control
                  style={{ border: error ? "2px solid red" : "", appearance: "none" }}
                  type="tel" // Change the type to "tel"
                  placeholder="This is a required field"
                  onChange={handleFormData("KontakAnggota1")}
                  className="quiz-input"
                />
                {error ? (
                  <Form.Text style={{ color: "red" }}>
                    <br />
                    This is a required field
                  </Form.Text>
                ) : (
                  ""
                )}
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Tambahkan Anggota Tim</Form.Label>
                <br />
                <Form.Select style={{ border: error ? "2px solid red" : "" }} name="TambahAnggota" defaultValue={values.TambahAnggota} placeholder="This is a required field" onChange={handleFormData("TambahAnggota")} className="quiz-input">
                  <option value="TIDAK">TIDAK</option>
                  <option value="YA">YA</option>
                </Form.Select>
                {error ? (
                  <Form.Text style={{ color: "red" }}>
                    <br />
                    This is a required field
                  </Form.Text>
                ) : (
                  ""
                )}
              </Form.Group>
              <br />
              <Form.Label>
                Bukti install aplikasi Simobiplus Syariah (Max 2Mb){" "}
                <a class="menu__link" href="https://play.google.com/store/apps/details?id=com.simas.mobile.SimobiPlusSyariah">
                  <span class="Footer-icon fa fa-download"></span>
                </a>{" "}
              </Form.Label>
              <br />
              <Uploadbukti alamat="ctf" onHandle={handleUploadFile} error={error} />
              <br />

              <Button className="mb-4 quiz-submit" variant="primary" type="submit">
                Continue
              </Button>
            </Form>
            <Form onSubmit={backFormData}>
              <Button className="mb-4 quiz-submit" variant="primary" type="submit">
                Back
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default StepTwo;
