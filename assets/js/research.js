/*Research Details Table*/

const researchTable = document.querySelector(".main");

const research = [
  {
    title: "A Medic Based Blockchain Technology with ETH and truffle",
    authors:
      "Aishwarya.R, Abilash.K, Jothiga.N",
    conferences:
      "TBU",
    researchYr: 2022,
    citebox: "popup1",
    image: "assets/images/research-page/inteferenceNetwork.png",
    citation: {
      vancouver:
        "TBU",
    },
    abstract:
      "This is currently left empty and this can be considered as a dummy data 1",
    absbox: "absPopup1",
  },

  {
    title: "Cloud Computing",
    authors:
      "Aishwarya.R, Abilash.K, Jothiga.N",
    conferences:
      "TBU",
    researchYr: 2022,
    citebox: "popup2",
    image: "assets/images/research-page/crossLingual.png",
    citation: {
      vancouver:
        "TBU",
    },
    abstract:
      "This is currently left empty and this can be considered as a dummy data 2",
    absbox: "absPopup2",
  },

  {
    title:
      "Patent Rights",
    authors: "Aishwarya.R, Abilash.K, Jothiga.N",
    conferences:
      "TBU",
    researchYr: 2022,
    citebox: "popup3",
    image: "assets/images/research-page/wordRepresentation.png",
    citation: {
      vancouver:
        "TBU",
    },
    abstract:
      "This is currently left empty and this can be considered as a dummy data 3",
    absbox: "absPopup3",
  },
];
AOS.init();
const fillData = () => {
  let output = "";
  research.forEach(
    ({
      image,
      title,
      authors,
      conferences,
      researchYr,
      citebox,
      citation,
      absbox,
      abstract,
    }) =>
      (output += `
            <tr data-aos="zoom-in-left"> 
                <td class="imgCol"><img src="${image}" class="rImg"></td>
                <td class = "researchTitleName">
                    <div class="img-div">
                        <span class="imgResponsive">
                            <img src="${image}" class="imgRes">
                        </span>
                    </div>
                    <a href="#0" class="paperTitle"> ${title} </a> 
                    <div class = "authors"> ${authors} </div> 
                    
                    <div class="rConferences"> ${conferences} 
                        <div class="researchY">${researchYr}</div>
                    </div>
                    
                    <!--CITE BUTTON-->
                    <div class="d-flex" style="margin-right:5%;">
                        <button class="button button-accent button-small text-right button-abstract " type="button" data-toggle="collapse" data-target="#${absbox}" aria-expanded="false" aria-controls="${absbox}">
                            ABSTRACT
                        </button>
                
                        <button class="button button-accent button-small text-right button-abstract " type="button" data-toggle="collapse" data-target="#${citebox}" aria-expanded="false" aria-controls="${citebox}">
                            CITE
                        </button>
                    </div>
                    <div id="${absbox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${abstract}    
                        </div>
                    </div>
                    <div id="${citebox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${citation.vancouver}    
                        </div>
                    </div>
                </td>
            </tr>`)
  );
  researchTable.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", fillData);
