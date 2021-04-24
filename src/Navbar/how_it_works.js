import React from "react";
import "../index.css";

const HowItWorks = () => {
  return (
    <>
      <div className="howItWorks">
        <div className="first-div">
          <h1>How it Works !!</h1>
          <div className="second-div">
            <span class="dot">
              <img
                src="https://www.kindpng.com/picc/m/71-713844_register-now-animated-gif-hd-png-download.png"
                alt=""
              />
            </span>
            {/* <p>testing</p> */}

            <span class="dot">
              <img
                src="https://png.pngitem.com/pimgs/s/63-630704_transparent-location-clipart-png-map-marker-transparent-gif.png"
                alt=""
              />
            </span>
            {/* <p>test2</p> */}


            <span class="dot">
              <img
                src="https://png.pngitem.com/pimgs/s/522-5221424_transparent-calender-icon-png-blue-icon-circle-calendar.png"
                alt=""
              />
            </span>
            {/* <p>test3 </p> */}

            <span class="dot">
              <img
                src="data:image/png;base64,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"
                alt=""
              />
            </span>
            {/* <p>test5</p> */}
          </div>
          <p>Still have queries? Contact us.</p>
    <h4>something@covid.com</h4>
        </div>
      </div>
    </>
  );
};

export default HowItWorks;
