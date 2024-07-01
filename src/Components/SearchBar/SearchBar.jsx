import React from "react";

const SearchBar = () => {
  return (
    <div className="flex gap-4 justify-center mt-10 px-10">
      <select className="max-w-64 py-3 pl-4 bg-black font-semibold rounded-md">
        <option value="" disabled hidden selected>
          Job Role
        </option>
        <option value="Frontend developer">Frontend developer</option>
        <option value="Backend developer">Backend developer</option>
        <option value="Android Developer">Android Developer</option>
        <option value="Develper Advocate">Develper Advocate</option>
      </select>
      <select className="w-64 py-3 pl-4 bg-black font-semibold rounded-md">
        <option value="" disabled hidden selected>
          Job Type
        </option>
        <option value="Freelance<">Freelance</option>
        <option value="Full Time">Full Time</option>
        <option value="Part Time">Part Time</option>
        <option value="Contract">Contract</option>
      </select>
      <select className="w-64 py-3 pl-4 bg-black font-semibold rounded-md">
        <option value="" disabled hidden selected>
          Location
        </option>
        <option value="Ios developer">Ios developer</option>
        <option value="Remote">Remote</option>
        <option value="In-Office">In-Office</option>
        <option value="Hybrid<">Hybrid</option>
      </select>
      <select className="w-64 py-3 pl-4 bg-black font-semibold rounded-md">
        <option value="" disabled hidden selected>
          Experience
        </option>
         <option value="Fresher">Fresher</option>
        <option value="Junior Level">Junior Level</option>
        <option value="Mid Level">Mid Level</option>
        <option value="Senior Level">Senior Level</option>
      </select>
      <button className="w-64 bg-blue-500 text-white font-bold py-3 rounded-md"> Search</button>
    </div>
  );
};

export default SearchBar;
