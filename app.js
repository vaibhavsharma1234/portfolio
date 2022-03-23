const sections = document.querySelectorAll('.section');
const secBtns = document.querySelectorAll('.controlls');
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');


function PageTransitions() {
    // button clck actve class
    for(let i = 0; i< sectBtn.length; i++){
        sectBtn[i].addEventListener('click', function() {
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
            this.className += ' active-btn';
           // here this Refers tO this function read about this

        } )
    }
    // section active 
    allSections.addEventListener('click', (e) =>{
        // console.log(e.target) ;
        const id = e.target.dataset.id;
        //jis bhi id pe click kranga i mean button usko data ko target krna ke liye dataset
        if(id){
            // remove selected from the other btns
            secBtns.forEach((btn) =>{
                btn.classList.remove('active')
            })
            e.target.classList.add('active')


            // hide other sections
            sections.forEach((section)=>{
                section.classList.remove('active')
            })
            const element = document.getElementById(id);
            //whatever element we are on we are passing there id
            element.classList.add('active');
            // isse kya ho rha ab ki jispe click kro usko active class mil rhi and dusra se hath rhi h
        }
    })
    // toggle theme
    const themeBtn = document.querySelector('.theme-btn');
    themeBtn.addEventListener('click',() =>{
        let element = document.body;
        element.classList.toggle('light-mode')
    })
}
PageTransitions();