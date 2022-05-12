import { useState, useEffect, FunctionComponent } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import path from "path";

const NavItem: FunctionComponent<{
  active: string;
  setActive: Function;
  name: string;
  route: string;
}> = ({ active, setActive, name, route }) => {
  return active !== name ? (
    <Link href={route}>
      <a>
        <span
          className="mx-2 cursor-pointer hover:border-b-4 hover:text-green"
          onClick={() => setActive(name)}
        >
          {name}
        </span>
      </a>
    </Link>
  ) : null;
};

const Navbar = () => {
  const { pathname } = useRouter();

  const [active, setActive] = useState("");

  //later
  useEffect(() => {
    if (pathname === "/") setActive("About");
    else if (pathname === "/projects") setActive("Projects");
    else if (pathname === "/resume") setActive("Resume");
  }, [pathname]);

  return (
    <div className="my-3 flex items-center justify-between px-5 py-3">
      <span className="border-b-4 border-green text-xl font-bold md:text-2xl">
        {active}
      </span>

      <div className="text-base font-normal md:text-xl">
        <NavItem active={active} setActive={setActive} name="About" route="/" />
        <NavItem
          active={active}
          setActive={setActive}
          name="Resume"
          route="/resume"
        />
        <NavItem
          active={active}
          setActive={setActive}
          name="Projects"
          route="/projects"
        />
      </div>
    </div>
  );
};

export default Navbar;
