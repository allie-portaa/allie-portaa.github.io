console.log('working')



let button = document.querySelector('#searchButton')


async function getData(event){

    event.preventDefault()

    let searchInput = document.getElementById('inputBar').value

    let url = `https://api.openbrewerydb.org/breweries?by_postal=${searchInput}`
    

    fetch(url)
    .then(res => {
        return res.json()
    })
    .then( res => {
        console.log("success!", res)
        
        var breweriesList = ''
       
        for (let i = 0 ; i < res.length ; i++) {
            let container = document.createElement("div")
            container.classList.add("data-container")
            let ithBreweryName = res[i].name
            let ithBreweryType = res[i].brewery_type
            let ithphoneNumber = res[i].phone
            let ithStreet = res[i].street
            let ithArrayItem = "<div class='new-container'>" + "<p>"  + ithBreweryName + "<p>" + "<h5>"  
            + "type: " + ithBreweryType + "<p>"
            + " phone number: " + ithphoneNumber  +"<p>" + "street address: " + ithStreet + 
            "<p>" +"</div>"
            breweriesList = breweriesList + ithArrayItem
        } 

            document.getElementById('breweries').innerHTML = breweriesList

    } ) 
    .catch (err=>{
        console.log("error!", err)
    })

}

button.addEventListener('click', getData)


function emailMe (){
    alert("Please email me at allie.porter92@gmail.com or call me at (301)-943-9591")
}

const contact = document.getElementById("contact")

contact.addEventListener('click', emailMe) 
