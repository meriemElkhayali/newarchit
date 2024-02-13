import React from 'react'
import './Footer.css';

export default function Footer() {
  return (
         
    <div class="footer-basic">
    <footer>
        <div class="social"><a href="https://wa.me/+212661635829" target="_blank"><i class="icon ion-social-whatsapp"></i></a><a href="https://web.facebook.com/people/ABDO-ARCHI-NORD-SARL/100063529420324/?_rdc=1&_rdr"><i class="icon ion-social-facebook"></i></a></div>
        {/* <ul class="list-inline">
            <li class="list-inline-item"><a href="#">Accueil</a></li>
            <li class="list-inline-item"><a href="#">Projets</a></li>
            <li class="list-inline-item"><a href="#">Contact</a></li>
        </ul> */}
        <p class="copyright" style={{ fontSize:"bold" ,paddingBottom:"20px" }}> <i class="icon ion-ios-telephone"></i> 0539325159</p>     
        {/* <div style={{ textAlign: "center" }}>
        <a className="navbar-brand"  href="/">
  <img
    src="image/Capture_d_écran_2023-11-26_132316-removebg-preview.png"
    style={{ width: "40px", display: "block", margin: "0 auto" }}
    alt="Logo"
  />
</a></div> */}

        <p class="copyright">STE ABDO ARCHI NORD SARL © 2024</p>   

        <p class="copyright">web site created by :<a href='https://ma.linkedin.com/in/meriem-el-khayali-a90070248'>  <img src='https://firebasestorage.googleapis.com/v0/b/archivideo-14dff.appspot.com/o/meriemelkh.png?alt=media&token=36781663-02b7-409f-bbb9-69c66c1c9c62' style={{ height:"60px" }}/>   </a> </p> 
      
        </footer>
</div>
  )
}
