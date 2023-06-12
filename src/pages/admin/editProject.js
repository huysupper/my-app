import { router, useEffect, useState } from "../../lib"

const EditProject=({id})=>{
    const [project,setProject]=useState([])
    useEffect(()=>{
        fetch(` http://localhost:3000/projectList/${id}`)
        .then(response=>response.json())
        .then(data=>setProject(data))
    },[])
    useEffect(()=>{
        const submit=document.querySelector('button');
        const title=document.querySelector('#title');
        const image=document.querySelector('#image');

       submit.addEventListener('click',()=>{
            fetch(`http://localhost:3000/projectList/${id}`,{
                method:'PUT',
                headers:{
                    'content-Type':'application/json'
                },
                body:JSON.stringify({
                    title:title.value,
                    image:image.value
                })
            })
            .then(()=>{
                router.navigate('/admin/project')
            })
       })
    })
    return `
    <div class="mb-3">
    <label  class="form-label">Title</label>
    <input type="text" class="form-control" id="title" value="${project.title}" >
    </div>
    <div class="mb-3">
    <label  class="form-label">Image</label>
    <input type="text" class="form-control" id="image" value="${project.image}" >
    </div>
    <button  class=" button btn btn-primary">Submit</button>
    `
}

export default EditProject