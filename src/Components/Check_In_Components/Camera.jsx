import React from "react";
// import { check } from "./Location";
import "./Camera.css";

const Camera = () => {
  var constraints = { video: { facingMode: "user" }, audio: false };

  const cameraView = document.querySelector("#camera--view"),
    cameraOutput = document.querySelector("#camera--output"),
    cameraSensor = document.querySelector("#camera--sensor"),
    cameraTrigger = document.querySelector("#camera--trigger");

  function cameraStart() {
    navigator.mediaDevices
      .getUserMedia(constraints)
      .then(function (stream) {
        //track
        var track = stream.getTracks()[0];
        cameraView.srcObject = stream;
      })
      .catch(function (error) {
        console.error("Oops. Something is broken.", error);
      });
  }

  window.addEventListener("load", cameraStart, false);

  return (
    <>
      <div className="main-camera">
        <main id="camera">
          <canvas id="camera--sensor"></canvas>
          <video id="camera--view" autoplay playsinline></video>
          <img src="//:0" alt="" className="camera--output" />
          <button
            id="camera--trigger"
            onClick={() => {
              cameraSensor.getContext("2d").drawImage(cameraView, 0, 0);
              cameraOutput.src = cameraSensor.toDataURL("image/webp");
              cameraOutput.classList.add("taken");
              cameraSensor.width = cameraView.videoWidth;
              cameraSensor.height = cameraView.videoHeight;
            }}
          >
            Take a picture
          </button>
        </main>
      </div>
    </>
  );
};

export default Camera;
