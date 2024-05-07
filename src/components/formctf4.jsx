import React from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import "../assets/pembicara.css";
import "../assets/formctf4.css";
import "../assets/button.css";
import { Card } from "react-bootstrap";

const Final = ({ values }) => {
  const btns = document.querySelectorAll(".close");

  btns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.target.parentNode.remove();
    });
  });
  const history = useHistory();
  //destructuring the object from values
  const { sourceInformation, EmailAnggota1, EmailAnggota2, uploadedFile1, uploadedFile2, uploadedFile3, NamaTIM, NamaKetuaTIM, EmailKetuaTim, KontakKetua, KontakAnggota1, KontakAnggota2, UkuranKaosKetuaTIM, NamaAnggota1, UkuranKaosAnggotaTim1, NamaAnggota2, UkuranKaosAnggotaTim2 } = values;
  async function submitPost() {
    const response = await axios
      .post("https://wreckit4-api.korpstar-poltekssn.org/api/registerCTF", {
        teamName: NamaTIM,
        leaderName: NamaKetuaTIM,
        kaosLeader: UkuranKaosKetuaTIM,
        member1Name: NamaAnggota1 ? NamaAnggota1 : "-",
        kaosMember1: UkuranKaosAnggotaTim1,
        member2Name: NamaAnggota2 ? NamaAnggota2 : "-",
        kaosMember2: UkuranKaosAnggotaTim2,
        email: EmailKetuaTim,
        email1: EmailAnggota1 ? EmailAnggota1 : "-",
        email2: EmailAnggota2 ? EmailAnggota2 : "-",
        leaderTelpNumber: KontakKetua,
        member1TelpNumber: KontakAnggota1 ? KontakAnggota1 : "-",
        member2TelpNumber: KontakAnggota2 ? KontakAnggota2 : "-",
        filePathLeader: uploadedFile1 ? uploadedFile1 : "-",
        filePathMember1: uploadedFile2 ? uploadedFile2 : "-",
        filePathMember2: uploadedFile3 ? uploadedFile3 : "-",
        sourceInformation: sourceInformation,
      })
      .then((response) => {
        console.log(response.data);
        let notif = document.createElement("div");
        notif.innerHTML = '<div class="notification-container"><div class="notification"><p>PENDAFTARAN BERHASIL</p><button class="close">Close</button></div></div>';
        document.body.append(notif);
        setTimeout(() => {
          notif.remove();
        }, 5000);
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
        }
      });
  }

  return (
    <>
      <Card style={{ marginTop: 10, textAlign: "center" }}>
        <Card.Body>
          <table>
            <tr>
              <th>
                <strong>Nama Tim</strong>
              </th>
              <th>{NamaTIM} </th>
            </tr>
            <tr>
              <th>
                <strong>Nama Lengkap Ketua Tim</strong>
              </th>
              <th>{NamaKetuaTIM} </th>
            </tr>
            <tr>
              <th>
                <strong>Email Ketua Tim</strong>
              </th>
              <th>{EmailKetuaTim} </th>
            </tr>
            <tr>
              <th>
                <strong>Kontak Ketua Tim</strong>
              </th>
              <th>{KontakKetua} </th>
            </tr>
            <tr>
              <th>
                <strong>Ukuran Kaos Ketua Tim</strong>
              </th>
              <th>{UkuranKaosKetuaTIM} </th>
            </tr>
            <tr>
              <th>
                <strong>Nama Lengkap Anggota Tim 1</strong>
              </th>
              <th>{NamaAnggota1} </th>
            </tr>
            <tr>
              <th>
                <strong>Email Anggota Tim 1</strong>
              </th>
              <th>{EmailAnggota1} </th>
            </tr>
            <tr>
              <th>
                <strong>Ukuran Kaos Anggota Tim 1</strong>
              </th>
              <th>{UkuranKaosAnggotaTim1} </th>
            </tr>
            <tr>
              <th>
                <strong>Kontak Anggota Tim 1</strong>
              </th>
              <th>{KontakAnggota1} </th>
            </tr>
            <tr>
              <th>
                <strong>Nama Lengkap Anggota Tim 2</strong>
              </th>
              <th>{NamaAnggota2} </th>
            </tr>
            <tr>
              <th>
                <strong>Email Anggota Tim 2</strong>
              </th>
              <th>{EmailAnggota2} </th>
            </tr>
            <tr>
              <th>
                <strong>Ukuran Kaos Anggota Tim 2</strong>
              </th>
              <th>{UkuranKaosAnggotaTim2} </th>
            </tr>
            <tr>
              <th>
                <strong>Kontak Anggota Tim 2</strong>
              </th>
              <th>{KontakAnggota2} </th>
            </tr>
          </table>
        </Card.Body>
      </Card>
      <button className="mb-4 quiz-submit" variant="primary" type="submit" onClick={submitPost}>
        Submit
      </button>
    </>
  );
};

export default Final;
