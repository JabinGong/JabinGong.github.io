/*global document*/

function generatePub(pic, authors, title, journal, date, link) {
  var parent = document.getElementById("publications");
  var wrapper = document.createElement('div');
  wrapper.setAttribute("class", "bio");
  parent.appendChild(wrapper);
  
  var info = document.createElement("p");
  
  var portrait = document.createElement('img');
  portrait.setAttribute("src", "img/pubs/" + pic);
  portrait.setAttribute("class", "portraits");
  var hyperlink = document.createElement("a");
  hyperlink.innerHTML = "[journal link]";
  hyperlink.setAttribute("href", link);
  hyperlink.setAttribute("target", "_blank");
  info.innerHTML = authors + ". " + "<em>" + title + "</em>. " + journal + ", " + date;
  info.appendChild(document.createElement("br"));
  info.appendChild(hyperlink);

  wrapper.appendChild(portrait);
  wrapper.appendChild(info);

  parent.appendChild(document.createElement("hr"));
}

generatePub("1.png", "Tang, Q.; Zhong, Y. L.; Miller, D. P.; Liu, R.; Eva Zurek, E.; Lu, Z. L.; Gong, B", "Reverse Turn Foldamers: An expanded β-turn motif reinforced by double hydrogen bonds", "Org. Lett.", "2020",  "https://pubs.acs.org/doi/10.1021/acs.orglett.9b04547");

generatePub("2.png", "Wang, Q. H.; Zhong, Y. L.; Miller, D. P.; Lu, X. X.; Tang, Q.; Lu, Z. L.; Zurek, E.; Liu, R.; Gong, B", "Self-assembly and molecular recognition in water: Tubular stacking and guest-templated discrete assembly of water-soluble, shape-persistent macrocycles", "J. Am. Chem. Soc.", "2020", "https://pubs.acs.org/doi/abs/10.1021/jacs.9b11536");

generatePub("3.png", "Zhang, Y. K.; Zhong, Y. L.; Connor, A. L.; Miller, D. P.; Cao, R. K.; Shen, J.; Song, B.; Baker, E. S.; Tang, Q.; Pulavarti, S. V. S. R. K.; Liu, R.; Q. W.; Lu, Z. L.; Szyperski, T.; Zeng, H. Q.; Li, X. P.; Smith, R. D.; Zurek, E.; Zhu, J.; Gong, B", "Folding and assembly of short α, β, γ-hybrid peptides: Minor variations in sequence and drastic differences in higher-level structures", "J. Am. Chem. Soc.", "2019",  "https://pubs.acs.org/doi/10.1021/jacs.9b06094");

generatePub("4.png", "Zhao, Y. Y.; Connor, A. L.; Sobiech, T. A.; Gong, B", "Effects of Oligomer Length, Solvents, and Temperature on the Self-Association of Aromatic Oligoamide Foldamers", "Org. Lett.", "2018",  "https://pubs.acs.org/doi/10.1021/acs.orglett.8b02438");

generatePub("5.png", "Shi, Y. D.; Tang, Q.; Jiang, Y. F.; Pei, Q.; Tan, H. W.; Lu, Z. L.; Gong, B", "Effective formation of stable and versatile double-stranded beta-sheets templated by a hydrogen-bonded duplex", "Chem. Commun.", "2018",  "https://pubs.rsc.org/en/content/articlelanding/2018/cc/c8cc01564c#!divAbstract");

generatePub("6.png", "Zhang, Y. K.; Cao, R. K.; Shen, J.; Detchou, C. S. F.; Zhong, Y. L.; Wang, H.; Zou, S.; Huang, Q. F.; Lian, C. X.; Wang, W.; Zhu, J.; Gong, B", "Hydrogen-Bonded Duplexes with Lengthened Linkers", "Org. Lett.", "2018",  "https://pubs.acs.org/doi/abs/10.1021/acs.orglett.8b00283");

generatePub("7.png", "Zhong, Y. L.; Yang, Y.; Shen, Y.; Xu, W. W.; Wang, Q. H.; Connor, A. L.; Zhou, X. B.; He, L.; Zeng, X. C.; Shao, Z. F.; Lu, Z. L.; Gong, B", "Enforced Tubular Assembly of Electronically Different Hexakis(m-phenylene ethynylene) Macrocycles: Persistent Columnar Stacking Driven by Multiple Hydrogen Bonding Interactions", "J. Am. Chem. Soc.", "2017",  "https://pubs.acs.org/doi/10.1021/jacs.7b09647");

generatePub("8.png", "Hu, T.; Connor, A. L.; Miller, D. P.; Wang, X.; Pei, Q.; Liu, R.; He, L.; Zheng, C.; Zurek, E.; Lu, Z. L.; Gong, B", "Helical Folding of meta-Connected Aromatic Oligoureas", "Org. Lett.", "2019",  "https://pubs.acs.org/doi/full/10.1021/acs.orglett.7b01005");

generatePub("9.png", "Li, X. W.; Yuan, X. Y.; Deng, P. C.; Chen, L. X.; Ren, Y.; Wang, C. Y.; Wu, L. X.; Feng, W.; Gong, B.; Yuan, L. H", "Macrocyclic shape-persistency of cyclo[6]aramide results in enhanced multipoint recognition for highly efficient template-directed synthesis of rotaxanes", "Chem. Sci.", "2017",  "https://pubs.rsc.org/en/content/articlelanding/2017/sc/c6sc04714a#!divAbstract");

generatePub("10.png", "Connor, A. L.; Hu, T.; Detchou, C. S. F.; Liu, R.; Pulavarti, S. V. S. R. K.; Szyperski, T.; Lu, Z. L.; Gong, B", "Aromatic Oligoureas as Hosts for Anions and Cations. Chem. Commun", "J. Am. Chem. Soc.", "2016",  "https://pubs.rsc.org/en/content/articlelanding/2016/cc/c6cc03681c#!divAbstract");
