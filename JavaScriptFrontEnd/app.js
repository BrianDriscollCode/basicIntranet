const dropDownButton = document.getElementById('dropDownButton');
const sideBar = document.getElementById('sideBar');
const sideBarButtons = document.querySelectorAll('.sideBarButtons');
const mainContentArea = document.getElementById('mainContent');

//sidebarButtons
const dashboardButton = document.getElementById('dashboardButton');
const newsFeedButton = document.getElementById('newsFeedButton');
const companyPageButton = document.getElementById('companyPageButton');
const teamsButton = document.getElementById('teamsButton');
const myProfileButton = document.getElementById('myProfileButton');

let sideBarActivation = true;
const sideBarLabels = ['Dashboard', 'News Feed', 'Company Page', 'Teams', 'My Profile'];

//top left button for side bar
dropDownButton.addEventListener('click', () => {sideBarMinimizeAndMaximize()});

//buttons on sidebar
dashboardButton.addEventListener('click', () => {sideBarButtonNavigate(dashboardButton.value)});
newsFeedButton.addEventListener('click', () => {sideBarButtonNavigate(newsFeedButton.value)});
companyPageButton.addEventListener('click', () => {sideBarButtonNavigate(companyPageButton.value)});
teamsButton.addEventListener('click', () => {sideBarButtonNavigate(teamsButton.value)});
myProfileButton.addEventListener('click', () => {sideBarButtonNavigate(myProfileButton.value)});


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

function sideBarButtonNavigate(whichButton) {

  if (whichButton == 'dashboard') {
    window.location.href = "/";
  }
  else if (whichButton == 'newsFeed') {
    window.location.href = "/news-feed";
  }
  else if (whichButton == 'companyPage') {
    window.location.href = "/company-page";
  }
  else if (whichButton == 'teams') {
    window.location.href = "/teams";
  }
  else if (whichButton == 'myProfile') {
    window.location.href = "/my-profile";
  }
};
