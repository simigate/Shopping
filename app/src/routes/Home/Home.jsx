import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import Directories from "../../components/Directories/Directories-component";

const Home = () => {
    return (
        <Fragment>
            <Directories />
            <Outlet />
        </Fragment>
    )
}
export default Home