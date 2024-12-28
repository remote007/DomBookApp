import {baseURL} from "./baseURL.js"
// window.onload = () => {
//     getData();
// };

let form = document.getElementById("form_id");
form.addEventListener("submit",async function () {
    event.preventDefault();
    var title = document.getElementById("title_id").value;
    var author = document.getElementById("author_id").value;
    var category = document.getElementById("category_id").value;
    var isAvailable= true;
    var isVerified= false;
    var borrowedDays= 0;
    var imageUrl= "https://m.media-amazon.com/images/I/71ZB18P3inL._SY522_.jpg";
    var bookObj = {
        title,
        author,
        category,
        isAvailable,
        isVerified,
        borrowedDays,
        imageUrl
    }
    try{
        await fetch("https://indecisive-coherent-scar.glitch.me/books",{
            method: "POST",
            headers: {
                'Access-Control-Allow-Origin':"*",
                "content-type":"application/json",
            },
            body: JSON.stringify(bookObj),
        });
        alert("Book added successfully");
    }
    catch(err){
        alert("Error in adding Book");
        console.log(err);
    }
});