import { useRouteLoaderData } from "react-router";

export function CourseDetailPage() {
  const course = useRouteLoaderData("course-detail");
  return <div>CourseDetailPage+ {course.title}</div>;
}

export async function courseDetailLoader({ params }) {
  const { courseid } = params;
  const req = await fetch("http://localhost:5000/courses/" + courseid);

  return req.json();
}
