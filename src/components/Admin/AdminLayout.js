import { Outlet } from "react-router-dom";

export default function AdminLayout(){
    return (
        <>
            <h1>Admin Page</h1>
            <Outlet />
        </>
    )
}