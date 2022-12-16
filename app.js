function connect() {

    var searchText = document.getElementById('search').value ; 
    const quantity = document.getElementById('quantity').value ;
    var callback = quantity;

   
  var url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
   
    fetch(url)
    .then(res => res.json() )
    .then(data => showData(data, callback));
   
    document.getElementById('search').value = ""; 
    document.getElementById('quantity').value = "";
   
   }
   

   function showData(data, callback) {
   
          var oldContent = document.getElementById('contain');
          oldContent.textContent= "";
   
          for (var i=0; i<callback; i++){
   
           var newDiv = document.createElement('div');
           newDiv.innerHTML = `<p>Meal Title: <span class="title-style">${data.meals[i].strMeal}  </span> </p>
                               <img class='img-style' src="${data.meals[i].strMealThumb}" >`;
                               newDiv.classList.add("meal-style");
   
                               oldContent.appendChild(newDiv);
          }
   }

