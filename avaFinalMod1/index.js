let objs = {
  about: {
    name: "jamerson",
    surname: "Felipe Pereira Paz",
    street: "rua heroltides costa,695.",
    cityState: "santa maria-rs",
    email: "ljames666@gmail.com",
    fone: "(55)98115-5124",
    aboutMe:
      " Sou de bem com a vida e acredito nas boas intenções das pesssoas. Gosto do convivio social,tecnologia, artes marciais, filmes e musica. Atualmente estou no Programa Starter da Growdev.",
    redesSociais: [
      "https://www.facebook.com/jamerson.paz/",
      "https://github.com/Ljames666/",
      "https://www.linkedin.com/in/jamerson-paz/",
      "https://www.instagram.com/pazjamerson/",
      "https://api.whatsapp.com/send/?phone=5555981155124",
      "https://t.me/pazJamerson/",
    ],
  },
  knowledge: {
    introKnowledge:
      "Estou no momento em formação no Desenvolvimento Web Full Stack. Também tenho experiência em softwares usados na área do Design como:",
    knowledgeList: [
      "HTML",
      "CSS",
      "JavaScript",
      "Softwares CAD (AutoCAD,Soliworks,Inventor)",
      "Softwares Gráficos (Illustrator, Draw, Photoshop)",
      "Softwares de animação(Blender, 3DS Max, Clara.IO,Flash)",
    ],
  },
  objective: {
    personalGoal: "Ter estabilidade financeira para fazer o que mais gosto viajar.",
    professionalGoal:
      "Ser um profissional copetente dentro da área de TI, podendo agregar ao conhecimento no qual estou estudando na Growdev minhas experiências de outras áreas.",
  },
};

let aboutHtml = document.getElementById("sobre");
let knowledgeHtml = document.getElementById("conhecimentos");
let objectivesHtml = document.getElementById("objetivos");
let createLinks = document.querySelector("#redeSociaisHtml");
addAbout();
addKnowledge();
addObjectives();
function addAbout() {
  document.getElementById("nomeHtml").innerHTML = objs.about.name;
  document.getElementById("sobrenomeHtml").innerHTML = objs.about.surname;
  document.getElementById("ruaHtml").innerHTML = objs.about.street;
  document.getElementById("cidadeHtml").innerHTML = objs.about.cityState;
  document.getElementById("emailHtml").innerHTML = objs.about.email;
  document.getElementById("telHtml").innerHTML = objs.about.fone;
  document.getElementById("textAbout").innerHTML = objs.about.aboutMe;
  for (const rede of objs.about.redesSociais) {
    console.log(rede);
    let aLink;
    aLink = document.createElement("a");
    aLink.setAttribute("href", rede);
    aLink.setAttribute("target", "_blank");
    aLink.innerText = rede;

    if (aLink.href.indexOf("facebook") !== -1) {
      aLink.innerHTML = `<i class="fab fa-facebook"></i>`;
    } else if (aLink.href.indexOf("github") !== -1) {
      aLink.innerHTML = `<i class="fab fa-github"></i>`;
    } else if (aLink.href.indexOf("linkedin") !== -1) {
      aLink.innerHTML = `<i class="fab fa-linkedin"></i>`;
    } else if (aLink.href.indexOf("instagram") !== -1) {
      aLink.innerHTML = `<i class="fab fa-instagram"></i>`;
    } else if (aLink.href.indexOf("whatsapp") !== -1) {
      aLink.innerHTML = `<i class="fab fa-whatsapp"></i>`;
    } else if (aLink.href.indexOf("t.me") !== -1) {
      aLink.innerHTML = `<i class="fab fa-telegram"></i>`;
    }
    createLinks.appendChild(aLink);
  }
}
function addKnowledge() {
  knowledgeHtml.innerHTML = `<h2 class="top">Conhecimentos</h2> <p class="text">${objs.knowledge.introKnowledge}</p>`;
  for (const list of objs.knowledge.knowledgeList) {
    knowledgeHtml.innerHTML += `<li type="none">${list}</li>`;
  }
}
function addObjectives() {
  objectivesHtml.innerHTML =
    `<h2 class="top">Objetivos Pessoais</h2><p class="text">${objs.objective.personalGoal}</p>` +
    `<h2 >Objetivos Profissionais</h2><p class="text">${objs.objective.professionalGoal}</p>`;
}

function accessedAbout() {
  console.log("Acessou o conteúdo de sobre");
  aboutHtml.style.display = "block";
  knowledgeHtml.style.display = "none";
  objectivesHtml.style.display = "none";
}
function accessedKnowledge() {
  console.log("Acessou o conteúdo de conhecimentos");
  knowledgeHtml.style.display = "block";
  aboutHtml.style.display = "none";
  objectivesHtml.style.display = "none";
}
function accessedObjectives() {
  console.log("Acessou o conteúdo de objetivos");
  objectivesHtml.style.display = "block";
  aboutHtml.style.display = "none";
  knowledgeHtml.style.display = "none";
}
