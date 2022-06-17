// layouts
import Default from "../templates/layouts/Default";

// pages
import Contact from "../templates/pages/Contact";
import History from "../templates/pages/History";

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
];
