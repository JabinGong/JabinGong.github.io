/*global document*/

function generatePub(pic, authors, title, journal, date, issue, pages, link) {
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
  info.innerHTML = authors + ". " + title + ". " + "<em>" + journal + "</em> " + "<strong>" + date + "</strong>" + ", " + "<em>" + issue + "</em>" + ", " + pages + ".";
  info.appendChild(document.createElement("br"));
  info.appendChild(hyperlink);

  wrapper.appendChild(portrait);
  wrapper.appendChild(info);

  parent.appendChild(document.createElement("hr"));
}

var header = document.createElement("h1");
header.innerHTML = "Selected Publications";
document.getElementById("publications").appendChild(header);

generatePub("nature2023.jpg", "Cao, R. K.; Rossdeutcher, R. B.; Zhong, Y. L.; Shen, Y.; Miller, D. P.; Sobiech, T. A.; Wu, X. X.; Sánchez B., L. S.; Ramcharan, K.; Gutay, M. I.; Figueira, M. F.; Luthra, P.; Zurek, E.; Szyperski, T.; Button, B.; Shao, Z. F.; Gong, B", 
    "Aromatic pentaamide macrocycles bind anions with high affinity for transport across biomembranes", 
    "Nature Chem.", "2023", "12", "1559-1568", "https://www.nature.com/articles/s41557-023-01315-w")

generatePub("rigidmacrocycles.jpg", "Gong, B.; Shao, Z. F", 
    "Rigid macrocycles with multiple hydrogen-bond donors for effective anion binding and transport", 
    "Nature Chem.", "2023", "12", "1501-1502", "https://doi.org/10.1038/s41557-023-01316-9")

generatePub("wiley2023.jpg", "Wu, C. Y.; Su, S. L.; Zhang, X.; Liu, R.; Gong, B.; Lu, Z. L", 
    "Covalently linked hexakis(m-phenylene ethynylene) macrocycles as molecular nanotubes", 
    "Angew. Chem. Int. Ed.", "2023", "62", "e202303242", "https://onlinelibrary.wiley.com/doi/abs/10.1002/anie.202303242")

generatePub("chemsci2023.jpeg", "Zhong, Y. L.; Sobiech, T. A.; Kauffmann, B.; Song, B.; Li, X. P.; Ferrand, Y.; Huc, I.; Gong, B", 
    "High-affinity single and double helical pseudofoldaxanes with cationic guests", 
    "Chem. Sci.", "2023", "14", "4759-4768", "https://pubs.rsc.org/en/content/articlelanding/2023/sc/d3sc00524k")

generatePub("angew22.png", "Sobiech, T. A.; Zhong, Y. L.; Miller, D. P.; McGrath, J. K.; Scalzo, C. T.; Redington, M. C.; Zurek, E.; Gong, B", 
    "Ultra-Tight Host-Guest Binding with Exceptionally Strong Positive Cooperativity", 
    "Angew. Chem. Int. Ed.", "2022", "61", "e202213467", "https://onlinelibrary.wiley.com/doi/10.1002/anie.202213467")

generatePub("sobiech2022.png", "Sobiech, T. A.; Zhong Y. L.; Gong, B", "Cavity-containing aromatic oligoamide foldamers and macrocycles: progress and future perspectives", "Org. & Biomol. Chem.", "2022", "20", "6962-6978", "https://pubs.rsc.org/en/content/articlelanding/2022/ob/d2ob01467j");

generatePub("oc1c.png", "Shen, Y.; Fei, F.; Zhong, Y. L.; Fan, C. H.; Sun, J. L.; Hu, J.; Gong, B.; Czajkowsky, D.; Shao, Z. F", "Controlling water flow through a synthetic nanopore with permeable cations", "ACS Cent. Sci.", "2021", "7", "2092-2098", "https://pubs.acs.org/doi/10.1021/acscentsci.1c01218");

generatePub("ab1c.png", "Zhong, Y. L.; McGrath, J. K.; Gong B", "Dipropinonates of sugar alcohols as water-soluble, nontoxic CPAs for DMSO-free cell cryopreservation", "ACS Biomater. Sci. Eng.", "2021", "7", "4757-4762", "https://pubs.acs.org/doi/10.1021/acsbiomaterials.1c00995");

generatePub("Get.jpg", "Sobiech, T. A.; Zhong, Y. L.; Sánchez B., L. S.; Kauffmann, B.; McGrath, J. K.; Scalzo, C.; Miller, D. P.; Huc, I.; Zurek, E.; Ferrand, Y.; Gong, B", "Stable pseudo[3]rotaxanes with strong positive binding cooperativity based on shape-persistent aromatic oligoamide macrocycles", "Chem Commun.", "2021", "57", "11645-11648", "https://pubs.rsc.org/en/content/articlelanding/2021/cc/d1cc05193h");

generatePub("2.png", "Wang, Q. H.; Zhong, Y. L.; Miller, D. P.; Lu, X. X.; Tang, Q.; Lu, Z. L.; Zurek, E.; Liu, R.; Gong, B", "Self-assembly and molecular recognition in water: Tubular stacking and guest-templated discrete assembly of water-soluble, shape-persistent macrocycles", "J. Am. Chem. Soc.", "2020", "142", "2915-2924", "https://pubs.acs.org/doi/abs/10.1021/jacs.9b11536");

generatePub("ol0c02696_0008.png", "Cao, R. K.; Rossdeutcher, R. B.; Wu, X. X.; Gong, B", "Oligo(5-amino-N-acylanthranilic acids): Amide Bond Formation without Coupling Reagent and Folding upon Binding Anions", "Org. Lett.", "2020", "22", "7496-7501", "https://pubs.acs.org/doi/10.1021/acs.orglett.0c02696");

generatePub("fchem-08-530083-g001.png", "Zhong, Y. L.; Tang, Q.; Miller, D. P.; Zurek, E. D.; Liu, R.; Lu, Z. L.; Gong, B", "Major Factors for the Persistent Folding of Hybrid α, β, γ-Hybrid Peptides into Hairpins", " Front. Chem.", "2020", "8", "Article 530083. DOI: 10.3389/fchem.2020.530083.", "https://www.frontiersin.org/articles/10.3389/fchem.2020.530083/full");

generatePub("11.png", "Zhong, Y. L.; Kauffmann, B.; Xu, W. W.; Lu, Z. L.; Ferand, Y.; Huc, I.; Zeng, X. C.; Liu, R.; Gong, B", "Multiturn Hollow Helices: Synthesis and Folding of Long Aromatic Oligoamides", "Org. Lett.", "2020", "22", "6938-6942", "https://pubs.acs.org/doi/10.1021/acs.orglett.0c02481");

generatePub("1.png", "Tang, Q.; Zhong, Y. L.; Miller, D. P.; Liu, R.; Eva Zurek, E.; Lu, Z. L.; Gong, B", "Reverse Turn Foldamers: An expanded β-turn motif reinforced by double hydrogen bonds", "Org. Lett.", "2020", "22", "1003-1007", "https://pubs.acs.org/doi/10.1021/acs.orglett.9b04547");

generatePub("3.png", "Zhang, Y. K.; Zhong, Y. L.; Connor, A. L.; Miller, D. P.; Cao, R. K.; Shen, J.; Song, B.; Baker, E. S.; Tang, Q.; Pulavarti, S. V. S. R. K.; Liu, R.; Q. W.; Lu, Z. L.; Szyperski, T.; Zeng, H. Q.; Li, X. P.; Smith, R. D.; Zurek, E.; Zhu, J.; Gong, B", "Folding and assembly of short α, β, γ-hybrid peptides: Minor variations in sequence and drastic differences in higher-level structures", "J. Am. Chem. Soc.", "2019", "141", "14239−14248", "https://pubs.acs.org/doi/10.1021/jacs.9b06094");

generatePub("4.png", "Zhao, Y. Y.; Connor, A. L.; Sobiech, T. A.; Gong, B", "Effects of Oligomer Length, Solvents, and Temperature on the Self-Association of Aromatic Oligoamide Foldamers", "Org. Lett.", "2018", "20", "5486-5489", "https://pubs.acs.org/doi/10.1021/acs.orglett.8b02438");

generatePub("5.png", "Shi, Y. D.; Tang, Q.; Jiang, Y. F.; Pei, Q.; Tan, H. W.; Lu, Z. L.; Gong, B", "Effective formation of stable and versatile double-stranded beta-sheets templated by a hydrogen-bonded duplex", "Chem. Commun.", "2018", "54", "3719-3722", "https://pubs.rsc.org/en/content/articlelanding/2018/cc/c8cc01564c#!divAbstract");

generatePub("6.png", "Zhang, Y. K.; Cao, R. K.; Shen, J.; Detchou, C. S. F.; Zhong, Y. L.; Wang, H.; Zou, S.; Huang, Q. F.; Lian, C. X.; Wang, W.; Zhu, J.; Gong, B", "Hydrogen-Bonded Duplexes with Lengthened Linkers", "Org. Lett.", "2018", "20", "1555-1558", "https://pubs.acs.org/doi/abs/10.1021/acs.orglett.8b00283");

generatePub("7.png", "Zhong, Y. L.; Yang, Y.; Shen, Y.; Xu, W. W.; Wang, Q. H.; Connor, A. L.; Zhou, X. B.; He, L.; Zeng, X. C.; Shao, Z. F.; Lu, Z. L.; Gong, B", "Enforced Tubular Assembly of Electronically Different Hexakis(m-phenylene ethynylene) Macrocycles: Persistent Columnar Stacking Driven by Multiple Hydrogen Bonding Interactions", "J. Am. Chem. Soc.", "2017", "139", "15950-15957", "https://pubs.acs.org/doi/10.1021/jacs.7b09647");

generatePub("8.png", "Hu, T.; Connor, A. L.; Miller, D. P.; Wang, X.; Pei, Q.; Liu, R.; He, L.; Zheng, C.; Zurek, E.; Lu, Z. L.; Gong, B", "Helical Folding of meta-Connected Aromatic Oligoureas", "Org. Lett.", "2017", "19", "2666-2669", "https://pubs.acs.org/doi/full/10.1021/acs.orglett.7b01005");

generatePub("9.png", "Li, X. W.; Yuan, X. Y.; Deng, P. C.; Chen, L. X.; Ren, Y.; Wang, C. Y.; Wu, L. X.; Feng, W.; Gong, B.; Yuan, L. H", "Macrocyclic shape-persistency of cyclo[6]aramide results in enhanced multipoint recognition for highly efficient template-directed synthesis of rotaxanes", "Chem. Sci.", "2017", "8", "2091-2100", "https://pubs.rsc.org/en/content/articlelanding/2017/sc/c6sc04714a#!divAbstract");

generatePub("10.png", "Connor, A. L.; Hu, T.; Detchou, C. S. F.; Liu, R.; Pulavarti, S. V. S. R. K.; Szyperski, T.; Lu, Z. L.; Gong, B", "Aromatic Oligoureas as Hosts for Anions and Cations", "Chem. Commun.", "2016", "52", "9905-9908", "https://pubs.rsc.org/en/content/articlelanding/2016/cc/c6cc03681c#!divAbstract");

//-----------------
generatePub("ja-2015-12698w_0009.png","Wei, X. X.; Zhang, G. Q.; Shen, Y.; Zhong, Y. L.; Liu, R.; Yang, N.; Al-mkhaizim, F. Y.; Kline, M.; He, L.; Li, M. F.; Lu, Z. L.; Shao, Z. F.; Gong, B","Persistent Organic Nanopores Amenable to Structural and Functional Tuning","J. Am. Chem. Soc.","2016", "138", "2749–2754", "http://pubs.acs.org/doi/abs/10.1021/jacs.5b12698");

generatePub("ImageIdentifier.Year=2016.png","Liu, R.; Cheng, S.; Baker, E. S.; Smith, R. D.; Zeng, X. C.; Gong, B","Surprising impact of remote groups on the folding–unfolding and dimer-chain equilibria of bifunctional H-bonding unimers","Chem. Commun.","2016", "52", "3773-3776","https://pubs.rsc.org/en/content/articlelanding/2016/cc/c6cc00224b");

generatePub("TOC.jpg","Li, X. W.; Li, B.; Chen, L.; Hu, J. C.; Wen, C. D. Y.; Zheng, Q. D.; Wu, L. X.; Zeng, H. Q.; Gong, B.; Yuan, L. H","Liquid-Crystalline Mesogens Based on Cyclo[6]aramides: Distinctive Phase Transitions in Response to Macrocyclic Host–Guest Interactions","Angew. Chem. Int. Ed.","2015", "54", "11147–11152", "https://onlinelibrary.wiley.com/doi/abs/10.1002/anie.201505278");

generatePub("ja-2015-02552f_0004.png","Wu, X. X.; Rui Liu, R.; Sathyamoorthy, B.; Yamato, K.; Liang, G. X.; Shen, L.; Ma, S. F.; Sukumaran, D. K.; Szyperski, T.; Fang, W. H.; He, L.; Chen, X. B.; Gong, B","Discrete Stacking of Aromatic Oligoamide Macrocycles","J. Am. Chem. Soc.","2015", "137", "5879–5882", "https://pubs.acs.org/doi/10.1021/jacs.5b02552");

generatePub("extremely strong tubular.png","Kline, M. A.; Wei, X. X.; Horner, I. J.; Liu, R.; Chen, S.; Chen, S.; Yung, K. Y.; Yamato,K.; Cai, Z. H.; Bright, F. V.; Zeng, X. C.; Gong, B","Extremely Strong Tubular Stacking of Aromatic Oligoamide Macrocycles","Chem. Sci.","2015", "6", "152-157", "http://xlink.rsc.org/?doi=C4SC02380C&newsite=1");

generatePub("ar-2013-00030e_0012.png","Gong, B.; Shao, Z. F","Self-Assembling Organic Nanotubes with Precisely Defined, Sub-nanometer Pores: Formation and Mass Transport Characteristics","Acc. Chem. Res","2013", "46", "2856–2866","https://pubs.acs.org/doi/10.1021/ar400030e");

generatePub("ImageIdentifier.Year=2012.png","Yamato, K.; Kline, M.; Gong, B","Cavity-containing, backbone-rigidified foldamers and macrocycles","Chem. Commun","2012", "48", "12142–12158", "https://pubs.rsc.org/en/content/articlelanding/2012/cc/c2cc36391g");

generatePub("TOC3.jpg","Zhou, X. B.; Liu, G. D.; Yamato, K.; Shen, Y.; Cheng, R. X.; Wei, X. X.; Bai, W. L.; Gao, Y.; Li, H.; Liu, Y.; Liu, F. T.; Czajkowsky, D. M.; Wang, J. F.; Dabney, M. J.; Cai, Z. H.; Hu, J.; Bright, F. V.; He, L.; Zeng, X. C.; Shao, Z. F.; Gong, B","Self-Assembling Sub-Nanometer Pores with Unusual Mass-Transporting Properties","Nature Commun.","2012", "3", "949. DOI: 10.1038", "https://www.nature.com/articles/ncomms1949");

generatePub("ar-2012-00007k_0013.png","Gong, B","Molecular Duplexes with Encoded Sequences and Stabilities","Acc. Chem. Res","2012", "45", "2077-2087", "https://pubs.acs.org/doi/10.1021/ar300007k");

generatePub("ja-2011-08548b_0003.png","Yang, Y. A.; Feng, W.; Hu, J. C.; Zou, S. L.; Gao, R. Z.; Yamato, K.; Kline, M.; Cai, Z. H.; Gao, Y.; Wang, Y. B.; Li, Y. B.; Yang, Y. L.; Yuan, L. H.; Zeng, X. C. Gong, B","Strong Aggregation and Directional Assembly of Aromatic Oligoamide Macrocycles","J. Am. Chem. Soc.","2011", "133", "18590-18593", "https://pubs.acs.org/doi/10.1021/ja208548b");

generatePub("TOC1.jpg","Ferguson, J. S.; Yamato, K.; Liu, R.; He, L.; Zeng, X. C.; Gong, B","One-pot Formation of Large Macrocycles with Modifiable Peripheries and Internal Cavities","Angew. Chem., Int. Ed.","2009", "48", "3150-3154","https://pubmed.ncbi.nlm.nih.gov/19322868/");

generatePub("ja-2008-07935y_0013.png","Feng, W.; Yamato, K.; Yang, L. Q.; Ferguson, J.; Zhong, L.J.; Zou, S. L.; Yuan, L.H.; Zeng, X. C.; Gong, B","Efficient Kinetic Macrocyclization","J. Am. Chem. Soc.","2009", "131", "2629–2637","https://pubs.acs.org/doi/10.1021/ja807935y");

generatePub("ja-2008-07078y_0004.png","Helsel, A. J.; Brown, A. L.; Yamato, K.; Feng, W.; Yuan, L. H.; Clements, A.; Harding, S. V.; Szabo, G.; Shao, Z. F.; Gong, B","Highly Conducting Transmembrane Pores Formed by Aromatic Oligoamide Macrocycles","J. Am. Chem. Soc.","2008", "130", "15784-15785","https://pubs.acs.org/doi/10.1021/ja807078y");

generatePub("ja072567mn00001.png","Li, M. F.; Yamato, K.; Ferguson, J. S.; Singarapu, K. K.; Szyperski, T.; Gong, B","Sequence-Specific, Dynamic Covalent Crosslinking in Aqueous Media","J. Am. Chem. Soc.","2008", "130", "491-500","https://pubs.acs.org/doi/10.1021/ja072567m");

generatePub("ar-2007-00266f_0001.png","Gong, B","Hollow Crescents, Helices and Macrocycles from Enforced Folding and Folding-Assisted Macrocyclization","Acc. Chem. Res","2008", "41", "1376-1386","https://pubs.acs.org/doi/10.1021/ar700266f");
