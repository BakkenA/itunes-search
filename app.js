/*jshint esversion: 6 */
/*jshint -W041*/
/*jshint -W083*/
/*jshint -W007*/

$(document).ready(function(){

});

function sendSearch(){
  var searchRequest = $("#search")[0];
  var specificSearch = searchRequest.value;
  console.log(searchRequest.value);
  var itunesAPI = "https://itunes.apple.com/search?term="+specificSearch;
  console.log(itunesAPI);
  $.ajax({
    dataType : "jsonp",
    url : itunesAPI,
    async : true,
    success : function(data){
      showResults(data.results);
    }
  });
}

function showResults(data){
  var results = [];
  var resultsDisplay = $("searchResults");
  $.each(data, function(key, val){
    resultsDisplay.append();
    console.log(data);

  });
}
