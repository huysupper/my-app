import { menuList } from "../dataFake"

function Header(){
    return `
    <header>
    <div class="header_title">
     <div class="img_header">
     <img src="./src/img/Frame 2.png" alt="">
     </div>
     <nav>
         <ul class="title">
         ${menuList.map(item=>{
            return `
            <li class="list_title"><a class="list_title_link" href="${item.path}">${item.name}</a></li>
            `
         }).join('')}
            
         </ul>
     </nav>
     <div class="img_header">
     <a class="link-signIn" href="/signUp"><button class="btn-signIn">Sign up</button></a>
     <a class="link-signIn" href="/signIn"><button class="btn-signIn">Sign in</button></a>
     </div>
    </div>
 </header>
    
    `
}

{/* <header>
<nav>
<ul>
${menuList.map(item =>{
    return `
    <li><a href="${item.path}">${item.name}</a></li>
    `
}).join('')}
</ul>
<img src="./src/img/Frame (6).png" alt="">
</nav>
</header> */}

export default Header