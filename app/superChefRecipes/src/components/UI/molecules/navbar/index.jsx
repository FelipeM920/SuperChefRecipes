import "./style.scss";
import logo from "../../../../assets/superchefrecipes-logo.svg";
import ListIcon from '@mui/icons-material/List';

export default function Navbar() {
  return (
    <section className="navbar">
      <img src={logo} alt="Site Logo" className="siteLogo" />
      <ListIcon className="menuIcon" fontSize="large" color="primary"></ListIcon>
    </section>
  );
}
