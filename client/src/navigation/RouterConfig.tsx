import { useRoutes } from "react-router-dom";
import { routes } from "./Constants";

function RouterConfig() {
  let element = useRoutes(routes);
  return element;
}

export default RouterConfig;
