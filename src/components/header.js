import { menuList } from "../pages/dataFake"
function Header(){
    return `
    <header>
        <nav>
        <ul>
        ${menuList.map(item =>{
            return `
            <li><a href="${item.path}">${item.name}</a></li>
            `
        }).join('')}
        </ul>
        </nav>
    </header>
    `
}

export default Header