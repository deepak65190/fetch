function getTitle() {
    var title = document.getElementById("title").value;

    var url = `http://www.omdbapi.com/?t=${title}&apikey=d5c826c7`;
    fetch(url)
      .then(function (res) {
        return res.json();
      })
      .then(function (res) {
        displayMovies(res);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  function displayMovies(movie){
      var box= document.createElement("div")
      var post = document.createElement("img") ;
      post.src = movie.Poster 
      post.setAttribute("class","im")
   var title = document.createElement("h4") ;
   title.innerHTML= movie.Title ;
   var year = document.createElement("p")
   
   year.innerHTML = "Year of release"+ " -" + movie.Year
   var rat = document.createElement("h5") 
   rat.innerHTML = "rating"+ " - "+ movie.Rated 
   box.append( post ,title ,year ,rat)
 
   document.querySelector("#con").append(box)

  }