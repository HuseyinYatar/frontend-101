// / => <Home />
// /about => <About />
// /courses => <Courses />

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router";

import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import CoursesPage, { coursesLoader } from "./pages/course/Courses";
import MainLayout from "./layouts/MainLayout";
import ContactPage from "./pages/help/ContactPage";
import FaqPage from "./pages/help/FaqPage";
import CourseLayout from "./layouts/CourseLayout";
import HelpLayout from "./layouts/HelpLayout";
import CourseDetailEditPage from "./pages/course/CourseDetailEditPage";
import {
  CourseDetailPage,
  courseDetailLoader,
} from "./pages/course/CourseDetailPage";
import {
  createCourse,
  CourseCreatePage,
} from "./pages/course/CourseCreatePage";
// localhost:3000/
// localhost:3000/home
// localhost:3000/about
// localhost:3000/courses

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "home", element: <HomePage /> },
      { path: "about", element: <AboutPage /> },
      {
        path: "/courses",
        element: <CourseLayout />,
        children: [
          { index: true, element: <CoursesPage />, loader: coursesLoader },
          {
            path: "create",
            element: <CourseCreatePage />,
            action: createCourse,
          },

          {
            id: "course-detail",
            path: ":courseid",
            loader: courseDetailLoader,
            children: [
              {
                index: true,
                element: <CourseDetailPage />,
              },
              { path: "edit", element: <CourseDetailEditPage /> }

            ],
          },
        ],
      },
      ,
      {
        path: "help",
        element: <HelpLayout />,
        children: [
          { path: "contact", element: <ContactPage /> },
          { path: "faq", element: <FaqPage /> },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
