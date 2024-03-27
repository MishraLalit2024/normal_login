const form = document.querySelector("form");

form.addEventListener("submit", async function postPwd(event){
    event.preventDefault();

    const params    = new URLSearchParams(document.location.search);
    const s         = params.get("email");
    pwd             = document.getElementById('c-pass').value;
    rpwd            = document.getElementById('r-pass').value;
    var formData    = {
        pwd         : pwd,
        email       : s
    }

    if(pwd == rpwd){
        form.addEventListener("submit", (evt)=> {
            evt.preventDefault()
        })
    }
    else{
        document.getElementById('msg').innerText = "Please confirm the password again."
        return false;
    }
    const resp = await fetch("/postPas", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        }, 
        body: JSON.stringify(formData)
    })
    .then(resp => {
        if(resp.ok){
            return resp.json();
        }
        else{
            throw new Error("Failed to Fetch the Data.");
        }
    })
    .then(data=>{
        console.log("Server response:" + data);
        document.getElementById('linker').innerText="Hello";
    })
    .catch(error => {
        console.log(error);
    })
})
    

document.getElementById('reset').addEventListener('click', ()=>{
    document.getElementById('msg').innerHTML = "&nbsp;";
})