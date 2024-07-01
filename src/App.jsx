import React, { useEffect, useState } from "react";
import Index from "./Components/Navbar/Index.jsx";
import Header from "./Components/Header/Header.jsx";
import SearchBar from "./Components/SearchBar/SearchBar.jsx";
import JobPart from "./Components/JobCard/JobPart.jsx";
import JobData from "./Components/JobDamyData.js";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "./Components/Firebase.config.js";

const App = () => {
 
  return (
    <div>
      <Index />
      <Header />
      <SearchBar />
      {JobData.map((data) => (
        <JobPart key={data.id} {...data} />
      ))}
    </div>
  );
};

export default App;
