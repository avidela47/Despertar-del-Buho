import React from "react";
import { ReactNavbar } from "overlay-navbar";
import logo from "../../../images/logo.png";

import {MdAccountCircle} from "react-icons/md";
import {MdSearch} from "react-icons/md";
import {MdAddShoppingCart} from "react-icons/md";

const options = {
  burgerColorHover: "#eb4034",
  navColor1: "rgba(229, 228, 228)",
  logo,
  logoWidth: "12vmax",
  logoHeight:	"9vmax",
  logoHoverSize: "10px",
  logoHoverColor: "#eb4034",
  link1Text: "Inicio",
  link2Text: "Productos",
  link3Text: "Contacto",
  link4Text: "Nosotros", 
  link1Url: "/",
  link2Url: "/products",
  link3Url: "/contact",
  link4Url: "/about",
  link1Size: "1.3vmax",
  link1Color: "rgba(35, 35, 35,0.8)",
  nav1justifyContent: "flex-end",
  nav2justifyContent: "flex-end",
  nav3justifyContent: "flex-start",
  nav4justifyContent: "flex-start",
  link1ColorHover: "#eb4034",
  link1Margin: "1vmax",
  profileIconUrl: "/login",
  profileIcon:true,
  profileIconColor:"rgba(35, 35, 35,0.8)",
  ProfileIconElement:MdAccountCircle,
  searchIcon:true,
  searchIconColor: "rgba(35, 35, 35,0.8)",
  SearchIconElement:MdSearch,
  cartIcon:true,
  cartIconColor: "rgba(35, 35, 35,0.8)",
  CartIconElement:MdAddShoppingCart,
  profileIconColorHover: "#eb4034",
  searchIconColorHover: "#eb4034",
  cartIconColorHover: "#eb4034",
  cartIconMargin: "1vmax", 
};

const Header = () => {
  return     <ReactNavbar {...options} />

};

export default Header;
