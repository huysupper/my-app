import Header from "../components/header"
import footer from "../components/footer"
function AboutPage(){
    return `
    <div id="all">
    <img src="./src/img/Group 3395.png" alt="" class="img-about">
    ${Header()}
    <div class="about">
    <div class="about_title">
        <div class="icon-about">
            <ul class="lits-about">
                <li><img src="./src/img/Frame (5).png" alt=""></li>
                <li><img src="./src/img/Frame (6).png" alt=""></li>
                <li><img src="./src/img/Frame (7).png" alt=""></li>
                <li> </li>
            </ul>
            <img src="./src/img/Line 1sda.png " alt="" style="margin-left: 40px;"> 
         </div>
        <div class="about-me">
             <h1 class="mota-about">Elementum diam, ornare nisl luctus. Vitae viverra in mi egestas hendrerit. Vitae ornare suspendisse porttitor habitasse. Elit vitae aliquet sit id pretium interdum urna, odio a. 💥</h1>
         </div>
     </div>
</div>
<div class="main">
    <div class="kinh_nghiem">
        <div class="kinh_nghiem1">
            <img src="./src/img/Group 18861.png" class="img_kn1" alt="">
            <div class="mota">
                <h4 class="heading-kn">Working experience</h4>
                <p class="mota-kn">Tincidunt purus lacus nascetur nunc commodo. Netus at dignissim urna quam. Imperdiet proin sapien posuere egestas. Tristique nam magna velit odio ullamcorper eget donec.</p>
                <img  src="./src/img/Group 17.png" alt="">
            </div>
        </div>
        <div class="kinh_nghiem2">
            <div class="box-kn2">
                <div class="img-kn2">
                    <img src="./src/img/Frame (5a).png" alt="">
                </div>
                <div class="mota2">
                    <h5 class="heading-kn2">Slack</h5>
                    <p class="mota-kn2">Product Design - 4 Years Experince</p>
                </div>
            </div>
            <div class="box-kn2">
                <div class="img-kn2">
                    <img src="./src/img/Frame (6a).png" alt="">
                </div>
                <div class="mota2">
                    <h5 class="heading-kn2">Firefox</h5>
                    <p class="mota-kn2">Sr. UI Design - 4 Years Experince</p>
                </div>
            </div>
            <div class="box-kn2">
                <div class="img-kn2">
                    <img src="./src/img/Frame (7a).png" alt="">
                </div>
                <div class="mota2">
                    <h5 class="heading-kn2">Digital Ocean</h5>
                    <p class="mota-kn2">UI & Motion Designer - 4 Years Experince</p>
                </div>
            </div>
            <div class="box-kn2">
                <div class="img-kn2">
                    <img src="./src/img/Frame (8).png" alt="">
                </div>
                <div class="mota2">
                    <h5 class="heading-kn2">Mailchim</h5>
                    <p class="mota-kn2">UI Designer - 4 Years Experince</p>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="main">
    <h2 class="about-thuonghieu" >Our Big Clients</h2>
    <div class="img-client">
        <div class="img_thuonghieu">
            <img src="./src/img/Logo-4.png" alt="">
        </div>
        <div class="img_thuonghieu">
            <img src="./src/img/Logo-3.png" alt="">
        </div>
        <div class="img_thuonghieu">
            <img src="./src/img/Logo-5.png" alt="">
        </div>
        <div class="img_thuonghieu">
            <img src="./src/img/Logo-10.png" alt="">
        </div>
    </div>
    <div class="img-client">
        <div class="img_thuonghieu">
            <img src="./src/img/Logo-8.png" alt="">
        </div>
        <div class="img_thuonghieu">
            <img src="./src/img/Logo-2.png" alt="">
        </div>
        <div class="img_thuonghieu">
            <img src="./src/img/Logo-7.png" alt="">
        </div>
        <div class="img_thuonghieu">
            <img src="./src/img/Logo-6.png" alt="">
        </div>
    </div>
    <div class="img-client">
        <div class="img_thuonghieu">
            <img src="./src/img/Logo-11.png" alt="">
        </div>
        <div class="img_thuonghieu">
            <img src="./src/img/Logo-1.png" alt="">
        </div>
        <div class="img_thuonghieu">
            <img src="./src/img/Logo (1).png" alt="">
        </div>
        <div class="img_thuonghieu">
            <img src="./src/img/Logo-2.png" alt="">
        </div>
    </div>
</div>
<div class="about-kn">
<div class="box-kn">
     <div class="box-title-kn">
            <div class="heading-mota-kn">
                <h4 class="heading-box-kn">100+</h4>
                <p class="mota-box-kn">Project Completed</p>
            </div>
            <div class="heading-mota-kn">
                <h4 class="heading-box-kn">4+</h4>
                <p class="mota-box-kn">Years Experience</p>
            </div>
            <div class="heading-mota-kn">
                <h4 class="heading-box-kn">200+</h4>
                <p class="mota-box-kn">Satisfied Client</p>
            </div>
            <div class="heading-mota-kn">
                <h4 class="heading-box-kn">300+</h4>
                <p class="mota-box-kn">Good Testimonials</p>
            </div>
     </div> 
     <div class="img-box-kn">
        <img src="./src/img/Group 20803.png" alt="" >
     </div>          
</div>
</div>
<div class="main">
    <div class="project support">
        <img class="img-sp" src="./src/img/Mask group (1).png" alt="">
        <div class="project-suppost">
           <h2 class="headinh-sp">Have a project idea to <br>
            collaborate with?</h2>
            <a href="#" class="contact-sp">Contact Us</a>
        </div>
        
    </div>
</div>
    ${footer()}
    </div>
    `
}

export default AboutPage