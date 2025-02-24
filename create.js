let cloneCount = 0; // To keep track of the number of clones
document.getElementById('create_option_1').addEventListener('click', function() {
    // Increment the clone counter to ensure unique IDs
    cloneCount++;
    // Get the div to clone
    let divToClone = document.getElementById('test_111111');

    // Create a new div and set its innerHTML to the original div's innerHTML
    let newDiv = document.createElement('div');
    newDiv.classList.add('new_div_1');
    newDiv.classList.add('border');
    newDiv.innerHTML = divToClone.innerHTML;

    // Change the ID and `for` attributes of the toggle button in the cloned div
    let toggleLabel = newDiv.querySelector('label[for="toggle_button1"]');
    let toggleInput = newDiv.querySelector('#toggle_button1');

    if (toggleLabel && toggleInput) {
        let newId = `toggle_button_${cloneCount}`; // Generate a unique ID using cloneCount
        toggleLabel.setAttribute('for', newId);    // Set the new 'for' attribute
        toggleInput.setAttribute('id', newId);     // Set the new 'id' attribute
    } else {
        console.error('Toggle elements not found in the cloned content.');
    }

    // Append the cloned div to the target container
    document.getElementById('clonedDivs').appendChild(newDiv);

});

// Use event delegation to handle the delete button click
document.getElementById('clonedDivs').addEventListener('click', function(event) {
    // Check if the clicked element is the delete icon
    if (event.target.classList.contains('material-symbols-outlined') && event.target.id === 'delete_button') {
        // Remove the parent div of the delete icon
        event.target.closest('.new_div_1').remove();
    }
});
//clone in dropdown toggle option
document.addEventListener('click', (event)=>{
    const checkboxTarget = event.target.closest('.content');
    const clickText = event.target.closest('.addOthers5');
    if(clickText){
        const checkboxTarget1 = checkboxTarget.querySelector('.checkboxTarget');
        const newDiv = document.createElement('div');
        newDiv.classList.add('checkboxContent');
        newDiv.innerHTML = checkboxTarget1.innerHTML;
        const section5sub = checkboxTarget.querySelector('#section5sub');
        section5sub.appendChild(newDiv);
    }
    if (!clickText){
        return
    };
    
});


// document.getElementById('clicktoOthers2').addEventListener('click', ()=>{
//     clone('checkboxTarget2', 'checkboxContent', 'section4sub')
// });
// document.getElementById('clicktoOthers3').addEventListener('click', ()=>{
//     clone('checkboxTarget3', 'coustom_multi_choise', 'section3sub')
// });

// function clone (targetedClass, classToAdd, appendDiv){ 
//     //('[which div to clone]', '[and that div class]', '[apenddiv ID]')
//     const checkboxContentClone1 = document.querySelector('.' + targetedClass)
//     const newDiv = document.createElement('div');
//     newDiv.classList.add(classToAdd);
//     newDiv.innerHTML = checkboxContentClone1.innerHTML;
//     document.getElementById(appendDiv).appendChild(newDiv);
// }
