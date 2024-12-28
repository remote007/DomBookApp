import {baseURL} from "./baseURL"
// window.onload = () => {
//     getData();
// };

let form = document.getElementById("form_id");
form.addEventListener("submit",async function () {
    event.preventDefault();
    var title = document.getElementById("title_id").value;
    var author = document.getElementById("author_id").value;
    var category = document.getElementById("category_id").value;
    var bookObj = {
        title,
        author,
        category,
        "isAvailable": true,
        "isVerified": false,
        "borrowedDays": null,
        "imageUrl": "https://m.media-amazon.com/images/I/71ZB18P3inL._SY522_.jpg"
    }
    try{
        fetch("https://indecisive-coherent-scar.glitch.me/books",{
            method: "POST",
            headers: {
                "content-type":"application/json",
            },
            body:JSON.stringify(bookObj),
        });
        alert("Book added successfully");
    }
    catch(err){
        alert("Error in adding Book");
        console.log(err);
    }
});