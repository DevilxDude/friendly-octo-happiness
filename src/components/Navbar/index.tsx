import { useState } from "react";
import classes from "./styles.module.css";

const data = [
  { label: "All sizes" },
  { label: "Facebook" },
  { label: "Google display network" },
  { label: "LinkedIn" },
  { label: "Others" },
];

const Navbar = () => {
  const [active, setActive] = useState("All sizes");
  return (
    <nav className={classes.navbar}>
      <div className={classes.navbarMain}>
        {data.map((item) => (
          <a
            className={classes.link}
            data-active={item.label === active || undefined}
            href="#null"
            key={item.label}
            onClick={(event) => {
              event.preventDefault();
              setActive(item.label);
            }}
          >
            <span>{item.label}</span>
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
