import { useEffect,router } from "../lib"
const signUp=()=>{

    useEffect(()=>{
        const submit=document.querySelector('.button');
        const name=document.querySelector('.name');
        const password=document.querySelector('.password');
        const enter_password=document.querySelector('.enter-password');
        submit.addEventListener('click',()=>{
                if(name.value==='' || password.value=='' ||  enter_password.value==''){
                    alert('vui lòng nhập đầy đủ user name và password')
                }else if(password.value !== enter_password.value){
                    alert('mật khẩu không trùng khớp với nhau')
                }else{
                    fetch('http://localhost:3000/users',{
                        method:'POST',
                        headers:{
                            'content-type':'application/json'
                        },
                        body:JSON.stringify({
                            username:name.value,
                            password:password.value
                        })    
                    })
                    .then(()=>{
                        alert('đăng ký thành công');
                        router.navigate('/')
                    })
                }
            })
    })
    return `
    <div class="mb-3">
    <label  class=" form-label">User name</label>
    <input type="text" class=" name form-control">
  </div>
  <div class="mb-3">
    <label  class="form-label">Password</label>
    <input type="password" class=" password form-control" >
  </div>
  <div class="mb-3">
    <label  class="form-label">Enter password</label>
    <input type="password" class=" enter-password form-control" >
  </div>
  <button  class=" button btn btn-primary">Submit</button>
    `
}

export default signUp