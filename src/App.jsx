import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import Loader from "./Components/Loader";
const AppLayout = lazy(() => import("./Layout/AppLayout"));
const HomePage = lazy(() => import("./pages/WebsiteDevPages/HomePage"));
const CaseStudy = lazy(() => import("./pages/WebsiteDevPages/CaseStudy"));
const WebDevelopment = lazy(() =>
  import("./pages/WebsiteDevPages/WebDevelopment")
);

const AppDevHome = lazy(() => import("./pages/AppDevPages/AppDevHome"));
const AppDevCaseStudy = lazy(() =>
  import("./pages/AppDevPages/AppDevCaseStudy")
);
const AppWork = lazy(() => import("./pages/AppDevPages/AppWork"));

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<Loader />}>
        <AppLayout />
      </Suspense>
    ),

    children: [
      // routes for web development service website
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/case-study",
        element: <CaseStudy />,
      },
      {
        path: "/work/:id",
        element: <WebDevelopment />,
      },

      // routes for app development service website
      {
        path: "/app-development",
        element: <AppDevHome />,
      },
      {
        path: "/app-development/case-study",
        element: <AppDevCaseStudy />,
      },
      {
        path: "/app-development/work/:id",
        element: <AppWork />,
      },
    ],
  },
]);

export default AppRouter;
