import dayjs from "dayjs";
import React from "react";

const JobPart = (props) => {
  const Skills = ["JavaScript", "React", "Tailwind"];
  const date1 = dayjs(Date.now());
  const diffIndays = date1.diff(props.postedOn, "day");
  return (
    <div className="mx-40 mb-4 mt-10 ">
      <div className="flex justify-between items-center px-6 py-4 bg-zinc-200 rounded-md border border-black shadow-lg  hover:border-blue-500 hover:translate-y-1 hover:scale-105 duration-300 ">
        <div>
          <h1 className="text-black text-lg font-semibold">
            {props.title} - {props.company}
          </h1>
          <p className="text-black ">{props.type} . {props.experience} . {props.Location}</p>
          <div className="flex gap-2  items-center">
            {props.Skills.map((skill) => (
              <p key={skill} className="text-black py-1 px-2 rounded-md border border-black mt-2">
                {skill}
              </p>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-4">
          <p className="text-black text-sm">posted {diffIndays} days ago</p>
          <a href={props.Job_link}>
          <button className="text-blue-500 border border-blue-500 px-10 py-2 rounded-md">Apply</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default JobPart;
