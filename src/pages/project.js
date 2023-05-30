import {projectList} from './dataFake';
import Header from '../components/header';
function ProjectPage(){
    return `
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
    `
}

export default ProjectPage