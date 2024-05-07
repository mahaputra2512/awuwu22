import React, { useState } from "react";
import { Form, Card, Button } from "react-bootstrap";
import validator from "validator";
import Uploadbukti from "./uploadbukti";

// creating functional component ans getting props from app.js and destucturing them
const StepUploadWebinar = ({ nextStep, handleUploadFileIGKorpstar, handleUploadFileIGWreckIT, handleUploadFileIGSinarmas, handleUploadFileAplSinarmas, values }) => {
  const [handleUploadFileIGKorpstarError, sethandleUploadFileIGKorpstarError] = useState(true);
  const [handleUploadFileIGWreckITError, sethandleUploadFileIGWreckITError] = useState(true);
  const [handleUploadFileIGSinarmasError, sethandleUploadFileIGSinarmasError] = useState(true);
  const [handleUploadFileAplSinarmasError, sethandleUploadFileAplSinarmasError] = useState(true);
  const submitFormData = (e) => {
    e.preventDefault();
    sethandleUploadFileIGKorpstarError(validator.isEmpty(values.uploadedFileIGKorpstar));
    sethandleUploadFileIGWreckITError(validator.isEmpty(values.uploadedFileIGWreckIT));
    sethandleUploadFileIGSinarmasError(validator.isEmpty(values.uploadedFileIGSinarmas));
    sethandleUploadFileAplSinarmasError(validator.isEmpty(values.uploadedFileAplSinarmas));
    if (
      !validator.isEmpty(values.uploadedFileIGKorpstar) &&
      !validator.isEmpty(values.uploadedFileIGWreckIT) &&
      !validator.isEmpty(values.uploadedFileIGSinarmas) &&
      !validator.isEmpty(values.uploadedFileAplSinarmas)
    ) {
      nextStep();
    }
  };

  return (
    <>
      <div id="ctf" className="max-w-[300px] w-full h-full mx-auto p-2 flex justify-center items-center text-center">
        <Card style={{ marginTop: 5 }}>
          <Card.Body>
            <Form onSubmit={submitFormData}>
              <br />
              <Form.Label>
                Bukti Follow Instagram{" "}
                <a href="https://www.instagram.com/korpstar.poltekssn/?next=%2F" className="text-[#FFFFFF] font-bold underline">
                  Korps Taruna Politeknik Siber dan Sandi Negara
                </a>
                {""}(Max 2Mb)
              </Form.Label>
              <br />
              <Uploadbukti alamat="webinar" onHandle={handleUploadFileIGKorpstar} error={handleUploadFileIGKorpstarError} />
              <br />
              <Form.Label>
                Bukti Follow Instagram{" "}
                <a href="https://www.instagram.com/wreckit.id/?next=%2F" className="text-[#FFFFFF] font-bold underline">
                  WRECK-IT
                </a>
                {""}(Max 2Mb)
              </Form.Label>
              <br />
              <Uploadbukti alamat="webinar" onHandle={handleUploadFileIGWreckIT} error={handleUploadFileIGWreckITError} />
              <br />
              <Form.Label>
                Bukti Follow Instagram{" "}
                <a href="https://www.instagram.com/banksinarmas_syariah/?next=%2F" className="text-[#FFFFFF] font-bold underline">
                  Bank Sinarmas Syariah
                </a>
                {""}(Max 2Mb)
              </Form.Label>
              <br />
              <Uploadbukti alamat="webinar" onHandle={handleUploadFileIGSinarmas} error={handleUploadFileIGSinarmasError} />
              <br />
              <Form.Label>
                Bukti install aplikasi Simobiplus Syariah (Max 2Mb){" "}
                <a class="menu__link" href="https://play.google.com/store/apps/details?id=com.simas.mobile.SimobiPlusSyariah">
                  <span class="Footer-icon fa fa-download"></span>
                </a>{" "}
              </Form.Label>
              <br />
              <Uploadbukti alamat="webinar" onHandle={handleUploadFileAplSinarmas} error={handleUploadFileAplSinarmasError} />
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

export default StepUploadWebinar;
