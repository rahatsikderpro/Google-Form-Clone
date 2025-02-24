
document.addEventListener('click', function(event) {
  // Check if the click was inside a .custom-dropdown
  const clickDiv2 = event.target.closest('.custom-dropdown');
  //for close pre active dropdown
  document.querySelectorAll('.custom-dropdown.active-dropdown').forEach( (dDown)=>{
    if (dDown !== clickDiv2){
      dDown.classList.remove('active-dropdown');
    }
  });
  if (clickDiv2) {
    clickDiv2.classList.add('active-dropdown');
  };
  //hide after selection & change button text
  const clickDiv3 = event.target.closest('.dropdown_content');
  if(clickDiv3) {
    clickDiv2.classList.remove('active-dropdown');
    const dropdownToggle = clickDiv2.querySelector('.dropdown-toggle');
    if (dropdownToggle) {
      dropdownToggle.innerHTML = clickDiv3.innerHTML;
    }
  };
  // Get all dropdown menu items
  //dropdown activation on click
  // Hide all content sections
  const clickDiv4 = event.target.closest('.dropdown_content')
  if (!clickDiv4) return;
  const foundDiv = event.target.closest('.q-div'); 
  let hello = clickDiv4.getAttribute("data-value");
  if (foundDiv) {
    // Now find the child div with the corresponding ID within the parent
    const selectedSection = foundDiv.querySelector(`#${hello}`);
    const selectClass = selectedSection.getAttribute("class");
    if (selectedSection) {
      // Perform actions on the found child div
      foundDiv.querySelectorAll('.content.active').forEach( (dContent)=>{
        dContent.classList.remove('active');
      }); 
    selectedSection.classList.add('active');
    }
  }
});
