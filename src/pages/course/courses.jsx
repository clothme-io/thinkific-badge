import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import { useSnapshot } from "valtio";
import AppState from "../../state/valtioStore";
import { getAllCourses } from "../../networking/CourseService";
import yup from "yup";
import { CourseCard } from "./component/CourseCard";

export const Courses = () => {
  const snap = useSnapshot(AppState);
  const [courses, setCourses] = useState([]);
  const { isLoading, error, isError, data } = useQuery(
    ["getAllCourses", snap.account.gid],
    getAllCourses
  );

  useEffect(() => {
    console.log("Courses Data", data);
    if (data) {
      setCourses(data.courses.items);
      console.log("Courses Data", data.courses.items);
      console.log("Courses Data Courses", courses);
    }
  }, [data, courses]);

  if (isLoading) {
    return <h2>Loading ...</h2>;
  }

  return (
    <div className="w-full h-full pr-20 text-textSecondaryColor">
      <h2 className="pt-8 pb-12 text-3xl">All Courses</h2>
      <CourseCard />
      {/* {courses.map((item, index) => {
        return (
          <div key={item.id} className="w-full">
            <CourseCard
              image={item.course_card_image_url}
              name={item.name}
              description={item.description}
            />
          </div>
        );
      })} */}
    </div>
  );
};
