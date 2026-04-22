import { useLoaderData } from "react-router";
import "../course.css";
export default function CoursesPage() {
  const courses = useLoaderData();
  return (
    <>
      <div id="courses">
        <h1>Courses</h1>
        {/* Wrap the cards in a container if they aren't already */}
        <div className="courses-grid">
          {courses.map((course, index) => (
            <div className="card" key={course.id || index}>
              <img
                src={`http://localhost:5000/images/${course.image}`}
                alt={course.title}
              />
              <div>
                <h4>{course.title}</h4>
                <p>{course.description}</p>
                <a href={`/courses/${course.id}`}>View Details</a>
                <a href={`/courses/${course.id}/edit`}>Edit</a>
                <a href={`/courses/${course.id}/delete`}>Delete</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export async function coursesLoader() {
  const req = await fetch("http://localhost:5000/courses");
  return req.json();
}
