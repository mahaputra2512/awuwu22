import React, { useState } from "react";
import { Form, Card, Button } from "react-bootstrap";
import validator from "validator";
import "../assets/pembicara.css";
import Uploadbukti from "./uploadbukti";

// creating functional component ans getting props from app.js and destucturing them
const StepOne = ({ playAlone1, nextStep, handleFormData, values, handleUploadFile }) => {
  //creating error state for validation
  const [error, setError] = useState(false);

  // after form submit validating the form data using validator
  const submitFormData = (e) => {
    e.preventDefault();
    // checking if value of first name and last name is empty show error else take to step 2
    if (validator.isEmpty(values.sourceInformation) || validator.isEmpty(values.TambahAnggota) || validator.isEmpty(values.NamaTIM) || validator.isEmpty(values.NamaKetuaTIM) || validator.isEmpty(values.EmailKetuaTim) || validator.isEmpty(values.UkuranKaosKetuaTIM) || validator.isEmpty(values.uploadedFile1)) {
      setError(true);
    } else {
      if (values.TambahAnggota == "YA") {
        nextStep();
      } else {
        playAlone1();
      }
    }
  };

  return (
    <>
      <div id="ctf" className="max-w-[300px] w-full h-full mx-auto p-2 flex justify-center items-center text-center ">
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
                <Form.Select style={{ border: error ? "2px solid red" : "" }} name="sourceInformation" placeholder="This is a required field" onChange={handleFormData("sourceInformation")} className="quiz-input">
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
                {error ? (
                  <Form.Text style={{ color: "red" }}>
                    <br />
                    This is a required field
                  </Form.Text>
                ) : (
                  ""
                )}
              </Form.Group>
              <Form.Group className="mb-3 mt-4">
                <Form.Label>Nama Tim</Form.Label>
                <br />
                <Form.Control style={{ border: error ? "2px solid red" : "" }} name="NamaTIM" defaultValue={values.NamaTIM} type="text" placeholder="This is a required field" onChange={handleFormData("NamaTIM")} className="quiz-input" />
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
                <Form.Label>Nama Lengkap Ketua Tim</Form.Label>
                <br />
                <Form.Control style={{ border: error ? "2px solid red" : "" }} name="NamaKetuaTIM" defaultValue={values.NamaKetuaTIM} type="text" placeholder="This is a required field" onChange={handleFormData("NamaKetuaTIM")} className="quiz-input" />
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
                <Form.Label>Email Ketua Tim</Form.Label>
                <br />
                <Form.Control style={{ border: error ? "2px solid red" : "" }} type="email" placeholder="This is a required field" onChange={handleFormData("EmailKetuaTim")} className="quiz-input" />
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
                  onChange={handleFormData("KontakKetua")}
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
                <Form.Label>Ukuran Kaos Ketua Tim</Form.Label>
                <br />
                <Form.Select style={{ border: error ? "2px solid red" : "" }} name="UkuranKaosKetuaTIM" defaultValue="-" placeholder="This is a required field" onChange={handleFormData("UkuranKaosKetuaTIM")} className="quiz-input">
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
                </a>
              </Form.Label>
              <br />
              <Uploadbukti alamat="ctf" onHandle={handleUploadFile} error={error} />

              <br />
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

export default StepOne;
