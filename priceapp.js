let api_url = "https://api.coingecko.com/api/v3/coins/icon"


document.addEventListener("DOMContentLoaded", () => { 
  
  function fetchData() {
    fetch(api_url)
      .then(res => res.json())
      .then(response => {
        const price = "$" + (response.market_data.current_price.usd).toFixed(3)
        const percent = response.market_data.price_change_percentage_24h.toFixed(2) + "%"
        const dataset = [price, percent]
        return dataset
      })
      .then(data => renderData(data))

  }

  function renderData(data) { 
    document.querySelector("#price").innerHTML = data[0];
    document.querySelector("#percent").innerHTML = data[1]
  }
  fetchData();


})



  
      


  

