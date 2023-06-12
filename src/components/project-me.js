import { useEffect,useState } from "../lib"
const ProjectMe=()=>{

    const [projects,setProject]=useState([]);
    useEffect(()=>{
            fetch('http://localhost:3000/projectList')
            .then(response=>response.json())
            .then(data=>setProject(data))
    },[])
    
    return `
    <div class="project-me">
                <div class="title-project-me">
                <p class="my-project">MY PROJECT</p>
                <h1 class="heading-project-me">The various works that I <br> have done amazingly</h1>
                <p  class="mota-project">Varius amet, integer tellus non eget viverra. Ultrices tellus donec gravida <br>
                    id sed senectus dolor cursus sed. Ullamcorper tellus ac cras nec, pretium <br>
                    laoreet duis.</p>
                </div>
         </div>
         <div class="main">
         ${projects.map(project=>{
             return `
             <div class="project">
             <div class="project-title">
                 <h4 class="project-name">${project.title}</h4>
                 <div class="btn-project">
                     <div class="design">UIUX Design</div>
                     <div class="design">Branding</div>
                 </div>
                 <a href="" class="project-link">
                     See Detail Project
                     <img class="img-link" src="./src/img/Arrow 7.png" alt="">
                 </a>
             </div>
             <div class="project-img">
                 <img src="${project.image}" alt="">
             </div>
         </div>
             `
         })}   
                </div>
    `
}

export default ProjectMe

/*

<div class="main">
    <div class="project">
        <div class="project-title">
            <h4 class="project-name">Real Estate <br class="block"> Agency Website</h4>
            <div class="btn-project">
                <div class="design">UIUX Design</div>
                <div class="design">Branding</div>
            </div>
            <a href="" class="project-link">
                See Detail Project
                <img class="img-link" src="./src/img/Arrow 7.png" alt="">
            </a>
        </div>
        <div class="project-img">
            <img src="./src/img/iPad Mini.png" alt="">
        </div>
    </div>
    <div class="project blue">
        <div class="project-img">
            <img src="./src/img/Longscroll iPhone Pro.png" alt="">
        </div>
        <div class="project-title">
            <h4 class="project-name">Property Agent <br class="block">
                Website</h4>
            <div class="btn-project">
                <div class="design">UIUX Design</div>
                <div class="design">Development</div>
            </div>
            <a href="" class="project-link">
                See Detail Project
                <img class="img-link" src="./src/img/Arrow 7.png" alt="">
            </a>
        </div>
    </div>
    <div class="project2">
        <div class=" img-prj img-prj1">
                <img src="./src/img/iPhone 12 Pro.png" alt="">
        </div>
        <div class=" img-prj img-prj2">
                <img src="./src/img/MacBook Pro 16.png" alt="">
        </div>
        
    </div>
    <div class="project black">
        <div class="project-title">
            <h4 class="project-name">Movie Apps <br class="block">
                Mobile</h4>
            <div class="btn-project">
                <div class="design">UIUX Design</div>
            </div>
            <a href="" class="project-link">
                See Detail Project
                <img class="img-link" src="./src/img/Arrow 7.png" alt="">
            </a>
        </div>
        <div class="project-img">
            <img src="./src/img/iPhone 15.png" alt="">
        </div>
    </div>
    <div class="project support">
        <img class="img-sp" src="./src/img/Mask group (1).png" alt="">
        <div class="project-suppost">
           <h2 class="headinh-sp">Have a project idea to <br>
            collaborate with?</h2>
            <a href="#" class="contact-sp">Contact Us</a>
        </div>
        
    </div>
   </div>
*/