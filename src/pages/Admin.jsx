import React, { useEffect, useState } from "react";
import "../styles/admin.css";

function Admin() {
  const [isSidebarHidden, setSidebarHidden] = useState(false);
  const [isSearchFormVisible, setSearchFormVisible] = useState(false);
  const [isDarkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const allSideMenu = document.querySelectorAll(
      "#sidebar .side-menu.top li a"
    );

    allSideMenu.forEach((item) => {
      const li = item.parentElement;

      item.addEventListener("click", function () {
        allSideMenu.forEach((i) => {
          i.parentElement.classList.remove("active");
        });
        li.classList.add("active");
      });
    });

    const menuBar = document.querySelector("#content nav .bx.bx-menu");
    const sidebar = document.getElementById("sidebar");

    menuBar.addEventListener("click", function () {
      setSidebarHidden((prevState) => !prevState);
    });

    const searchButton = document.querySelector(
      "#content nav form .form-input button"
    );
    const searchButtonIcon = document.querySelector(
      "#content nav form .form-input button .bx"
    );
    const searchForm = document.querySelector("#content nav form");

    searchButton.addEventListener("click", function (e) {
      if (window.innerWidth < 576) {
        e.preventDefault();
        setSearchFormVisible((prevState) => !prevState);
      }
    });

    if (window.innerWidth < 768) {
      setSidebarHidden(true);
    } else if (window.innerWidth > 576) {
      setSearchFormVisible(false);
    }

    window.addEventListener("resize", function () {
      if (window.innerWidth > 576) {
        setSearchFormVisible(false);
      }
    });
  }, []);

  useEffect(() => {
    document.addEventListener("DOMContentLoaded", () => {
      const switchMode = document.getElementById("switch-mode");

      switchMode.addEventListener("change", function () {
        setDarkMode(this.checked);
      });
    });
  }, []);

  return (
    <>
      {/* SIDEBAR */}
      <section id="sidebar" className={isSidebarHidden ? "hide" : ""}>
        <a href="#" className="brand">
          <i className="bx bxs-smile"></i>
          <span className="text">AdminHub</span>
        </a>
        <ul className="side-menu top">
          <li className="active">
            <a href="#">
              <i className="bx bxs-dashboard"></i>
              <span className="text">Dashboard</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="bx bxs-shopping-bag-alt"></i>
              <span className="text">My Store</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="bx bxs-doughnut-chart"></i>
              <span className="text">Analytics</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="bx bxs-message-dots"></i>
              <span className="text">Message</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="bx bxs-group"></i>
              <span className="text">Team</span>
            </a>
          </li>
        </ul>
        <ul className="side-menu">
          <li>
            <a href="#">
              <i className="bx bxs-cog"></i>
              <span className="text">Settings</span>
            </a>
          </li>
          <li>
            <a href="#" className="logout">
              <i className="bx bxs-log-out-circle"></i>
              <span className="text">Logout</span>
            </a>
          </li>
        </ul>
      </section>
      {/* SIDEBAR */}

      {/* CONTENT */}
      <section id="content">
        {/* NAVBAR */}
        <nav>
          <i
            className="bx bx-menu"
            onClick={() => setSidebarHidden((prevState) => !prevState)}
          ></i>
          <a href="#" className="nav-link">
            Categories
          </a>
          <form action="#">
            <div className={`form-input ${isSearchFormVisible ? "show" : ""}`}>
              <input type="search" placeholder="Search..." />
              <button type="submit" className="search-btn">
                <i
                  className={isSearchFormVisible ? "bx bx-x" : "bx bx-search"}
                ></i>
              </button>
            </div>
          </form>
          <input type="checkbox" id="switch-mode" hidden checked={isDarkMode} />
          <label htmlFor="switch-mode" className="switch-mode"></label>
          <a href="#" className="notification">
            <i className="bx bxs-bell"></i>
            <span className="num">8</span>
          </a>
          <a href="#" className="profile">
            <img src="img/people.png" alt="Profile" />
          </a>
        </nav>
        {/* NAVBAR */}

        {/* MAIN */}
        <main>
          <div className="head-title">
            <div className="left">
              <h1>Dashboard</h1>
              <ul className="breadcrumb">
                <li>
                  <a href="#">Dashboard</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>
                </li>
                <li>
                  <a className="active" href="#">
                    Home
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <ul className="box-info">
            <li>
              <i className="bx bxs-calendar-check"></i>
              <span className="text">
                <h3>1020</h3>
                <p>New Order</p>
              </span>
            </li>
            <li>
              <i className="bx bxs-group"></i>
              <span className="text">
                <h3>2834</h3>
                <p>Visitors</p>
              </span>
            </li>
            <li>
              <i className="bx bxs-dollar-circle"></i>
              <span className="text">
                <h3>$2543</h3>
                <p>Total Sales</p>
              </span>
            </li>
          </ul>

        </main>
      
      </section>
    
    </>
  );
}

export default Admin;
