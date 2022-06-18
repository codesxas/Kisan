// layouts
import Default from "../templates/layouts/Default";
import MobileScreen from "../templates/layouts/MobileScreen";

// pages
import Contact from "../templates/pages/Contact";
import History from "../templates/pages/History";
import NotFound from "../templates/pages/NotFound";

export const routes = [
  // These are the same as the props you provide to <Route>
  {
    path: "/",
    element: <Default />,
    children: [
      { path: "", element: <Contact /> },
      { path: "history", element: <History /> },
    ],
  },

  {
    path: "/mobile",
    element: <MobileScreen />,
    children: [
      { path: "contact/:id", element: <Contact /> },
      { path: "history/:id", element: <History /> },
    ],
  },

  // Not found routes work as you'd expect
  { path: "*", element: <NotFound /> },
];
