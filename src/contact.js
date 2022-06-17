function loadContact() {
  const contactDiv = document.createElement("div");
  contactDiv.classList.add("contactDiv");

  const phoneNumber = document.createElement("h1");
  phoneNumber.appendChild(
    document.createTextNode("Phone Number: 039 314 9424")
  );

  const address = document.createElement("h1");
  address.appendChild(
    document.createTextNode(
      "Address: Lot 839, Marine Drive, Ramsgate, KwaZulu Natal, South Africa"
    )
  );

  const openingHours = document.createElement("h1");
  openingHours.appendChild(
    document.createTextNode(
      "Opening Hours: Monday to Sunday: 8am to 5pm Closed: Christmas Day"
    )
  );

  const map = document.createElement("iframe");
  map.src =
    "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6847.906555930971!2d30.347816000000005!3d-30.887968!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x4d96b8488c481a38!2sThe%20Waffle%20House!5e0!3m2!1sen!2sus!4v1655494609968!5m2!1sen!2sus";
  map.width = 600;
  map.height = 450;
  map.classList.add("map");

  contactDiv.appendChild(phoneNumber);
  contactDiv.appendChild(address);
  contactDiv.appendChild(openingHours);
  contactDiv.appendChild(map);

  return contactDiv;
}

export default loadContact;
