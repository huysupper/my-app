import { router, useEffect,useState } from "../lib"
const signIn=()=>{
  useEffect(()=>{
    const submit=document.querySelector('.button');
    const name=document.querySelector('.name');
    const password=document.querySelector('.password');
    submit.addEventListener('click',()=>{
     fetch('http://localhost:3000/users')
     .then(response => response.json())
     .then((data)=>{ 
      console.log(data)
       data.forEach(function(e){
        if(e.username === name.value && e.password === password.value){
          alert('đăng nhập thành công');
          router.navigate('/admin/project')  
        }
       })
       if(name.value=='' || password.value==''){
        alert('vui lòng nhập name và password')
       
       }
     })
     
  
    //   if(data[2].username === name.value && data[2].password === password.value){
    //    alert('đăng nhập thành công');
    //    router.navigate('/admin/project')
    //  }else if(name.value='' || password.value==''){
    //      alert('vui lòng nhập name hoặc password')
    //      name.value='';
    //  }else{
    //    alert('sai user name hoặc password');
    //    name.value='';
    //    password.value='';
    //  }
    })
  },[])
    return `
    
  <div class="mb-3">
    <label  class=" form-label">User name</label>
    <input type="text" class=" name form-control">
  </div>
  <div class="mb-3">
    <label  class="form-label">Password</label>
    <input type="password" class=" password form-control" >
  </div>
  <button  class=" button btn btn-primary">Submit</button>

    `
}

export default signIn