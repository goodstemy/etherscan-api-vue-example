var API_TOKEN = 'BVD9Z395WNEIRP95519WWBR11UZ7CBTV49';

var vue = new Vue({
  el: '.accounts',

  data: {
    transactions: []
  },

  created: function() {
    this.getTransactions();
  },

  methods: {
    getTransactions: getTransactions
  }
});

function getTransactions() {
  axios.get('https://api.etherscan.io/api?module=logs&action=getLogs\n' +
    '&fromBlock=379224\n' +
    '&toBlock=latest\n' +
    '&address=0x33990122638b9132ca29c723bdf037f1a891a70c\n' +
    '&topic0=0xf63780e752c6a54a94fc52715dbc5518a3b4c3c2833d301a204226548a2a8545\n' +
    '&apikey=' + API_TOKEN)
    .then(function(response) {
      for (var i = 0; i <= 99; i++) {

        vue.transactions.push(
          response.data.result[i]
        );

      }
    })
    .catch(function(error) {
      console.log(error);
    });
}