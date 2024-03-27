let form = document.querySelector("form");

form.addEventListener("submit", isEmailExist(e));

async function isEmailExist(event){
    event.preventDefault();

    var val = document.getElementById('l-email').ariaValueMax;
    const resp = fetch("http://localhost:9900/checkEmail", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: val
    })
    .then(resp => {
        if(resp.ok){
            return resp.json();
        }
        else{
            throw new Error("Failed to Fetch the data.");
        }
    })
    .then(data => {
        console.log("Server Response: "+data);
    })
    .catch(error =>{
        console.log(error);
    })
}