import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import { useSnapshot } from "valtio";
import AppState from "../../state/valtioStore";
import { getAllCourses } from "../../networking/CourseService";
import yup from "yup";

export const Courses = () => {
  const snap = useSnapshot(AppState);
  const [courses, setCourses] = useState(null);
  const { isLoading, error, isError, data } = useQuery(
    ["getAllCourses", snap.account.gid],
    getAllCourses
  );

  useEffect(() => {
    console.log("Courses Data", data);
    if (data) {
      setCourses(data.courses.items);
      console.log("Courses Data", data.courses.items);
    }
  }, [data]);

  return (
    <div div className="w-full h-full pr-20">
      <h2 className="pt-8 pb-12 text-3xl">All Courses</h2>
      <h2>{snap.session.refreshToken}</h2>
    </div>
  );
};
