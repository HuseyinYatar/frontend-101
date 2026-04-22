import React from "react";
import { useRouteLoaderData } from "react-router";

function CourseDetailEditPage() {
  const data = useRouteLoaderData("course-detail");
  return <div>CourseDetailEditPage {data.title}</div>;
}

export default CourseDetailEditPage;
