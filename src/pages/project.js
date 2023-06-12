import {projectList} from '../dataFake';
import Header from '../components/header';
import ProjectMe from '../components/project-me';
import footer from '../components/footer';
import '../css/projectme.css'
function ProjectPage(){
    return `
    <div id="all">
    <img class="img-project" src="./src/img/Group 3394.png" alt="">
    ${Header()}
    ${ProjectMe()}
    ${footer()}
    </div>
    `

}
/*
${Header()}
        ${projectList.map(item=>{
            console.log(item)
            return `
                <div>
                <h3>${item.title}</h3>
                <p>${item.content}</p>
                </div>
            `
        }).join('')}
*/

export default ProjectPage