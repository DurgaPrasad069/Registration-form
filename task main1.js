// let alllist = {
//     countrylist :[
//         {india:{"states":
//         [ 
//             {Mumbai:{citys:["Lucknow","Kanpur","Agra","Varanasi ","Prayagraj"]}},
//             "Delhi",
//             "Bangalore", 
//             "Kolkata",
//             "Chennai"
//             ]}},
//             {india:{"states":
//             [ 
//                 {Mumbai:{citys:["Lucknow","Kanpur","Agra","Varanasi ","Prayagraj"]}},
//                 "Delhi",
//                 "Bangalore", 
//                 "Kolkata",
//                 "Chennai"
//                 ]}},
//             {india:{"states":
//                 [ 
//                     {Mumbai:{citys:["Lucknow","Kanpur","Agra","Varanasi ","Prayagraj"]}},
//                     "Delhi",
//                     "Bangalore", 
//                     "Kolkata",
//                     "Chennai"
//                     ]}}]

// }

    
// console.log(alllist);


let localarray = [];
let formgroup= document.getElementsByClassName('form-group')


function settolocal() {
    let formobj = {
        Name: document.getElementById('name').value,
        Number: document.getElementById('number').value,
        email: document.getElementById('email').value,
        Gender: document.getElementById('input[id="gender"]:checked').value,
        country: document.getElementById('country').value,
        state: document.getElementById('state').value,
        city: document.getElementById('city').value,
        pincode: document.getElementById('pincode').value,
    };
    localarray.push(formobj);
    localStorage.setItem('user', JSON.stringify(localarray));
    saveddata();
}


function saveddata() {
formgroup.innerhtml='';
    let getdata =JSON.parse(localStorage.getItem('user'));
    getdata.forEach(element => {
     });
}