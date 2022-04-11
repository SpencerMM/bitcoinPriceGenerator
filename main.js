function selectCurrency() {  

    var currencyList = document.getElementById("currencyList");
    var currencyType = currencyList.options[currencyList.selectedIndex]
    getAmount(currencyType); 
    document.getElementById("currency").value = currencyList.options[currencyList.selectedIndex].text;
    
}

function getAmount(selectedObject) {
    var element = selectedObject.value;
    if (element == "USD"){
        fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
            .then(res => res.json())
            .then(data => {
                var amount = `${data.bpi.USD.rate}`;
                document.getElementById("amount").value = amount;
            })
    }

    else if(element == "GBP"){
        fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
            .then(res => res.json())
            .then(data => {
                var amount = `${data.bpi.GBP.rate}`;
                document.getElementById("amount").value = amount;
            })
    }

    else if(element == "EUR"){
        fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
            .then(res => res.json())
            .then(data => {
                var amount = `${data.bpi.EUR.rate}`;
                document.getElementById("amount").value = amount;
            })
    }

    else {
        document.getElementById("amount").value = "N/A";
    }

}