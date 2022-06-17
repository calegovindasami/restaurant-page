function loadNavigation() {
  const navbar = document.createElement("nav");
  const navList = document.createElement("ul");

  const homeHeading = document.createElement("li");
  homeHeading.appendChild(document.createTextNode("Home"));
  homeHeading.setAttribute("id", "home");

  const menuHeading = document.createElement("li");
  menuHeading.appendChild(document.createTextNode("Menu"));
  menuHeading.setAttribute("id", "menu");

  const contactHeading = document.createElement("li");
  contactHeading.appendChild(document.createTextNode("Contact Us"));
  contactHeading.setAttribute("id", "contact");

  navList.appendChild(homeHeading);
  navList.appendChild(menuHeading);
  navList.appendChild(contactHeading);

  navbar.appendChild(navList);

  console.log("Navigation loaded.");
  return navbar;
}

export default loadNavigation;
