const dropDownButton = document.getElementById('dropDownButton');
const sideBar = document.getElementById('sideBar');
const sideBarButtons = document.querySelectorAll('.sideBarButtons');
const mainContentArea = document.getElementById('mainContent');

let sideBarActivation = true;
const sideBarLabels = ['Dashboard', 'News Feed', 'Company Page', 'Teams', 'My Profile'];


dropDownButton.addEventListener('click', () => {sideBarMinimizeAndMaximize()});

function sideBarMinimizeAndMaximize() {

  if (sideBarActivation == true) {
    sideBar.style.transition = '1s';
    sideBar.style.width = '0px';
    sideBar.style.height = '0%';

    for(let i = 0; i < sideBarButtons.length; i++) {
      sideBarButtons[i].textContent = '';
    }

    sideBarActivation = false;
    mainContentMinimizeAndMaximize(sideBarActivation);
  }
  else {
    sideBar.style.transition = '1.s';
    sideBar.style.width = '318px';
    sideBar.style.height = '100%';

    for(let i = 0; i < sideBarButtons.length; i++) {
      sideBarButtons[i].textContent = sideBarLabels[i];
    }

    sideBarActivation = true;
    mainContentMinimizeAndMaximize(sideBarActivation);
  }
};

function mainContentMinimizeAndMaximize(sideBarActivation) {

  if(sideBarActivation == false) {
    mainContent.style.transition = '1.0s';
    mainContent.style.marginLeft = '100px';
    mainContent.style.width = '90%';
  } else {
    mainContent.style.transition = '1.0s';
    mainContent.style.marginLeft = '350px';
    mainContent.style.width = '80%';
  }


};
