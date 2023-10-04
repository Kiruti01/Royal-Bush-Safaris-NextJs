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
            <Link href="tours">Tours</Link>
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
              <li className="menu-item has-children">
                <a href="#">
                  Nairobi
                  <span className="dd-trigger">
                    <i className="far fa-angle-down" />
                  </span>
                </a>
                <ul className="sub-menu">
                  <li>
                    <Link href="nairobi-park">Nairobi National Park</Link>
                  </li>
                </ul>
              </li>
              <li className="menu-item has-children">
                <a href="#">
                  Offers
                  <span className="dd-trigger">
                    <i className="far fa-angle-down" />
                  </span>
                </a>
                <ul className="sub-menu">
                  <li>
                    <Link href="prideinn">3 DAYS 2 NIGHTS PRIDEINN HOTELS</Link>
                  </li>
                  <li>
                    <Link href="Mara">2DAYS MAASAI MARA</Link>
                  </li>
                  <li>
                    <Link href="neptune">
                      3 DAYS NEPTUNE MARA RIANTA FLYING PACKAGE
                    </Link>
                  </li>
                  <li>
              <Link href="southernpalms">
              3 DAYS 2 NIGHTS SOUTHERN PALMS BEACH RESORT, DIANI
              </Link>
            </li>
                </ul>
              </li>
              <li className="menu-item has-children">
                <a href="#">
                  Day trips
                  <span className="dd-trigger">
                    <i className="far fa-angle-down" />
                  </span>
                </a>
                <ul className="sub-menu">
                <li>
                <Link href="Kereita">KEREITA ZIPLINING ADVENTURE</Link>
              </li>
              <li>
                <Link href="nkasiri">NKASIRI ADVENTURE PARK</Link>
              </li>
              <li>
                <Link href="Ngare">𝐍𝐠𝐚𝐫𝐞 𝐍𝐝𝐚𝐫𝐞 𝐃𝐚𝐲 𝐓𝐫𝐢𝐩</Link>
              </li>
              
                </ul>
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
  
  const toggleSubMenu = (menu) => {
    setActiveMenu(activeMenu === menu ? "" : menu);
  };

  const isSubMenuActive = (menu) => {
    return activeMenu === menu ? { display: "block" } : { display: "none" };
  };

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
            Offers
            <span
              className="dd-trigger"
              onClick={() => activeMenuSet("Destination")}
            >
              <i className="far fa-angle-down" />
            </span>
          </a>
          <ul className="sub-menu" style={activeLi("Destination")}>           
            <li>
              <Link href="Mara">2DAYS MAASAI MARA</Link>
            </li>
            <li>
              <Link href="prideinn">3 DAYS 2 NIGHTS PRIDEINN HOTELS</Link>
            </li>
            <li>
              <Link href="neptune">
                3 DAYS NEPTUNE MARA RIANTA FLYING PACKAGE
              </Link>
            </li>
            <li>
              <Link href="southernpalms">
              3 DAYS 2 NIGHTS SOUTHERN PALMS BEACH RESORT, DIANI

              </Link>
            </li>
          </ul>
        </li>
        <li className="menu-item has-children">
          <a href="#">
            Nairobi
            <span
              className="dd-trigger"
              onClick={() => activeMenuSet("Nairobi")}
            >
              <i className="far fa-angle-down" />
            </span>
          </a>
          <ul className="sub-menu" style={activeLi("Nairobi")}>           
            <li>
              <Link href="nairobi-park">Nairobi National Park</Link>
            </li>
        
          </ul>
        </li>
        <li className="menu-item has-children">
          <a href="#">
            Day Trips
            <span
              className="dd-trigger"
              onClick={() => activeMenuSet("Day Trips")}
            >
              <i className="far fa-angle-down" />
            </span>
          </a>
          <ul className="sub-menu" style={activeLi("Day Trips")}>           
          <li>
                <Link href="Kereita">KEREITA ZIPLINING ADVENTURE</Link>
              </li>
              <li>
                <Link href="nkasiri">NKASIRI ADVENTURE PARK</Link>
              </li>
              <li>
                <Link href="Ngare">𝐍𝐠𝐚𝐫𝐞 𝐍𝐝𝐚𝐫𝐞 𝐃𝐚𝐲 𝐓𝐫𝐢𝐩</Link>
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
