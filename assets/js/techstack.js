AOS.init();

//  Tech Stacks cards

const techStackCards = document.querySelector(".techstack-box");
const techStack = [
  {
    langImage: "assets/images/techstack-page/html.png",
    langName: "HyperText Markup Language",
    langDesc: "<li>The HyperText Markup Language, or HTML is the standard markup language for documents designed to be displayed in a web browser</li>",
  },
  {
    langImage: "assets/images/techstack-page/css.png",
    langName: "Cascading Style Sheets",
    langDesc: "<li>Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML</li>",
  },
  {
    langImage: "assets/images/techstack-page/javascript.png",
    langName: "JavaScript",
    langDesc: "<li>JavaScript, often abbreviated JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS</li>",
  },
  {
    langImage: "assets/images/techstack-page/dj.png",
    langName: "Django",
    langDesc: "<li>Django is a Python-based web framework, free and open-source, that follows the model–template–views architectural pattern. </li>",
  },
  {
    langImage: "assets/images/techstack-page/python.png",
    langName: "Python",
    langDesc: "<li>Python is an interpreted high-level general-purpose programming language</li>",
  },
  {
    langImage: "assets/images/techstack-page/block.jpg",
    langName: "Blockchain",
    langDesc: "<li>Blockchain is a type of shared database that differs from a typical database in the way that it stores information; blockchains store data in blocks.</li>",
  },
  {
    langImage: "assets/images/techstack-page/git.png",
    langName: "Git/Github",
    langDesc: "<li>Git is software for tracking changes in any set of files, usually used for coordinating work among programmers collaboratively developing source code during software development.</li>",
  },
  {
    langImage: "assets/images/techstack-page/hyper.jpg",
    langName: "Hyperledger",
    langDesc: "<li>Hyperledger is a multi-project open source collaborative effort hosted by The Linux Foundation, created to advance cross-industry blockchain technologies.</li>",
  },
  {
    langImage: "assets/images/techstack-page/photoshop.webp",
    langName: "Adobe Photoshop",
    langDesc: "<li>Adobe Photoshop is a raster graphics editor developed and published by Adobe Inc. for Windows and macOS.</li>",
  },
  {
    langImage:"assets/images/techstack-page/postgres.png",
    langName:"PostgresSQL",
    langDesc:"<li>PostgreSQL, also known as Postgres, is a free and open-source relational database management system emphasizing extensibility and SQL compliance.</li>"
  },
];

const displayTechStacksCards = () => {
  const entireCardTemplate =
  techStack.map((stack)=> {
      return `        
    <div class="row page-content techstackcards" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="0" data-aos-duration="400"> 
        <div class="tech_card">
            <div class="card_img">
                <img src ="${stack.langImage}" class="featured_image">
            </div>
            <div class="card_header">
                <header>
                    <div class="text-center langName">
                        <h4>${stack.langName}</h4>
                    </div>
                </header>
                <ul class="description">
                ${stack.langDesc}
            </ul>
            </div>
        </div>
    </div>
      `}).join('');
  techStackCards.innerHTML = entireCardTemplate;
};
// displayTechStacksCards(techStack)
document.addEventListener("DOMContentLoaded", displayTechStacksCards);
