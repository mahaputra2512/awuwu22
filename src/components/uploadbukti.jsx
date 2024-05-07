import React, { useState } from "react";
import axios from "axios";
import { Form, Card } from "react-bootstrap";
import "../assets/upload.css";

function Uploadbukti(val) {
  const [file, setFile] = useState();
  const [respButton, setButton] = useState(false);

  function gettingResponFile(status){
    if(status==200)setButton(true);
  }

  function handleChange(event) {
    setFile(event.target.files[0])
  }
  
  async function handleSubmit(event) {
    event.preventDefault()
    const url = 'https://wreckit4-api.korpstar-poltekssn.org/api/uploadfile'+val['alamat'];
    const formData = new FormData();
    formData.append('file', file);
    formData.append('fileName', file.name);
    axios.post(url, formData)
    .then((response) => {
      let notif = document.createElement('div');
      val['onHandle'](response.data);
      console.log(response.status);
      gettingResponFile(response.status);
      notif.innerHTML = '<div class="notification-container"><div class="notification"><p>Upload Berhasil</p><button class="close">Close</button></div></div>';
      document.body.append(notif);
      setTimeout(() => {
        notif.remove()
      }, 5000);
      
    })
    .catch((error) => {
      if (error.response) {
        console.log("Server responded");
        let notif = document.createElement('div');
        notif.innerHTML = '<div class="notification-container"><div class="notification"><p>Server Responded</p><button class="close">Close</button></div></div>';
        document.body.prepend(notif);
        setTimeout(() => {
          notif.remove()
        }, 5000);
      } else if (error.request) {
        console.log("Network error");
        let notif = document.createElement('div');
        notif.innerHTML = '<div class="notification-container"><div class="notification"><p>Network Error</p><button class="close">Close</button></div></div>';
        document.body.prepend(notif);
        setTimeout(() => {
          notif.remove()
        }, 5000);
      } else {
        console.log(error);
      }
    });
  }

  return (
    <div className="App">
    <Card style={{ marginTop: 10 }}>
      <input
          onChange={handleChange}                
          type="file"
          accept=".png,.jpg,.jpeg"
          className="ml-2"
        />
        {val['error'] ? (
                  <Form.Text style={{ color: "red" }}>
                    <br />
                    Upload File is a required
                    <br />
                  </Form.Text>
                ) : (
                  ""
                )}
      {
        respButton? (<button onClick={handleSubmit} className="quiz-submit quiz-submit-rally">
        File was Uploaded / Change File
      </button>) : ( <button onClick={handleSubmit}  className="quiz-submit">
        Upload
      </button> ) }
      
    </Card>
      
    </div>
  );
}

export default Uploadbukti;