import React, { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import axios from "axios";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import { useNavigate, useParams } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const { courseId } = useParams();
  const [course, setCourse] = useState(null);

  const data = [
    { name: "Jan", sales: 400 },
    { name: "Feb", sales: 300 },
    { name: "Mar", sales: 500 },
    { name: "Apr", sales: 200 },
  ];

  const getcourse = async () => {
    try {
      const res = await axios.get(
        `http://localhost:8000/api/course/getcourseID/${courseId}`
      );

      if (res.status === 200) {
        setCourse(res.data.course);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (courseId) getcourse();
  }, [courseId]);

  return (
    <div className="flex flex-col p-4 md:p-10 gap-6 md:gap-10">
      
      {/* 🔹 Top Section */}
      <div className="flex flex-col gap-4">

        {/* Back Button */}
        <FaArrowLeft
          onClick={() => navigate("/home")}
          size={22}
          className="cursor-pointer"
        />

        {/* Profile Card */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-4 shadow-xl rounded-xl p-4 md:p-6 w-full">

          {/* Profile Image */}
          <img
            src={course?.thumbnail || ""}
            className="h-24 w-24 md:h-30 md:w-30 rounded-full bg-black object-cover"
            alt="profile"
          />

          {/* Profile Info */}
          <div className="flex flex-col text-center md:text-left gap-2 w-full">

            <h1 className="text-xl md:text-2xl font-bold">
              Welcome, Rishabh Rawat
            </h1>

            <h1 className="text-lg md:text-xl font-bold flex flex-col md:flex-row gap-1 md:gap-2 items-center md:items-start justify-center md:justify-start">
              Total Earning:
              <span className="font-medium">
                {course?.earning || "0"}$
              </span>
            </h1>

            <h5 className="text-sm md:text-base text-gray-600">
              CS Student
            </h5>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 mt-2 w-full md:w-auto">

              <button
                onClick={() => navigate("/createCourse")}
                className="w-full sm:w-40 h-10 bg-black text-white rounded"
              >
                Create Course
              </button>

              <button
                onClick={() => navigate("/courses")}
                className="w-full sm:w-40 h-10 bg-black text-white rounded"
              >
                View Courses
              </button>

            </div>
          </div>
        </div>
      </div>

      {/* 🔹 Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10">

        {/* Chart 1 */}
        <div className="w-full h-[250px] md:h-[300px] shadow-lg rounded-xl p-3 md:p-4">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="sales" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Chart 2 */}
        <div className="w-full h-[250px] md:h-[300px] shadow-lg rounded-xl p-3 md:p-4">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="sales" />
            </BarChart>
          </ResponsiveContainer>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;
