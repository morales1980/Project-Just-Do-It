//  toggle menu view full / short
(function() {
  var navToggle = document.querySelector('.nav-toggle');
  if(navToggle) {
    navToggle.addEventListener('click', menuToggle);
  }

  function menuToggle() {
    var logo = document.querySelector('.logo');
    var labels = document.querySelectorAll('.menu-full__item-label');
    var aside = document.querySelector('.aside');
    var managerPane = document.querySelector('.manager-pane');
    var managerPaneMobile = document.querySelector('.manager-pane-mobile');

    function hideElements() {
      logo.style.opacity = '0';
      labels.forEach(function(label) {
        label.style.opacity = '0';
      });
      managerPane.style.opacity = '0';
      managerPaneMobile.style.opacity = '1';
    }
    function showElements() {
      logo.style.opacity = '1';
      labels.forEach(function(label) {
        label.style.opacity = '1';
      });
      managerPane.style.opacity = '1';
      managerPaneMobile.style.opacity = '0';
    }

    if(logo.style.display === '') {
      logo.style.display = 'none';
      labels.forEach(function(label) {
        label.style.display = 'none';
      });
      managerPane.style.display = 'none';
      managerPaneMobile.style.display = 'block';
      hideElements();
      aside.style.width = '54px';
    }
    else if(logo.style.display === 'block') {
      logo.style.display = 'none';
      labels.forEach(function(label) {
        label.style.display = 'none';
      });
      managerPane.style.display = 'none';
      managerPaneMobile.style.display = 'block';
      hideElements();
      aside.style.width = '54px';
    } else {
      logo.style.display = 'block';
      labels.forEach(function(label) {
        label.style.display = 'block';
      });
      managerPane.style.display = 'block';
      managerPaneMobile.style.display = 'none';
      setTimeout(showElements, 500);
      aside.style.width = '188px';
    }
  }
})();

// toggle balance dropdown
var dropdownToggle = document.querySelector('.balance__icon-arrow');
var balanceWallet = document.querySelector('.balance__icon-wallet');
var balanceSum = document.querySelector('.balance__sum');
dropdownToggle.addEventListener('click', dropdown);
function dropdown() {
  var balanceContainer = document.querySelector('.balance');
  var balanceWallet = document.querySelector('.balance__icon-wallet');
  var balanceSum = document.querySelector('.balance__sum');

  if((balanceContainer.style.height === '') || (balanceContainer.style.height === '60px')) {
    dropdownToggle.children[0].attributes[0].value = '10.1,6.9 5.5,2.2 0.9,6.9 0.1,6.1 5.5,0.8 10.9,6.1';
    balanceContainer.style.height = '200px';
    balanceWallet.style.fill = '#333333';
    balanceSum.style.color = '#333333';
  } else {
    dropdownToggle.children[0].attributes[0].value = '5.5,6.2 0.1,0.9 0.9,0.1 5.5,4.8 10.1,0.1 10.9,0.9';
    balanceContainer.style.height = '60px';
    balanceWallet.style.fill = '#a6a6a6';
    balanceSum.style.color = '#a6a6a6';
  }
}

//  <input> datepicker instance
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
    });
  }
})();
