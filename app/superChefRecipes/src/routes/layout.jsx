import SearchHeader from "../components/UI/organisms/search-header";
import Footer from "../components/UI/organisms/footer";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <SearchHeader />
      <Outlet />
      <Footer />
    </>
  );
}
