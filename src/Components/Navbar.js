import React from "react";
import Logo from "./logo.png";
import "./index.css";

class Navbar extends React.Component {
  render() {
    return (
      <div>
        <nav className="navbar fixed-top shadow-sm bg-white navbar-expand-lg">
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarTogglerDemo03"
            aria-controls="navbarTogglerDemo03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div className="col-sm-2">
            <a className="" href="#">
              <img
                className="w-100"
                style={{ height: "60px", width: "20px", padding: "0px" }}
                src={Logo}
                alt="logo"
              />
            </a>
          </div>

          <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
              <li class="nav-item active">
                <a class="nav-link" href="#">
                  Home <span class="sr-only">(current)</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/cart">
                  Cart
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link disabled" href="#">
                  Disabled
                </a>
              </li>
            </ul>
            <form class="form-inline my-2 my-lg-0">
              <input
                class="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                class="btn btn-outline-success my-2 my-sm-0"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
        </nav>

        <div>
          <nav className="navbar  shadow-sm bg-white navbar-expand-lg">
            <a class="navbar-brand" href="#">
              Offers huh
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
              <ul class="navbar-nav">
                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdownMenuLink"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false">
                    Fashion
                  </a>
                  <div
                    class="dropdown-menu"
                    aria-labelledby="navbarDropdownMenuLink"
                  >
                    <a class="dropdown-item" href="/womens">
                      Women
                    </a>
                    <a class="dropdown-item" href="/mens">
                      Men
                    </a>
                    <a class="dropdown-item" href="/kids">
                      Kids
                    </a>
                  </div>
                </li>

                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdownMenuLink"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Home Appliances
                  </a>
                  <div
                    class="dropdown-menu"
                    aria-labelledby="navbarDropdownMenuLink"
                  >
                    <a class="dropdown-item" href="/television">
                    Television
                    </a>
                    <a class="dropdown-item" href="/referigerator">
                    Referigerator
                    </a>
                    <a class="dropdown-item" href="/washingmachine">
                    Washing Machine
                    </a>
                  </div>
                </li>

                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdownMenuLink"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Electronics
                  </a>
                  <div
                    class="dropdown-menu"
                    aria-labelledby="navbarDropdownMenuLink"
                  >
                    <a class="dropdown-item" href="/mobiles">
                      Mobiles
                    </a>
                    <a class="dropdown-item" href="/cameras">
                      Cameras
                    </a>
                    <a class="dropdown-item" href="/laptops">
                      Laptops
                    </a>
                  </div>
                </li>

                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdownMenuLink"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Sports
                  </a>
                  <div
                    class="dropdown-menu"
                    aria-labelledby="navbarDropdownMenuLink"
                  >
                    <a class="dropdown-item" href="/cricket">
                      Cricket
                    </a>
                    <a class="dropdown-item" href="/football">
                      Football
                    </a>
                    <a class="dropdown-item" href="/badminton">
                      Badminton
                    </a>
                  </div>
                </li>

                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdownMenuLink"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Men Accessories
                  </a>
                  <div
                    class="dropdown-menu"
                    aria-labelledby="navbarDropdownMenuLink"
                  >
                    <a class="dropdown-item" href="/mwatches">
                      Men Watches
                    </a>
                    <a class="dropdown-item" href="/wallets">
                      Wallets
                    </a>
                    <a class="dropdown-item" href="/mfragrances">
                      Men Fragrances
                    </a>
                  </div>
                </li>

                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdownMenuLink"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Women Accessories
                  </a>
                  <div
                    class="dropdown-menu"
                    aria-labelledby="navbarDropdownMenuLink"
                  >
                    <a class="dropdown-item" href="/wwatches">
                      Women Watches
                    </a>
                    <a class="dropdown-item" href="/beautyproducts">
                    Beauty Products
                    </a>
                    <a class="dropdown-item" href="/jwellery">
                    Jwellery
                    </a>
                    <a class="dropdown-item" href="/wfragrances">
                    Women Fragrances
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}
export default Navbar;
