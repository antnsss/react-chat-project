import { Route, Routes } from "react-router-dom";
import ChatContainer from "../pages/ChatContainer";
import LoginContainer from "../pages/LoginContainer";
import PrivateRoute from "./private-route";
import RegisterContainer from "../pages/RegisterContainer";

const AppRoutes = () => {
  const navRoutes = [
    {
      path: "/",
      element: (
        <PrivateRoute>
          <ChatContainer />
        </PrivateRoute>
      ),
    },
    { path: "/login", element: <LoginContainer /> },
    { path: "/register", element: <RegisterContainer /> },
  ];
  return (
    <Routes>
      {navRoutes.map(({ path, element }, index) => (
        <Route key={index} path={path} element={element} />
      ))}
    </Routes>
  );
};

export default AppRoutes;
