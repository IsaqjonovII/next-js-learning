import Link from "next/link";
import c from "../styles/Navbar.module.css";

const Navbar = () => {
  const links = ["home", "about", "profile"];
  return (
    <div className={c.navbar}>
      {links.map((route) => (
        <Link className={c.link} key={route} href={"/" + route}>
          {route}
        </Link>
      ))}
    </div>
  );
};

export default Navbar;
