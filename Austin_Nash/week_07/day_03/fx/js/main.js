console.log('working');

const fx = function (event) {
   event.preventDefault();

    const endpoint = 'latest'
    const access_key = '5317fdf41d60db7a13bf31c5f5fabdd8';
    const base = 'EUR'
    const symbols = $('#symbols').val();
    console.log(symbols);

    console.log(`http://data.fixer.io/api/${endpoint}?access_key=${access_key}&base=${base}&symbols=${symbols}`);

    $.getJSON({ //or .ajax
        url: `http://data.fixer.io/api/${endpoint}?access_key=${access_key}&base=${base}&symbols=${symbols}`,
        dataType: 'jsonp',
        success: function(json) {

            rate = json.rates
            rateVal = Object.values(rate)
            rateKey = Object.keys(rate)
            console.log(rateVal);
            console.log(rateKey);

            $("#rateVal0").text(`Current Rate: 1 ${base} = ${rateVal[0]} ${rateKey[0]}`)
            if (rateVal[1] > .1) {
              $("#rateVal1").text(`Current Rate: 1 ${base} = ${rateVal[1]} ${rateKey[1]}`)
            } if (rateVal[2] > .1) {
            $("#rateVal2").text(`Current Rate: 1 ${base} = ${rateVal[2]} ${rateKey[2]}`)
            }

            baseCurrency = json.base
            console.log(baseCurrency);
            // $("#base").text(`Base Currency: ${base}`)

            timestamp = json.timestamp
            time = new Date(timestamp * 1000).format('M jS, Y g:i A')
            timeZone = new Date(timestamp * 1000).format('e')
            console.log(time);
            $("#timestamp").text(`Current as of: ${time} (${timeZone})`) // need to conver to readable time
        }
    });

};
// Must pay first
const conv = function (event){
  event.preventDefault();

  const endpoint = 'convert';
  const access_key = '5317fdf41d60db7a13bf31c5f5fabdd8';

  const from = $('#from').val();
  const to = $('#to').val();
  const amount = $('#fromAmount').val();

console.log(`http://data.fixer.io/api/${endpoint}?access_key=${access_key}&from=${from}&to=${to}&amount=${amount}`);

  $.getJSON({ //or .ajax
      url: `http://data.fixer.io/api/${endpoint}?access_key=${access_key}&from=${from}&to=${to}&amount=${amount}`,
      dataType: 'jsonp',
      success: function(json) {

        subscription_required = json.error.info
        console.log(subscription_required);
        $('#amount').text(subscription_required)

      }
  });
};


const historic = function (event) {
   event.preventDefault();

    const endpoint = $('#data').val();
    console.log(endpoint);
    const access_key = '5317fdf41d60db7a13bf31c5f5fabdd8';
    const base = 'EUR'
    const symbols = $('#currency').val();
    console.log(symbols);

    console.log(`http://data.fixer.io/api/${ endpoint }?access_key=${ access_key }&base=${ base }&symbols=${symbols}`);

    $.getJSON({ //or .ajax
        url: `http://data.fixer.io/api/${ endpoint }?access_key=${ access_key }&base=${ base }&symbols=${symbols}`,
        dataType: 'jsonp',
        success: function(json) {

          rateVal = Object.values(json.rates)
          rateKey = Object.keys(json.rates)
          console.log(rateVal);
          console.log(rateKey);
          baseCurrency = json.base
          timestamp = json.timestamp
          time = new Date(timestamp * 1000).format('M jS, Y')

          $("#historic_data").text(`On ${time} 1 ${base} = ${rateVal} ${rateKey}`)

        }
    });

};

    $(document).ready(function () {
      $('#search_symbol').on('click', fx);
      $('#amount_conversion').on('click', conv);
      $('#historic_search').on('click', historic);

    });
