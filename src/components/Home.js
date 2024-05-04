

import React, { useState } from "react";
import ImageSelector from "./ImageSelector";
import { HexColorPicker } from "react-colorful";

const Home = () => {
  const [adTextInput, setAdTextInput] = useState("");
  const [CTATextInput, setCTATextInput] = useState("");
  const [color, setColor] = useState("#95a387");
  const [isColorPickerOpen, setIsColorPickerOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [recentColors, setRecentColors] = useState([]);
  const [selectedColor, setSelectedColor] = useState();
  const handleImageSelect = (image) => {
    setSelectedImage(image); // Update selected image
  };

  const togglePicker = () => {
    if (isColorPickerOpen) {
      setColor(color);
      setRecentColors((prevColors) => [
        color,
        ...prevColors.filter((c) => c !== color).slice(0, 4),
      ]);
    }
    setIsColorPickerOpen(!isColorPickerOpen);
  };

  const handleInput = (e) => {
    setAdTextInput(e.target.value);
  };

  const ctahandleInput = (e) => {
    setCTATextInput(e.target.value);
  };
  const handleColorChange = (newColor) => {
    setColor(newColor);
    // setRecentColors((prevColors) => [
    //   newColor,
    //   ...prevColors.filter((c) => c !== newColor).slice(0, 4),
    // ]);
  };
  return (
    <div className="m-10 h-[600px] px-4 py-2 rounded-lg flex justify-center items-center gap-6 mt-14">
      <div className="h-[90%] w-[500px] border  flex justify-center items-center">
        <div
            className=" relative w-[70%] h-[50%] bg-red-800   flex flex-col "
            style={{ backgroundColor: color }}
          >
            <div className=" flex flex-col  mt-2 k h-[100%] ">
              <div className=" px-4 top-0 flex flex-col justify-start items-start text-white font-medium ">
                <h1>{adTextInput || "Your Adtext Here"}</h1>
  
                <span className=" mt-2 p-1 border border-black bg-white text-red-600 rounded-md">
                  {CTATextInput || "Your CTA Here"}
                </span>
              </div>
              <div  style={{top:'80%' ,left:'50%',transform:'translate(-50%, -50%)' }} className=" absolute   flex flex-col justify-center items-center  ">
                {selectedImage && (
                  <img
                    src={selectedImage}
                    alt="Selected"
                    className="  mt-2 rounded-md object-contain h-48   w-[100%]"
                    style={{
                        border: '3px solid white',
                        borderRadius: '10px',
                        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                      }}
                  />
                )}
            </div>
          </div>
        </div>

      </div>
      <div className="h-[90%]   w-[500px] border rounded-sm  ">
        <div className="  m-4 flex flex-col justify-center  items-center  gap-5">
          <div className="flex flex-col justify-center items-center ">
            <h1 className="font-bold text-lg">Ad customization</h1>
            <span className=" font-extralight text-sm">
              customize ypur ad and get the templates accordingly
            </span>
          </div>
          <ImageSelector onImageSelect={handleImageSelect} />

          <h2 className="border border-t-white border-x-white  border-b-red-500 leading-3		 w-[100%]  text-center 		">
            <span className="  bg-slate-50 px-2"> edit contents</span>
          </h2>

          <div className=" mt-5 flex flex-col  w-[90%] gap-3">
            <input
              className="border  border-gray-300 p-2 rounded-md  font-light text-xs  "
              type="text"
              value={adTextInput}
              onChange={handleInput}
              placeholder="AD TEXT"
            />
            <input
              className="border border-gray-300 p-2 rounded-md  font-light text-xs "
              type="text"
              value={CTATextInput}
              onChange={ctahandleInput}
              placeholder="CTA "
            />
          </div>
          <div className=" sticky bottom-[-80px] left-[0px] flex gap-3  ">
            <h2 className="">choose color:</h2>
            <div className=" flex   gap-2 ">
              {recentColors.map((color, index) => (
                <button
                  key={index}
                  className="w-6 h-6 rounded-full"
                  style={{ backgroundColor: color }}
                  onClick={() => setColor(color)}
                />
              ))}
              
              <button onClick={togglePicker} className="w-6 h-6 rounded-full bg-gray-200 font-bold text-xl">
                +
              </button>
              {isColorPickerOpen && (
                <>
                  {/* <HexColorPicker color={color} onChange={setColor} /> */}

                  <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center  bg-opacity-50 z-50">
                    <div className=" border  absolute bottom-6 right-8 p-3 bg-white rounded-lg">
                      <HexColorPicker
                        color={color}
                        onChange={handleColorChange}
                      />
                      <button className="mt-2 font-extrabold text-green-600 " onClick={togglePicker}>
                        Done ✅
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
