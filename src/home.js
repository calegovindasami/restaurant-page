import homeIcon from "./homeWaffle.jpg";

function loadHome() {
  const homeDiv = document.createElement("div");
  homeDiv.classList.add("homeDiv");
  const homeHeader = document.createElement("h1");
  homeHeader.appendChild(
    document.createTextNode("Welcome to House of Waffles!")
  );

  const leftHead = document.createElement("h2");
  leftHead.appendChild(document.createTextNode("Serving waffles since 1990."));

  const rightHead = document.createElement("h2");
  rightHead.appendChild(document.createTextNode("Come on over."));

  const leftPara = document.createElement("p");
  leftPara.appendChild(
    document.createTextNode(
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus numquam dignissimos, repudiandae illo natus deserunt quod hic at nulla dolorem, non maxime excepturi minima aspernatur repellat incidunt, laudantium soluta ipsum animi optio molestias reiciendis. Vero odio officia modi adipisci ab similique, repudiandae incidunt ratione laborum illo cupiditate dolorum iure voluptas."
    )
  );

  const leftDiv = document.createElement("div");
  leftDiv.appendChild(leftHead);
  leftDiv.appendChild(leftPara);
  leftDiv.classList.add("left-div");

  const homeImage = new Image();
  homeImage.src = homeIcon;
  homeImage.classList.add("home-logo");

  const rightPara = document.createElement("p");
  rightPara.appendChild(
    document.createTextNode(
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus numquam dignissimos, repudiandae illo natus deserunt quod hic at nulla dolorem, non maxime excepturi minima aspernatur repellat incidunt, laudantium soluta ipsum animi optio molestias reiciendis. Vero odio officia modi adipisci ab similique, repudiandae incidunt ratione laborum illo cupiditate dolorum iure voluptas."
    )
  );

  const rightDiv = document.createElement("div");
  rightDiv.appendChild(rightHead);
  rightDiv.appendChild(rightPara);
  rightDiv.classList.add("left-div");

  const imageDiv = document.createElement("div");
  imageDiv.classList.add("home-images");

  imageDiv.appendChild(leftDiv);
  imageDiv.appendChild(homeImage);
  imageDiv.appendChild(rightDiv);

  homeDiv.appendChild(homeHeader);
  homeDiv.appendChild(imageDiv);

  console.log("Home loaded.");
  return homeDiv;
}

export default loadHome;
