
//import Navigo from 'navigo'
import { router,render } from './lib';
import HomePage from './pages/pagehome';
import AboutPage from './pages/aboutPage';
import ProjectPage from './pages/project';
import NotFoundPage from './pages/NotFoundPage';
import ProjectDetail from './pages/ProjectDetail';
import ProjectManagementPage from './pages/admin/ProjectManagement';
import AddProject from './pages/admin/AddProject';
import EditProject from './pages/admin/editProject';
import signIn from './pages/signin';
import signUp from './pages/signup';
import './css/footer.css'
import './css/main.css'
import "./css/style.css"
import "./css/admin.css"
import "./css/about.css"
import "./css/header.css"
const app = document.querySelector("#app") //tìm phần tử html có id là app
// const router = new Navigo('/') //khởi tạo router từ đối tượng Navigo
//  const render=(content,container)=>{
//      return container.innerHTML=content()
//  }
router.on('/', () => { //sử dụng phương thức on để khai báo đường dẫn đến từng page
    return render(HomePage,app);
})
router.on('/about', () => {
    return render(AboutPage,app);
})

router.on('/project', () => {
    return render(ProjectPage,app);
})

router.on('/project/:id', ({data}) => {
    return render(()=>{
        return ProjectDetail(data)
    },app);
})
router.on('/signIn',()=>{
    return render(signIn,app)
})
router.on('/signUp',()=>{
    return render(signUp,app)
})
//admin
router.on('/admin/project', () => {
        return render(ProjectManagementPage, app)
    })
router.on('/admin/project/add', () => {
        return render(AddProject, app)
}) 
router.on('/admin/project/edit/:id',({data})=>{
    return render(()=>{
        return EditProject(data)
    },app)
})   
router.notFound(() => {
        return render(NotFoundPage, app)
    })
router.resolve() //sử dụng phương thức resolve để thực thi 


//const url='https://www.w3schools.com/';

// function loadScript(src,callback){
   
//     let script=document.createElement('script');
//     script.src=src
//     script.onload=function(){
//         callback(script)
//     }
//     document.head.append(script)
// }

// loadScript(url,function(script){
//         console.log('link',script)
// })