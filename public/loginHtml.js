let form = document.querySelector("form");

form.addEventListener("submit", async function(event){
    event.preventDefault();

    var email = document.getElementById('l-email').value;
    var pas = document.getElementById('l-pass').value;
    var data = {
        email: email,
        pass: pas
    }
    const resp = fetch("http://localhost:9900/checkEmail", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(data)
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
        if(data.data=="done"){
            document.getElementById('linker').innerHTML="";
            document.getElementById('linker').innerText="Login successfully"
        }
        else{
            document.getElementById('linker').innerHTML="";
            document.getElementById('linker').innerText="Inputs does not macth. Refresh the page and Try again!"
        }
    })
    .catch(error =>{
        console.log(error);
    })
});