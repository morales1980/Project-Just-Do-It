//  show/hide modals
(function() {
  //popup triggers
  var triggerLinks = Array.from(document.querySelectorAll('.links .trigger'));
  var triggerLinksModule =  Array.from(document.querySelectorAll('.links-module .trigger'));
  var triggerBanners = Array.from(document.querySelectorAll('.banners .trigger'));
  var triggerMobilePopups = Array.from(document.querySelectorAll('.mobile-bar .trigger'));
  var triggerMobileChat = document.querySelector('.manager-pane-mobile.trigger');
  var triggerDesktopChat = document.querySelector('.manager-pane .trigger');
  var triggerDesktopLogout = document.querySelector('.logout.trigger');

  var triggers = [
    triggerLinks,
    triggerLinksModule,
    triggerBanners,
    triggerMobilePopups,
    triggerMobileChat,
    triggerDesktopChat,
    triggerDesktopLogout,
  ];

  //popups
  var modalBackground = document.querySelector('.popups');
  var popupMobileWallet = document.querySelector('.mobile-wallet-popup');
  var popupMobileNotification = document.querySelector('.mobile-notification-popup');
  var popupMobileMember = document.querySelector('.mobile-member-name-popup');
  var popupLinks = document.querySelector('.links-popup');
  var popupBanners = document.querySelector('.banners-popup');
  var popupLogin = document.querySelector('.login');
  var popupQuit = document.querySelector('.quit');
  var popupChat = document.querySelector('.chat');

  var popups = [
    popupMobileWallet,
    popupMobileNotification,
    popupMobileMember,
    popupLinks,
    popupBanners,
    popupLogin,
    popupQuit,
    popupChat
  ];

  function moveItems() {
    for(var i = 0; i <= triggerLinks.length; i++) {
      var temp = triggerLinks.shift();
      triggers.push(temp);
    }

    if(triggerLinks.length == '0') {
      triggers.shift();
    }

    for(var i = 0; i <= triggerLinksModule.length; i++) {
      var temp = triggerLinksModule.shift();
      triggers.push(temp);
    }

    if(triggerLinksModule.length == '0') {
      triggers.shift();
    }

    for(var i = 0; i <= triggerBanners.length; i++) {
      var temp = triggerBanners.shift();
      triggers.push(temp);
    }

    if(triggerBanners.length == '0') {
      triggers.shift();
    }

    for(var i = 4; i >= triggerMobilePopups.length; i--) {
      var temp = triggerMobilePopups.shift();
      triggers.push(temp);
    }
    if(triggerMobilePopups.length == '0') {
      triggers.pop();
      triggers.shift();
    }
  }

  function hideModalBackground() {
    modalBackground.classList.remove('show');
  }

  function showModalBackground() {
    modalBackground.classList.add('show');
  }

  function hidePopup(popup) {
    popup.classList.remove('show');
  }

  function showPopup(targetPopup) {
    popups.forEach(hidePopup);

    targetPopupElement = document.querySelector('.'+targetPopup);
    targetPopupElement.classList.add('show');

    targetPopupElement.addEventListener('click', function(e) {

      e.stopPropagation();
    });
  }

  moveItems();

  popups.forEach(function(popup) {
    var closeIcon = popup.querySelector('.close-icon');

    if (closeIcon) {
      closeIcon.addEventListener('click', function() {

        hidePopup(popup);
        hideModalBackground();
      });
    }
  });
  triggers.forEach(
    function(trigger) {
      trigger.addEventListener('click', function(e) {

        if(e.currentTarget.hasAttribute('data-popup')) {
          var targetPopup = e.currentTarget.getAttribute('data-popup');

          showPopup(targetPopup);
          showModalBackground();
        };
      });
    }
  );

  modalBackground.addEventListener('click', function(e) {

    var children = Array.from(this.children);
    children.forEach(hidePopup);

    hideModalBackground();
  });

  popupQuit.querySelector('.button--cancel').addEventListener(('click'), hideModalBackground);
})();

//  toggle menu view full / short
(function() {
  var navToggle = document.querySelector('.nav-toggle');
  var aside = document.querySelector('.aside');
  var mainContainer = document.querySelector('.main-container');
  var mobileBreakpoint = window.matchMedia('(max-width: 767px)');
  var desktopBreakpoint = window.matchMedia('(min-width: 768px)');

  function addMobileClassOnBreakpoint(breakpoint) {
    if (breakpoint.matches) {
      aside.classList.remove('full-view');
      aside.classList.remove('show-elements');
      aside.classList.add('short-view');
      mainContainer.classList.remove('desktop');
      mainContainer.classList.add('mobile');
    }
  }

  function addDesktopClassOnBreakpoint(breakpoint) {
    if (breakpoint.matches) {
      aside.classList.remove('short-view');
      aside.classList.add('full-view');
      setTimeout(showElements, 500);
      mainContainer.classList.remove('mobile');
      mainContainer.classList.add('desktop');
    }
  }

  function addClassOnBreakpoint(breakpoint) {
    if (breakpoint.matches) {
      aside.classList.remove('full-view');
      aside.classList.remove('show-elements');
      aside.classList.add('short-view');
      mainContainer.classList.remove('desktop');
      mainContainer.classList.add('mobile');
    }
    else {
      aside.classList.remove('short-view');
      aside.classList.add('full-view');
      setTimeout(showElements, 500);
      mainContainer.classList.remove('mobile');
      mainContainer.classList.add('desktop');
    }
  }

  function showElements() {
    aside.classList.add('show-elements');
  }

  function menuToggle() {

    var asideClass = Array.from(document.querySelector('.aside').classList);

    if(asideClass.includes('short-view')) {
      aside.classList.remove('short-view');
      aside.classList.add('full-view');
      mainContainer.classList.remove('mobile');
      mainContainer.classList.add('desktop');
      setTimeout(showElements, 500);
    } else {
      aside.classList.remove('full-view');
      aside.classList.add('short-view');
      aside.classList.remove('show-elements');
      mainContainer.classList.remove('desktop');
      mainContainer.classList.add('mobile');
    }
  }

  navToggle.addEventListener('click', menuToggle);

  mobileBreakpoint.addListener(addClassOnBreakpoint);
  addDesktopClassOnBreakpoint(desktopBreakpoint);
  addMobileClassOnBreakpoint(mobileBreakpoint);

})();

//  toggle notification dropdown
(function() {
  var navNotification = document.querySelector('.notification');
  var navNotificationDropdown = document.querySelector('.notification-dropdown');
  var closeIcon = document.querySelector('.notification-dropdown__close-icon')

  navNotification.addEventListener('click', showNotificationDropdown);
  closeIcon.addEventListener('click', hideNotificationDropdown);

  function showNotificationDropdown() {
    navNotificationDropdown.classList.add('notification-dropdown__show');
  }

  function hideNotificationDropdown(e) {
    navNotificationDropdown.classList.remove('notification-dropdown__show');
    e.stopPropagation();
  }
})();

//  toggle wallet dropdown
(function() {
  var dropdownToggle = document.querySelector('.wallet__icon-arrow');
  var topBar = document.querySelector('.top-bar');
  var topBarClass = Array.from(document.querySelector('.top-bar').classList);

  dropdownToggle.addEventListener('click', walletDropdown);

  function walletDropdown() {
    if(topBarClass.includes('wallet-dropdown')) {
      hideWalletDropdown();
    } else {
      showWalletDropdown();
    }
  }

  function showWalletDropdown() {
    topBar.classList.add('wallet-dropdown');
    topBarClass = Array.from(document.querySelector('.top-bar').classList);
  }

  function hideWalletDropdown(e) {
    topBar.classList.remove('wallet-dropdown');
    topBarClass = Array.from(document.querySelector('.top-bar').classList);
  }

})();

//  switch pages
(function() {
  var menuItems = document.querySelectorAll('.menu-full__item');
  menuItems.forEach(getPageName);

  function getPageName(menuItem) {

    var targetPageName = menuItem.getAttribute('data-page');
    var targetPage = document.querySelector('.'+targetPageName);
    var pages = Array.from(document.querySelector('.main-content').children);

    menuItem.addEventListener('click', function() {

      menuItems.forEach(function(item) {
        item.classList.remove('menu-full__item--selected');
      });

      pages.forEach(function(targetPage) {
        targetPage.classList.remove('show');
      });

      menuItem.classList.add('menu-full__item--selected');

      targetPage.classList.add('show');
    });
  }
})();

//  spawn datepicker instance
(function() {
  var pickerGeneralOne = new Pikaday({
    field: document.getElementById('general-dpicker-start'),
    format: 'DD.MM.YYYY'
  });
  var pickerGeneralTwo = new Pikaday({
    field: document.getElementById('general-dpicker-end'),
    format: 'DD.MM.YYYY'
  });
  var pickerDetailsOne = new Pikaday({
    field: document.getElementById('details-dpicker-start'),
    format: 'DD.MM.YYYY'
  });
  var pickerDetailsTwo = new Pikaday({
    field: document.getElementById('details-dpicker-end'),
    format: 'DD.MM.YYYY'
  });
  var pickerPayoutOne = new Pikaday({
    field: document.getElementById('payout-dpicker-start'),
    format: 'DD.MM.YYYY'
  });
  var pickerPayoutTwo = new Pikaday({
    field: document.getElementById('payout-dpicker-end'),
    format: 'DD.MM.YYYY'
  });
})();

//  draw chart
(function() {
  var ctx = document.getElementById('earnings-chart');
  if (ctx != null) {
    ctx.getContext('2d');
    var earningsChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10"],
        datasets: [
          {
            label: "Signups",
            backgroundColor: "#80bfca",
            borderColor: "#80bfca",
            data: [ 52, 51, 41, 94, 26, 6, 72, 9, 21, 88 ],
          },
          {
            label: "FTD",
            backgroundColor: '#ffa200',
            borderColor: '#ffa200',
            data: [ 6, 72, 1, 0, 47, 11, 40, 44, 63, 76 ],
          },
          {
            label: "Earned",
            backgroundColor: '#59b66d',
            borderColor: '#59b66d',
            data: [ 59, 49, 68, 90, 67, 41, 13, 38, 48, 48],
            hidden: true,
          }
        ]
      },
      options: {
        maintainAspectRatio: true
      }
    });
  }
})();
