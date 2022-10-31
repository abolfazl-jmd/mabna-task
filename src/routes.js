import Order from "./Pages/Order";
import Profile from "./Pages/Profile";

const routes = [
  { id: 1, path: "/", element: <Profile /> },
  { id: 2, path: "/submit-order", element: <Order /> },
];

export default routes;
