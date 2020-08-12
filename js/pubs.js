/*global document, require*/
var fs = require('fs');

function generatePub(pic, authors, title, journal, date, link) {
  var parent = document.getElementById("publications");
  var wrapper = document.createElement('div');
  wrapper.setAttribute("class", "bio");
  parent.appendChild(wrapper);
  
  var info = document.createElement("p");
  
  var portrait = document.createElement('img');
  portrait.setAttribute("src", "img/" + pic);
  portrait.setAttribute("class", "portraits");
//  var authors = "Jabin Gong";
//  var title = "Research Paper";
//  var journal = "JACS";
//  var date = "August 2020";
//  var link = "https://google.com";
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


//var text = require("./uroc.txt");
//var text = fs.readFileSync('./uroc.txt', "utf-8");
//var lines = text.split("\n");
//lines.forEach(function (line) {
//  var details = line.split("/");
//  generatePub("1.png", details[0], details[1], details[3]);
//});
generatePub("1.png", "Jabin Gong.", "text", "JACS", "2020",  "https://google.com");
generatePub("1.png", "Jabin Gong.", "text", "JACS", "2020",  "https://google.com");
generatePub("1.png", "Jabin Gong.", "text", "JACS", "2020",  "https://google.com");
