import Header from "../components/UI/organisms/header";
import Footer from "../components/UI/organisms/footer";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
