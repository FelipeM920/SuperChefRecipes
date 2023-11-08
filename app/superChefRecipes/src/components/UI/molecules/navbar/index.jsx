import "./style.scss";
import logo from "../../../../assets/superchefrecipes-logo.svg";
import ListIcon from '@mui/icons-material/List';

export default function Navbar() {
  return (
    <section className="navbar">
      <img src={logo} alt="Site Logo" className="siteLogo" />
      <span className="text">Taste the World, One Recipe at a Time!</span>
      <ListIcon className="menuIcon" fontSize="large" color="primary"></ListIcon>
    </section>
  );
}
