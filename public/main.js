btn = document.getElementById('reg-submit');
form = document.querySelector('form');



// btn.addEventListener("click", (e)=>{
//     e.preventDefault();
    
//     Object.keys(formDataObj).forEach(el => {
//         flag = 0;
//         if(Object.values(formDataObj[el])==''){
//             document.getElementById(`${el}-msg`).innerText="Can't be empty."
//             flag += 1;
//         }
//     })

//     reg = /([A-Za-z])\w+/
//     if(reg.test(formDataObj.fname)==false){
//         document.getElementById(`fname-msg`).innerText="Can't contain any number."
//         flag+=1
//     }
//     if(reg.test(formDataObj.lname)==false){
//         document.getElementById(`lname-msg`).innerText="Can't contain any number."
//         flag +=1
//     }
// })

form.addEventListener("submit", async function sendData(event){
    event.preventDefault();
    
    const formData = new FormData(form);
    const formDataObj = {};
    formData.forEach(function(value, key){
        formDataObj[key] = value;
    });
    const resp = await fetch("/postReg", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(formDataObj)
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
        console.log("Server response:" + data['data']);
        var linker = document.getElementById('linker');
        var email = document.getElementById('email').value;
        linker.style.display = "flex";
        linker.style.flexDirection = "column";
        var link = `<p>Thank you registering</p><p>CLick on below link to activate your account</p><a href="http://localhost:9900/activate?act-code=${data['data']}&email=${email}">http://localhost:9900/activate?act-code=${data['data']}&email=${email}</a>`
        linker.innerHTML=link;
    })
    .catch(error => {
        console.log(error);
    })
});