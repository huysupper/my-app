const AdminPage=()=>{
    return `
    <div class="sidebar">
                    <div class="sidebar-top">
                        <img src="../src/img/logo.png" alt="" width="176px">
                    </div>
                    <div class="sidebar__caption">
                        Admin tools
                    </div>
                    <div class="sidebar-menu">
                        <a href="" class="link-menu active">
                            <div class="menu-icon">
                                <i class="fa-solid fa-layer-group"></i>
                            </div>
                            <div class="menu-text">
                               <p> Project</p>
                            </div>
                        </a>
                        <a href="" class="link-menu ">
                            <div class="menu-icon">
                                <i class="fa-brands fa-edge"></i>
                            </div>
                            <div class="menu-text">
                               <p> About</p>
                            </div>
                        </a>
                        <a href="" class="link-menu">
                            <div class="menu-icon">
                                <i class="fa-regular fa-pen-to-square"></i>
                            </div>
                            <div class="menu-text">
                               <p> Contact</p>
                            </div>
                        </a>
                        <a href="" class="link-menu">
                            <div class="menu-icon">
                                <i class="fa-solid fa-mountain-sun"></i>
                            </div>
                            <div class="menu-text">
                               <p> Preview</p>
                            </div>
                        </a>
                        <a href="" class="link-menu">
                            <div class="menu-icon">
                                <i class="fa-brands fa-unity"></i>
                            </div>
                            <div class="menu-text">
                               <p>Campaign</p>
                            </div>
                        </a>
                        <a class="btn_link_project" href="/"><button class="btn btn-success">Log out</button></a>
                    </div>
                </div>
                
    `
}

export default AdminPage