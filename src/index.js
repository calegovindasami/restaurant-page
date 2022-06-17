import loadNavigation from "./navigation";
import loadHome from "./home";
import loadMenu from "./menu";
import loadContact from "./contact";
import "./style.css";

const head = document.getElementById("navi");
head.appendChild(loadNavigation());

const mainBody = document.getElementById("content");
mainBody.appendChild(loadHome());

const btnHome = document.getElementById("home");
btnHome.onclick = () => {
  mainBody.innerHTML = "";
  mainBody.appendChild(loadHome());
};

const btnMenu = document.getElementById("menu");
btnMenu.onclick = () => {
  mainBody.innerHTML = "";
  mainBody.appendChild(loadMenu());
};

const btnContact = document.getElementById("contact");
btnContact.onclick = () => {
  mainBody.innerHTML = "";
  mainBody.appendChild(loadContact());
};
