import React from "react";

const ImageSelector = ({ onImageSelect }) => {
  const handleImageSelect = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      const imageData = reader.result;
      onImageSelect(imageData);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className=" mt-5 w-[100%]   px-5 image-selector mb-4">
      <label
        htmlFor="image"
        className=" block text-sm font-medium text-gray-700"
      >
        Change the ad creative image:
      </label>
      <div className="mt-1 flex justify-center px-6 border-2 border-grey-300 border-dashed  rounded-md ">
        <div className="space-y-2 ">
          <div className="flex text-sm text-grey-600 ">
            <label
              htmlFor="image"
              className=" relative cursor-pointer rounded-md font-medium text-blue-600  hover:text-blue-500  bg-white  "
            >
              <span> upload a file </span>
              <input
                type="file"
                id="image"
                accept="image/*"
                onChange={handleImageSelect}
                className=" sr-only"
              />
            </label>
            <p className=" pl-1">or drag and drop</p>
          </div>
          <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
        </div>
      </div>
    </div>
  );
};

export default ImageSelector;
