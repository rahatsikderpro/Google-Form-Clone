// document.querySelector('.divs-container').addEventListener('click', function(event) {
//     // Find the closest new_div_1 element to ensure the tracker aligns with it
//     const clickedDiv = event.target.closest('.new_div_1');
//     if (clickedDiv) {
//         const tracker = document.querySelector('.tracker');
//         const divTop = clickedDiv.getBoundingClientRect().top;
//         const containerTop = document.querySelector('.divs-container').getBoundingClientRect().top;
        
//         // Calculate and set the tracker's top position relative to the container
//         tracker.style.top = `${divTop - containerTop}px`;
//         document.querySelectorAll(".new_div_1").forEach(d => d.classList.remove("focusIndicator"));
//         event.target.classList.add("focusIndicator");
//     }
// });
//document.querySelectorAll('.new_div_1').forEach((div) => div.setAttribute('tabindex', '0'));

document.querySelector('.divs-container').addEventListener('click', function(event){
    const clickDiv = event.target.closest('.new_div_1');
    if (clickDiv) {
        const tracker = document.querySelector('.tracker');
        const getTop = clickDiv.getBoundingClientRect().top;
        const containerTop = document.querySelector('.divs-container').getBoundingClientRect().top;
        tracker.style.top = `${getTop - containerTop}px`;
        
        //blur and unblur function
       
        //left border function
        let hell = document.querySelector('.new_div_1_2');

        document.querySelectorAll('.new_div_1').forEach( (item)=>{
           if (item == clickDiv) {
                item.style.borderLeft = "6px solid blue";
           }
           else{
                item.style.borderLeft = "";
           };         
        });
    };
});
