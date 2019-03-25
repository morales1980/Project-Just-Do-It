// <input> datepicker instance
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
// draw chart
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
