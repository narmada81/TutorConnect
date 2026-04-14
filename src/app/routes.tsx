import { createBrowserRouter } from "react-router";
import { Home } from "./pages/Home";
import { StudentLogin } from "./pages/StudentLogin";
import { TeacherLogin } from "./pages/TeacherLogin";
import { StudentDashboard } from "./pages/student/StudentDashboard";
import { BrowseTutors } from "./pages/student/BrowseTutors";
import { SessionHistory } from "./pages/student/SessionHistory";
import { PostDoubt } from "./pages/student/PostDoubt";
import { BookSession } from "./pages/student/BookSession";
import { TeacherDashboard } from "./pages/teacher/TeacherDashboard";
import { TeacherProfile } from "./pages/teacher/TeacherProfile";
import { TeacherEarnings } from "./pages/teacher/TeacherEarnings";
import { ManageBookings } from "./pages/teacher/ManageBookings";
import { UploadDemo } from "./pages/teacher/UploadDemo";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/student/login",
    Component: StudentLogin,
  },
  {
    path: "/teacher/login",
    Component: TeacherLogin,
  },
  {
    path: "/student/dashboard",
    Component: StudentDashboard,
  },
  {
    path: "/student/tutors",
    Component: BrowseTutors,
  },
  {
    path: "/student/sessions",
    Component: SessionHistory,
  },
  {
    path: "/student/post-doubt",
    Component: PostDoubt,
  },
  {
    path: "/student/book-session/:tutorId",
    Component: BookSession,
  },
  {
    path: "/teacher/dashboard",
    Component: TeacherDashboard,
  },
  {
    path: "/teacher/profile",
    Component: TeacherProfile,
  },
  {
    path: "/teacher/earnings",
    Component: TeacherEarnings,
  },
  {
    path: "/teacher/bookings",
    Component: ManageBookings,
  },
  {
    path: "/teacher/upload-demo",
    Component: UploadDemo,
  },
]);
