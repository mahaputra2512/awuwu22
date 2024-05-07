import React from "react";
import { Card } from "react-bootstrap";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Final = ({ values }) => {
  const btns = document.querySelectorAll(".close");

  btns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.target.parentNode.remove();
    });
  });
  const history = useHistory();
  //destructuring the object from values
  const { sourceInformation, Nama, Email, kontakWebinar, Attendance, uploadedFileIGKorpstar, uploadedFileIGWreckIT, uploadedFileIGSinarmas, uploadedFileAplSinarmas } = values;
  async function submitPost() {
    const response = await axios
      .post("https://wreckit4-api.korpstar-poltekssn.org/api/registerWebinar", {
        sourceInformation: sourceInformation,
        name: Nama,
        email: Email,
        telpNumber: kontakWebinar,
        attendance: Attendance,
        filePath1: uploadedFileIGKorpstar,
        filePath2: uploadedFileIGWreckIT,
        filePath3: uploadedFileIGSinarmas,
        filePath4: uploadedFileAplSinarmas,
      })
      .then((response) => {
        console.log(response.data);
        let notif = document.createElement("div");
        notif.innerHTML = '<div class="notification-container"><div class="notification"><p>PENDAFTARAN BERHASIL</p><button class="close">Close</button></div></div>';
        document.body.append(notif);
        setTimeout(() => {
          notif.remove();
        }, 15000);
        history.push("/");
        window.location.reload();
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response);
          console.log("Server responded");
          let notif = document.createElement("div");
          notif.innerHTML = '<div class="notification-container"><div class="notification"><p>Server Responded</p><button class="close">Close</button></div></div>';
          document.body.prepend(notif);
          setTimeout(() => {
            notif.remove();
          }, 5000);
          history.push("/");
          window.location.reload();
        } else if (error.request) {
          console.log(error.request);
          console.log("Network error");
          let notif = document.createElement("div");
          notif.innerHTML = '<div class="notification-container"><div class="notification"><p>Network Error</p><button class="close">Close</button></div></div>';
          document.body.prepend(notif);
          setTimeout(() => {
            notif.remove();
          }, 5000);
          history.push("/");
          window.location.reload();
        } else {
          console.log(error);
          history.push("/");
          window.location.reload();
        }
      });
  }
  return (
    <>
      <Card style={{ marginTop: 100, textAlign: "left" }}>
        <Card.Body>
          <p>
            <strong>Nama Lengkap:</strong> {Nama}{" "}
          </p>
          <p>
            <strong>Email:</strong> {Email}{" "}
          </p>
          <p>
            <strong>Kontak</strong> {kontakWebinar}{" "}
          </p>
          <p>
            <strong>Kehadiran</strong> {Attendance}{" "}
          </p>
        </Card.Body>
      </Card>
      <button className="mb-4 quiz-submit" variant="primary" type="submit" onClick={submitPost}>
        Submit
      </button>
    </>
  );
};

export default Final;
