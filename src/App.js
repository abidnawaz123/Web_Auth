import { RouterProvider } from "react-router-dom";
import { customRoutes } from "./Routers";


function App() {
  
  return (
    <>
      <RouterProvider router={customRoutes} />
    </>
  );
}

export default App;
