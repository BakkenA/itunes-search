/*jshint esversion: 6 */
/*jshint -W041*/
/*jshint -W083*/
/*jshint -W007*/

$(document).ready(function(){

});

function sendSearch(){
  $("#searchResults").empty();
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
console.log(data);
  var results = data;
  var resultsDisplay = $("#searchResults")[0];
  $.each(results, function(key, data){
    var artistName = results[key].artistName;
    var trackName = results[key].trackName;
    var albumArt = results[key].artworkUrl100.replace('100x100', '2180x2180');
    var previewUrl = results[key].previewUrl;
    console.log(trackName);
    $('<li id=shownResults>  <p>' + artistName + '</p><p>' + trackName +  '</p><audio controls src="' + previewUrl + '"/><img class="albumCover" src ="' + albumArt +  '"/></li>').appendTo(resultsDisplay);
  });
}

function strikeEnterKey(event){
  var keyStroke = event.keyCode || event.which;
  if(keyStroke === 13){
    sendSearch();
  }
}
