import React from "react";

function Footer() {
  return (
    <div>
      <div class="container my-5">
        <div class="row">
          {/* contact */}
          <div class="col">
            <div>Phone : 9125478957</div>
            <div>Mail : abc@gmail.com</div>
            <div>Linkedin id : </div>
            <div>website : </div>
          </div>

          {/* Address */}
          <div class="col justify-content-center">
            <div>
              Sindhi College, 33/2B, Kempapura, Hebbal, Bangalore - 560 024
            </div>
          </div>
        </div>
      </div>
      <hr></hr>

      {/* Copyright */}

      <div class="copy text-center">
        <h6>Copyright © 2022 Sindhi College</h6>
      </div>
    </div>
  );
}

export default Footer;
