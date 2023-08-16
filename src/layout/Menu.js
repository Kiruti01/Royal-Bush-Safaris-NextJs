import Link from "next/link";
import { Fragment, useState } from "react";
import SearchModal from "./SearchModal";

const Menu = () => {
  return (
    <Fragment>
      <DeskTopMenu />
      <MobileMenu />
    </Fragment>
  );
};
export default Menu;

const DeskTopMenu = () => {
  const [searchModal, setSearchModal] = useState(false);
  return (
    <Fragment>
      <SearchModal
        show={searchModal}
        handleClose={() => setSearchModal(false)}
      />
      <nav className="main-menu d-none d-xl-block">
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="tour">Tours</Link>
          </li>
          <li className="menu-item has-children">
            <a href="#">
              Destination
              <span className="dd-trigger">
                <i className="far fa-angle-down" />
              </span>
            </a>
            <ul className="sub-menu">
              <li>
                <Link href="destination">Destinations</Link>
              </li>
              <li>
                <Link href="nairobi-park">
                  NAIROBI NATIONAL PARK & GIRAFFE PARK
                </Link>
              </li>
              <li>
                <Link href="Kereita">KEREITA ZIPLINING ADVENTURE</Link>
              </li>
              <li>
                <Link href="nkasiri">NKASIRI ADVENTURE PARK</Link>
              </li>
              <li>
                <Link href="mara">2DAYS MAASAI MARA</Link>
              </li>
            </ul>
          </li>

          <li className="menu-item search-item">
            <div
              className="search-btn"
              data-bs-toggle="modal"
              data-bs-target="#search-modal"
              onClick={() => setSearchModal(true)}
            >
              <i className="far fa-search" />
            </div>
          </li>
        </ul>
      </nav>
    </Fragment>
  );
};

const MobileMenu = () => {
  const [activeMenu, setActiveMenu] = useState("");
  const activeMenuSet = (value) =>
      setActiveMenu(activeMenu === value ? "" : value),
    activeLi = (value) =>
      value === activeMenu ? { display: "block" } : { display: "none" };
  return (
    <nav className="main-menu d-block d-xl-none">
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="tours">Tours</Link>
        </li>
   
        <li className="menu-item has-children">
          <a href="#">
            Destination
            <span
              className="dd-trigger"
              onClick={() => activeMenuSet("Destination")}
            >
              <i className="far fa-angle-down" />
            </span>
          </a>
          <ul className="sub-menu" style={activeLi("Destination")}>
            <li>
              <Link href="destination">Destination</Link>
            </li>
            <li>
                <Link href="nairobi-park">
                  NAIROBI NATIONAL PARK & GIRAFFE PARK
                </Link>
              </li>
              <li>
                <Link href="Kereita">KEREITA ZIPLINING ADVENTURE</Link>
              </li>
              <li>
                <Link href="nkasiri">NKASIRI ADVENTURE PARK</Link>
              </li>
              <li>
                <Link href="mara">2DAYS MAASAI MARA</Link>
              </li>
          </ul>
        </li>
        
        <li className="menu-item search-item">
          <div
            className="search-btn"
            data-bs-toggle="modal"
            data-bs-target="#search-modal"
          >
            <i className="far fa-search" />
          </div>
        </li>
      </ul>
    </nav>
  );
};
