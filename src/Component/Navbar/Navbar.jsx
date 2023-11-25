import "./styles/mainStyle.scss";
import NavLogo from "./NavLogo";
import SearchBar from "./NavSearchbar";
import NavUser from "./NavUser";
const Navbar = () => {
  return (
    <main>
      <NavLogo />
      <SearchBar />
      <NavUser />
    </main>
  );
};

export default Navbar;
