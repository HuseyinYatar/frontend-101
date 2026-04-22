import { Link, NavLink, Outlet } from "react-router";

export default function HelpLayout() {
  return (
    <div id="course-layout">
      <h1>Course Layout</h1>
      <Link to={"create"}>Create Course</Link>
      <Outlet />
    </div>
  );
}
