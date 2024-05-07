import React from "react"
import Navbar from "./Navbar"
import '../assets/faq.css';

function Faq() {
  return (
    <>
    <Navbar />
    <div>
    <div class="wrapper crt">
        {/* <div class="quote ui-box">
        <Link to="/" className="btn"><span class="fa fa-angle-left"></span></Link>
          <p>WRECK-IT 4.0 merupakan kegiatan tahunan di bidang keamanan siber yang bekerjasama dengan Program Studi Rekayasa Keamanan Siber Politeknik Siber dan Sandi Negara. Pada tahun 2023, WRECK-IT 4.0 mengusung tema #EncouragingInnovation: Developing Younger Generation through Education and Technology. Kompetisi ini diadakan oleh Senat Korps Taruna Politeknik Siber dan Sandi Negara.</p>
          <Link to="/" className="btn"><span class="fa fa-angle-left"></span></Link>
          <p>Babak penyisihan dilaksanakan secara daring menggunakan sistem Jeopardy. Bagi sepuluh tim yang menyelesaikan soal dan mengumpulkan write-up dengan baik serta tidak melakukan pelanggaran maka berhak melanjutkan ke babak final.
             Pada Webinar sesi 1, kami mengusung topik The Youth Role and Challenge towards Technology Development yang akan dihadiri oleh Narenda Wicaksono. Webinar kedua kami mengusung tema Technology 4.0: Think Forward, Think Digital, Deliver Growth yang akan dihadiri oleh Onno Widodo Purbo, Semi Yulianto, dan Faisal Yahya.</p>
            
              <div className="flex items-center justify-center py-10">
              <iframe height="360" width="640" src='https://www.youtube.com/embed/BIfiodooo7o'
                frameborder='10'
                allow='autoplay; encrypted-media'
                allowfullscreen
                title='video'
              />
          </div>
        </div>
         */}
        <div class="chat ui-box">
          <div class="chat-sent">
            <div class='message message-outgoing'>
              <div class="message-avatar ui-box">Q</div>
              <div class="message-text ui-box">Webnya tidak bekerja dengan baik</div>
            </div>
            <div class='message message-incoming'>
              <div class="message-text ui-box">Silahkan hard refresh dengan ctrl + f5 atau clear cache. Kendala lebih lanjut bisa dilaporkan kepada panitia melalui contact person atau social media yang tersedia.</div>
              <div class="message-avatar ui-box">A</div>
            </div>
            <div class='message message-outgoing'>
              <div class="message-avatar ui-box">Q</div>
              <div class="message-text ui-box">Dimana saya bisa melihat secara detail teknis lomba dan webinar WRECK IT?</div>
            </div>
            <div class='message message-incoming'>
              <div class="message-text ui-box">Penjelasan detail secara teknis mengenai kegiatan lomba Capture The Flag dan Webinar WRECK IT 4.0 dapat dilihat pada guidebook yang tersedia di menu 'Rules'</div>
              <div class="message-avatar ui-box">A</div>
            </div>
            <div class='message message-outgoing'>
              <div class="message-avatar ui-box">Q</div>
              <div class="message-text ui-box">Apakah saya tetap mendapatkan sertifikat apabila mengikuti salah satu webinar saja?</div>
            </div>
            <div class='message message-incoming'>
              <div class="message-text ui-box">Tidak, hanya peserta yang mengikuti webinar sesi 1 dan sesi 2 yang berhak mendapatkan e-sertifikat</div>
              <div class="message-avatar ui-box">A</div>
            </div>
            <div class='message message-outgoing'>
              <div class="message-avatar ui-box">Q</div>
              <div class="message-text ui-box">Apakah boleh menggunakan kartu identitas lain selain KTP sebagai persyaratan administrasi?</div>
            </div>
            <div class='message message-incoming'>
              <div class="message-text ui-box">Boleh, seperti yang sudah tertulis pada Guidebook CTF Wreck-It 4.0, pendaftar dapat menggunakan kartu identitas lain seperti KTM, SIM, dan Paspor.</div>
              <div class="message-avatar ui-box">A</div>
            </div>
            <div class='message message-outgoing'>
              <div class="message-avatar ui-box">Q</div>
              <div class="message-text ui-box">Apakah peserta CTF wajib mengikuti webinar serta apakah harus mendaftar dua kali apabila ingin juga mengikuti webinar?</div>
            </div>
            <div class='message message-incoming'>
              <div class="message-text ui-box">Hanya tim CTF yang lolos ke babak final saja yang diwajibkan mengikuti webinar sesi II. Selebihnya, apabila peserta CTF ingin menyaksikan webinar tetap mengisi juga formulir registrasi webinar</div>
              <div class="message-avatar ui-box">A</div>
            </div>
            <div class='message message-outgoing'>
              <div class="message-avatar ui-box">Q</div>
              <div class="message-text ui-box">Bagaimana saya mengetahui hasil seleksi administrasi CTF?</div>
            </div>
            <div class='message message-incoming'>
              <div class="message-text ui-box">Panitia Wreck-It 4.0 akan mengirimkan pesan email konfirmasi status seleksi administrasi peserta kepada alamat email ketua tim yang sudah didaftarkan. Pay attention to your email notification!</div>
              <div class="message-avatar ui-box">A</div>
            </div>
            <div class='message message-outgoing'>
              <div class="message-avatar ui-box">Q</div>
              <div class="message-text ui-box">Apakah semua anggota tim perlu membuat akun e-money Sinarmas atau hanya perwakilan saja?</div>
            </div>
            <div class='message message-incoming'>
              <div class="message-text ui-box">Semua anggota tim wajib membuat akun dan screenshot akun dilampirkan satu paket dengan persyaratan administrasi lainnya.</div>
              <div class="message-avatar ui-box">A</div>
            </div>
            <div class='message message-outgoing'>
              <div class="message-avatar ui-box">Q</div>
              <div class="message-text ui-box">Bagaimana saya menghubungi panitia WRECK IT?</div>
            </div>
            <div class='message message-incoming'>
              <div class="message-text ui-box">Silahkan direct message akun Instagram pada ikon di bawah atau hubungi kami melalui Whatsapp di +6285756000350 (Ibad)</div>
              <div class="message-avatar ui-box">A</div>
            </div>
          </div>
          {/* <div class="chat-textbox">
            <textarea class="chat-textarea ui-box crt">
            </textarea>
            <a class="btn chat-send-btn ui-box"><span class="fa fa-angle-right"></span></a>
          </div> */}
        </div>
      </div>
    </div>
    </>
  )
}

export default Faq;