import { Outlet } from "react-router-dom";
import { useAuth } from "../../context";
import { Navigate } from "react-router-dom"

export default function AdminLayout() {
  const { user } = useAuth();
  if (user.status !== true) {
    return <Navigate to="/login" />;
  }
  return (
    <>
      <h1>Admin Page</h1>
      <Outlet />
    </>
  );
}
