import Header from "../components/header.js"
import main_project from "../components/main_project.js"
import Gioi_thieu from "../components/gioi_thieu.js"
import footer from "../components/footer.js"
function HomePage(){
        return `
        <div id="all">
        ${Header()}
        ${Gioi_thieu()}
        ${main_project()}
        ${footer()}
        </div>
        `
}
export default HomePage