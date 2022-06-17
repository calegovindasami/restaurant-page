import one from "./menuItems/1.jpg";
import two from "./menuItems/2.jpg";
import three from "./menuItems/3.jpg";
import four from "./menuItems/4.jpg";
import five from "./menuItems/5.jpg";
import six from "./menuItems/6.jpeg";
function loadMenu() {
  const menuDiv = document.createElement("div");
  menuDiv.classList.add("menuDiv");

  const menuFactory = (header, srcs) => {
    const menuItem = document.createElement("div");
    menuItem.classList.add("menu-item");
    const image = new Image();
    image.src = srcs;
    image.classList.add("menu-image");
    const headerItem = document.createElement("h2");
    headerItem.classList.add("menu-item-header");
    headerItem.appendChild(document.createTextNode(header));
    const textItem = document.createElement("p");
    textItem.appendChild(
      document.createTextNode(
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus numquam dignissimos, repudiandae illo natus deserunt quod hic at nulla dolorem."
      )
    );

    textItem.classList.add("menu-text");
    menuItem.appendChild(headerItem);
    menuItem.appendChild(image);
    menuItem.appendChild(textItem);
    return { menuItem };
  };

  const itemOne = menuFactory("Belgian", one);
  const itemTwo = menuFactory("Original", two);
  const itemThree = menuFactory("Chocolate", three);
  const itemFour = menuFactory("Dark Chocolate", four);
  const itemFive = menuFactory("Waffles & Chicken", five);
  const itemSix = menuFactory("Waffle Cake", six);

  const items = [itemOne, itemTwo, itemThree, itemFour, itemFive, itemSix];

  items.forEach((item) => menuDiv.appendChild(item.menuItem));

  return menuDiv;
}

export default loadMenu;
