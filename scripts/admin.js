import {baseURL} from "./baseURL.js"
window.onload = () => {
    getData();
};

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
    };
    try{
        await fetch("https://indecisive-coherent-scar.glitch.me/books",{
            method: "POST",
            headers: {
                "Access-Control-Allow-Origin":"*",
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

function getData(){
    fetch("https://indecisive-coherent-scar.glitch.me/books").then((response) => response.json()).then(data => 
        displayBooks(data)
    );
}

function displayBooks(arr){
    let div = document.getElementById("books");
    arr.map((el,i) =>{
        let card = document.createElement("div");
        let book_name = document.createElement("h5");
        book_name.textContent = `${el.title}`;
        let author_name = document.createElement("h7");
        author_name.textContent = `${el.author}`;
        let category_name = document.createElement("h9");
        category_name.textContent = `${el.category}`;
        card.append(book_name,author_name,category_name);
        div.append(card);
    })
}