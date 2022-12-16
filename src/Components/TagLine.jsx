import React from "react";
import "./TagLine.css";

export default function TagLine() {
  return (
    <>
      <div className="Navbar2">
        <nav class="Navbar_navWrapper__8xnEu">
          <div class="Navbar_navbar__66x_3">
            <div class="Navbar_logoSection__qS2Wi">
              <a href="/">
                <img
                  src="https://pbs.twimg.com/profile_images/1526991082017333253/hV94d0IB_400x400.jpg"
                  alt="Globus Logo"
                  class="Navbar_logoImage__yXbIh"
                />
              </a>
            </div>
            <div class="Navbar_menuSection__ebSqo">
              <ul class="Navbar_menu__66zmq">
                <li>
                  <a class="Navbar_menuItem__GjVIB" href="/#about">
                    About
                  </a>
                </li>
                <li>
                  <a class="Navbar_menuItem__GjVIB" href="/#token">
                    Token
                  </a>
                </li>
                <li>
                  <a class="Navbar_menuItem__GjVIB" href="/#team">
                    Team
                  </a>
                </li>
                <li>
                  <a class="Navbar_menuItem__GjVIB" href="/#roadmap">
                    Roadmap
                  </a>
                </li>
                <li>
                  <a class="Navbar_menuItem__GjVIB" href="/#contact">
                    Contact
                  </a>
                </li>
              </ul>
              <a class="Navbar_connectBtn__hH4UZ" id="connect-wallet-btn">
                Connect Wallet
              </a>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
