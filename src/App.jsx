import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import Loader from "./Components/Loader";
const AppLayout = lazy(() => import("./Layout/AppLayout"));
const HomePage = lazy(() => import("./pages/WebsiteDevPages/HomePage"));
const CaseStudy = lazy(() => import("./pages/WebsiteDevPages/CaseStudy"));
const WebDevelopment = lazy(() =>
  import("./pages/WebsiteDevPages/WebDevelopment")
);
const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<Loader />}>
        <AppLayout />
      </Suspense>
    ),

    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/case-study",
        element: <CaseStudy />,
      },
      {
        path: "/web-development",
        element: <WebDevelopment />,
      },
    ],
  },
]);

export default AppRouter;
