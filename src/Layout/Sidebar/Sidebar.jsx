import React, { useState } from "react";
import { Link, Outlet, NavLink } from "react-router-dom";
import "./Sidebar_style.css";
import { sideMenu } from "../menuconfig/menu_config";

const SideNavBar = () => {
    const [isActive, setIsActive] = useState(false);

    function handleClick() {
        setIsActive(!isActive);
    }

    return (
        <>
            <div className="sidenav-container">
                <div className="header">
                    <div className="toggle" onClick={handleClick}>
                        <span className="icon">
                            {isActive ? (
                                <i className="fa fa-times"></i>
                            ) : (
                                <i className="fa fa-bars"></i>
                            )}
                        </span>
                    </div>
                    <h3 className="mb-0 project-name text-center">
                        <span className="text-warning">F</span>lat{" "}
                        <span className="text-warning">S</span>afety
                    </h3>
                </div>

                <nav className={isActive ? "active" : ""}>
                    <ul>
                        <li>
                            <a className="toggle" onClick={handleClick}>
                                <span className="icon">
                                    <i className="fa fa-bars"></i>
                                </span>
                                <span className="project-name title">
                                    <span className="text-warning">F</span>lat{" "}
                                    <span className="text-warning">S</span>afety
                                </span>
                            </a>
                        </li>
                        {sideMenu.map((item, index) => {
                            return (
                                <li key={`${item.label}-${index}`}>
                                    <NavLink
                                        to={item.to}
                                        className={(navData) =>
                                            navData.isActive ? "menu-active" : "none"
                                        }
                                        onClick={handleClick}
                                    >
                                        <span className="icon">
                                            <i className={item.Icon}></i>
                                        </span>
                                        <span className="title">{item.label}</span>
                                    </NavLink>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
            </div>
            {/* <section for content to display for that specific route */}
            <section
                className={`home-section pt-2 ${isActive ? "content-active" : ""}`}
            >
                <div className="content" style={{marginLeft:'6px'}}>
                    <Outlet />
                </div>
            </section>
        </>
    );
};

export default SideNavBar;