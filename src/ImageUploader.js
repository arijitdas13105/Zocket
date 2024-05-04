import React, { useState } from "react";

function ImageUploader() {
  const [imageURL, setImageURL] = useState("");
  const [backgroundColor, setBackgroundColor] = useState("#0369A1");

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      setImageURL(reader.result);
    };

    reader.readAsDataURL(file);
  };

  const handleColorChange = (event) => {
    setBackgroundColor(event.target.value);
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <br />
      <label>
        Background Color:{" "}
        <input
          type="color"
          value={backgroundColor}
          onChange={handleColorChange}
        />
      </label>
      <br />
      <div
        style={{
          position: "relative",
          width: "400px",
          height: "400px",
          border: "1px solid black",
        }}
      >
        <div style={{ backgroundColor, width: "100%", height: "100%" }}>
          {imageURL && (
            <canvas
              width={1080}
              height={1080}
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
              ref={(canvas) => {
                if (canvas) {
                  const ctx = canvas.getContext("2d");
                  const image = new Image();
                  image.onload = () => {
                    ctx.drawImage(image, 0, 0, 1080, 1080);
                  };
                  image.src = imageURL;
                }
              }}
            />
          )}
        </div>
        <div
          style={{
            position: "absolute",
            top: "50px",
            left: "50px",
            color: "#FFFFFF",
          }}
        >
          {/* Caption */}
          <div
            style={{ fontSize: "44px", textAlign: "left", maxWidth: "1000px" }}
          >
            1 & 2 BHK Luxury Apartments at just Rs.34.97 Lakhs
          </div>
        </div>
        <div
          style={{
            position: "absolute",
            top: "320px",
            left: "190px",
            textAlign: "center",
            color: "#FFFFFF",
          }}
        >
          {/* CTA */}
          <div
            style={{
              fontSize: "30px",
              backgroundColor: "#000000",
              padding: "24px",
              borderRadius: "12px",
              width: "fit-content",
            }}
          >
            Shop Now
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImageUploader;
