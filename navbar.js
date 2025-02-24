
//nav and underline js
const underlineX = document.querySelector('.underline').getBoundingClientRect();
const underlineLeft = document.querySelector('.underline');
const underline = document.querySelector('.underline');
const navDivs = document.querySelectorAll('.navDiv');
document.querySelectorAll('.navDiv').forEach((e, index)=>{
    navDivs[0].click();
    e.addEventListener('click', () =>{
        const navTabX = e.getBoundingClientRect();
        underlineLeft.style.left = `${navTabX.left}px`;  
        if(index == 0){
            document.querySelector('.subMain').classList.remove("nevBarToggle");
            document.querySelector('.subMain2').classList.add("nevBarToggle");
            document.querySelector('.subMain3').classList.add("nevBarToggle")
        }
        if(index == 1){
            document.querySelector('.subMain').classList.add("nevBarToggle");
            document.querySelector('.subMain2').classList.remove("nevBarToggle");
            document.querySelector('.subMain3').classList.add("nevBarToggle")
        }
        if(index == 2){
        document.querySelector('.subMain3').classList.remove("nevBarToggle");
        document.querySelector('.subMain').classList.add("nevBarToggle");
        document.querySelector('.subMain2').classList.add("nevBarToggle");
        }
    });
});
