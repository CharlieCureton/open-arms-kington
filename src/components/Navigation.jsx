import React from "react";
import { NavLink } from "react-router-dom";
import $ from "jquery";
function Navigation() {
    return (
        <div className="navigation-wrapper">
            <div className="navigation">
                <nav className="navbar navbar-expand navbar-dark bg-dark scroll-top">
                    <div className="container">
                        <NavLink className="navbar-brand" to="/">
                            <h1 className="nav-header">Open Arms <span>Kington</span></h1>
                        </NavLink>
                        <h2>Herefordshire</h2>
                        <div>
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item noselect" id="home">
                                    <NavLink className="nav-link" to="/">
                                        Home
                                        <span className="sr-only">(current)</span>
                                    </NavLink>
                                </li>
                                <li className="nav-item noselect" id="news">
                                    <NavLink className="nav-link" to="/news">
                                        News
                                    </NavLink>
                                </li>
                                <li className="nav-item noselect" id="contact">
                                    <NavLink className="nav-link" to="/contact">
                                        Contact
                                    </NavLink>
                                </li>
                                <li className="nav-item noselect" id="about">
                                    <NavLink onClick={showDropdown} className="nav-link" to="/about">
                                    About
                                    </NavLink>
                                    <div className="dropdown nav-dropdown hide">
                                        <ul className="sublist nav-sublist disabled" id="dropdown">
                                            <li className="nav-item noselect nav-sublist-el" id="our-story">
                                                <NavLink className="nav-link" to="/about/our-story">
                                                    Our Story
                                                </NavLink>
                                            </li>
                                            <li className="nav-item noselect nav-sublist-el" id="who-we-are">
                                                <NavLink className="nav-link" to="/about/who-we-are">
                                                    Who We Are
                                                </NavLink>
                                            </li>
                                            <li className="nav-item noselect nav-sublist-el" id="funding">
                                                <NavLink className="nav-link" to="/about/funding">
                                                    Funding
                                                </NavLink>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}
export default Navigation;
function showDropdown() {
    document.querySelector('.dropdown').classList.toggle("show");
    document.querySelector('.dropdown').classList.toggle("hide");
}
$(document).on('mouseup',function(e) 
{
    var container = $("#about");
    if (!container.is(e.target) && container.has(e.target).length === 0) 
    {
        document.querySelector('.dropdown').classList.remove("show");
        document.querySelector('.dropdown').classList.add("hide");
    }
});
var lastScrollTop = 0;
$(window).on('scroll',function(event){
    document.querySelector('.dropdown').classList.remove("show");
    document.querySelector('.dropdown').classList.add("hide");
   var st = $(this).scrollTop();
   if (st > lastScrollTop){
       $('.navbar').addClass('minimized');
       $('#container').addClass('minimized');
   } else if (st < lastScrollTop - 4) {
      $('.navbar').removeClass('minimized');
      $('#container').removeClass('minimized');
   }
   if($(window).scrollTop() + $(window).height() > $(document).height() - 10) {
    $('.navbar').addClass('minimized');
    $('#container').addClass('minimized');
    }
   lastScrollTop = st;
});