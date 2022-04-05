import React from "react";
import { useForm } from "react-hook-form";

function Form() {
  const { register, handleSubmit } = useForm();
  const handleRegistration = (data) => console.log(data);

  return (
    <div className="bg-slate-200">
      <p className="text-xl">UPLOAD CAR PHOTO*</p>
      {/* Upload & Form start */}
      <div className="grid lg:grid-cols-2 rounded p-5 sm:grid-cols-1">
        <div className="text-xl">Drag & Drop file you want to upload</div>
        {/* Form Design from here */}
        <div className="">
          <p className="text-xl">Choose your Car Model</p>
          <form onSubmit={handleSubmit(handleRegistration)}>
            <div>
              <label>Chassis Number*</label>
              <input
                className="w-full py-3 px-5 my-2 mx-0 inline-block border border-solid border-slate-300 rounded box-border"
                type="number"
                name="chassis_number"
                {...register("chassis_number")}
              />
            </div>
            <div>
              <label>Brand Name</label>
              <input
                className="w-full py-3 px-5 my-2 mx-0 inline-block border border-solid border-slate-300 rounded box-border"
                type="text"
                name="brand_name"
                {...register("brand_name")}
              />
            </div>
            <div>
              <label>Condition*</label>
              <input
                className="w-full py-3 px-5 my-2 mx-0 inline-block border border-solid border-slate-300 rounded box-border"
                type="text"
                name="condition"
                {...register("condition")}
              />
            </div>
            <div>
              <label>Maker*</label>
              <input
                className="w-full py-3 px-5 my-2 mx-0 inline-block border border-solid border-slate-300 rounded box-border"
                type="text"
                name="maker"
                {...register("maker")}
              />
            </div>
            <div>
              <label>Model*</label>
              <input
                className="w-full py-3 px-5 my-2 mx-0 inline-block border border-solid border-slate-300 rounded box-border"
                type="text"
                name="model"
                {...register("model")}
              />
            </div>
            <div>
              <label>Car Grade/Package</label>
              <input
                className="w-full py-3 px-5 my-2 mx-0 inline-block border border-solid border-slate-300 rounded box-border"
                type="text"
                name="grade_package"
                {...register("grade_package")}
              />
            </div>
            <div>
              <label>Model Year</label>
              <input
                className="w-full py-3 px-5 my-2 mx-0 inline-block border border-solid border-slate-300 rounded box-border"
                type="number"
                name="model_year"
                {...register("model_year")}
              />
            </div>
            <div>
              <label>Engine Number</label>
              <input
                className="w-full py-3 px-5 my-2 mx-0 inline-block border border-solid border-slate-300 rounded box-border"
                type="number"
                name="engine_number"
                {...register("engine_number")}
              />
            </div>
            <button className="w-full bg-orange-500 text-white py-3.5 px-5 my-2 mx-0 border-none rounded cursor-pointer hover:bg-orange-600">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Form;
