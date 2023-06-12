import { router, useEffect } from "../../lib"
const AddProject=()=>{
    useEffect(()=>{
        const create =document.querySelector('.button');
       
        const title=document.querySelector('#title');
        const image=document.querySelector('#image');
        console.log(title,image)
        create.addEventListener('click',()=>{
            fetch('http://localhost:3000/projectList',{
                method:'POST',
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
    <input type="text" class="form-control" id="title" >
  </div>
  <div class="mb-3">
  <label  class="form-label">Image</label>
  <input type="text" class="form-control" id="image" >
  </div>
  <button  class=" button btn btn-primary">Submit</button>
    `
}

export default AddProject
/*
<div>
        <div>
        <label>tilte</label>
        <input id="title" type="text"/>
        <label>image</label>
        <input id="image" type="text"/>
        <button>create</button>
        </div>

    </div>
*/