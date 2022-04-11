
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

/*
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

*/








//test_btn.addEventListener("click", getTestResult)
//const result = document.getElementById("result");
/*
function getTestResult() {

    
        .then(res => res.json())
        .then(data => {
            result.innerHTML += `<p>${data.time.updated}"</p>`
        })

}



function fetchFacts() {

    let exampleText = "hello";
    console.log(exampleText);

}

function fetch2() {

    fetch("https://https://catfact.ninja/fact?max_length=50'")
    .then(response => response.text())
    .then(data => {
        console.log(data);
    })
    .catch(err => console.log(err))

}

fetch("https://https://catfact.ninja/fact")
.then(response => response.json())
.then(data => console.log(data))

function fetch3() {
    
    fetch("https://https://catfact.ninja/fact")
    .then(response => response.json())
    .then(data => console.log(data))
}
*/