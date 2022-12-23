import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import LogIn from "./Components/LogIn/LogIn";
import MemberList from "./Components/MemberList/MemberList";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LogIn></LogIn>,
    },
    {
      path: "/memberList",
      element: <MemberList></MemberList>,
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
