import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { FaArrowLeft, FaPlus, FaEdit } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const CreateLecture = () => {
  const navigate = useNavigate();
  const location=useLocation();
  const courseid=location?.state;

  useEffect(()=>{
    console.log("the course id is",courseid);
  })
  const [lectureTitle, setLectureTitle] = useState("");
  const [cid,Setcid]=useState(courseid);
  const [lectures, setLectures] = useState([
    { id: 1, title: "Introduction to Course" },
    { id: 2, title: "Setup & Installation" },
    { id: 3, title: "Basics Fundamentals" },
    { id: 4, title: "Project Implementation" },
    { id: 5, title: "Final Deployment" },
  ]);

  const handleSubmit = async(e) => {
    try {
     e.preventDefault();
     const res=await axios.post(`http://localhost:8000/api/course/lectureAdd/${courseid}`,  {
        lecturetitle: lectureTitle,
      },{
        withCredentials:true
     })

     if(res.status===200){
        console.log("the lecture data",res.data);
        toast.success("lecture is created successfully");
     }
    } catch (error) {
        toast.error("lecture creation failed");
        
    }
  };

  return (
    <div className="flex justify-center items-start min-h-screen w-full bg-gray-100">
      <div className="w-[90%] max-w-xl bg-white shadow-xl rounded-xl flex flex-col mt-20 p-6">
        
        <div className="flex items-center gap-6 mb-6">
          <FaArrowLeft
            onClick={() => navigate("/dash")}
            className="cursor-pointer"
          />
          <h1 className="text-2xl font-bold">Create Lecture</h1>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col">
            <label className="font-medium text-black mb-1">
              Lecture Title
            </label>
            <input
              type="text"
              value={lectureTitle}
              onChange={(e) => setLectureTitle(e.target.value)}
              className="w-full h-10 border-2 rounded pl-3 outline-none"
            />
          </div>

          <div className="flex gap-4 mt-2">
            <button
              type="button"
              onClick={() => navigate("/dash")}
              className="flex rounded font-bold bg-gray-400 items-center justify-center gap-2 w-40 h-10 text-black"
            >
              <FaArrowLeft />
              Back to Course
            </button>

            <button
              type="submit"
              className="flex rounded items-center justify-center gap-2 w-40 h-10 bg-black text-white hover:bg-white hover:text-black border-2"
            >
              <FaPlus />
              Create Lecture
            </button>
          </div>
        </form>

        <div className="mt-8">
          <h2 className="text-lg font-semibold mb-3">
            Lecture List
          </h2>

          <div className="max-h-60 overflow-y-auto  rounded p-3 flex flex-col gap-2">
            {lectures.map((lec, index) => (
              <div
                key={lec.id}
                className="flex justify-between items-center bg-gray-100 p-2 rounded"
              >
                <span className="font-medium">
                  {index + 1}. {lec.title}
                </span>

                <FaEdit className="cursor-pointer text-gray-700 hover:text-black" />
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default CreateLecture;
