/*global document*/

function generatePub(pic, authors, title, journal, date, link) {
  var parent = document.getElementById("publications");
  var wrapper = document.createElement('div');
  wrapper.setAttribute("class", "bio");
  parent.appendChild(wrapper);
  
  var info = document.createElement("p");
  
  var portrait = document.createElement('img');
  portrait.setAttribute("src", "img/" + pic);
  portrait.setAttribute("class", "portraits");
  var hyperlink = document.createElement("a");
  hyperlink.innerHTML = "[journal link]";
  hyperlink.setAttribute("href", link);
  hyperlink.setAttribute("target", "_blank");
  info.innerHTML = authors + ". " + "<strong>" + title + "</strong>. " + journal + ", " + date;
  info.appendChild(document.createElement("br"));
  info.appendChild(hyperlink);

  wrapper.appendChild(portrait);
  wrapper.appendChild(info);

  parent.appendChild(document.createElement("hr"));
}

generatePub("1.png", "Jabin Gong.", "text", "JACS", "2020",  "https://google.com");
generatePub("1.png", "Jabin Gong.", "text", "JACS", "2020",  "https://google.com");
generatePub("1.png", "Jabin Gong.", "text", "JACS", "2020",  "https://google.com");