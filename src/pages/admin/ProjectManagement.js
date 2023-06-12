import { useEffect,useState } from "../../lib"
import AdminPage from "./adminPage";
const ProjectManagementPage=()=>{
    const [projects,setProject]=useState([])
    useEffect(()=>{
        fetch('http://localhost:3000/projectList')
        .then(response=>response.json())
        .then((data)=>{
             setProject(data)
        })
    },[]);
    useEffect(()=>{
       const btnList= document.querySelectorAll(".btn-remove");
       for(let btn of btnList){
           const id=btn.dataset.id
         btn.addEventListener("click",()=>{
            fetch(`http://localhost:3000/projectList/${id}`,{
                method:'DELETE'
            })
            .then(()=>{
                const newProject=projects.filter(project=>{
                    return project.id != id
                })
            setProject(newProject)
            })
         })  
       }
    })
    useEffect(()=>{
        const input=document.querySelector('.search');
        const button=document.querySelector('.button_search')
        button.addEventListener('click',()=>{
          const value=projects.filter(item=>{
                return item.title === input.value
          })
          if(value.length >0){
              setProject(value)
                
          }
          
        })
    });
    return `
    <div class="page">
        ${AdminPage()}
        
    <div class="page__warpper">
                    <div class="heading-warrper">
                        <h5 class="heading-hello">Hi Hoang Huy</h5>
                        <h2 class="heading-welcome">Welcome back👋</h2>
                    </div>
                    <div class="btn-search">
                    <div>
                    <a class="btn_link_project" href="/admin/project/add"><button class="btn btn-primary">Add project</button></a>
                    </div>
                    <div class="tim_kiem">
                    <input type="text" class="search " placeholder="nhập title để tìm kiếm">
                    <button class="button_search btn btn-secondary">submit</button>
                    </div>
                    </div>
                    <table class="table">
                    
                    <thead>
                    <tr>
                      <th scope="col">id</th>
                      <th scope="col">Project Title</th>
                      <th scope="col">Project Image</th>
                      <th scope="col">Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    ${projects.map((project) =>{
                        return `
                        <tr>
                        <th scope="row">${project.id}</th>
                        <td>${project.title}</td>
                        <td><img src="${project.image} " width="100px"></td>
                        <td>
                        <a href="/admin/project/edit/${project.id}"><button class="btn btn-info">Edit</button></a>
                        <button class="btn-remove btn btn-danger" data-id="${project.id}">Delete</button>
                        </td>
                        </tr>
                        `
                    }).join('')}
                    </tbody>
                    </table>
                </div>
    </div>
   
    `
}

export default ProjectManagementPage