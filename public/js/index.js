$(document).ready(function(){
  //Initialize Materialize CSS JS
  M.AutoInit();

  //triggers dropdown in the navigation
  $('.dropdown-trigger').dropdown({
    coverTrigger: false
  });
  $('.notifs-trigger').dropdown({
    constrainWidth: false,
    coverTrigger: false
  });

  //dropdown for account Dashboard
  $('.account-dropdown').dropdown({
    coverTrigger:false
  });

  //triggers Side Navigation Bar animation for SideNavs in the Dashboard
  $('.sidenav').sidenav();

  //triggers collapsible components for SideNavs
  $('.collapsible').collapsible({
  });

  //Scrollspy allows sections to be scrolled
  $('.scrollspy').scrollspy();
});
