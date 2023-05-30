import { projectList } from "./dataFake"
const ProjectDetail=(data)=>{
    console.log(data)
        const currentProject=projectList.find((item)=>{
            return item.id==data.id
        })
       if(currentProject){
           return `
           <h1>Detail page</h1>
           <h1>${currentProject.title}</h1>
                    <p>${currentProject.content}</p>
           `
       }
            return `<h1>Project khong ton tai</h1>`
       }

export default ProjectDetail