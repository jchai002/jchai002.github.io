$(document).ready(function(){
  $('#domainform').on('submit', function(e){
    e.preventDefault();


    $('#content').html('<center><img src="img/loader.gif" alt="loading..."></center>');

    var html = '<ul class="linklist">\n'

    var title = $('#title_search').val();
    var year = $('#year_search').val();
    var url = 'https://www.omdbapi.com/?t='
    $.getJSON(url+title+'&y='+year).then(function(data){
      var title = data.Title || "Not Found"
      var date = data.Released || "Not Found"
      var poster = data.Poster || "Not Found"
      var actors = data.Actors || "Not Found"
      var score = data.Metascore || "Not Found"
      var plot = data.Plot || "Not Found"

      html += '<li><h1>'+ title + '</h1></li><br>'
      html += '<li><p> Released: '+ date + '</p></li><br>'
      html += '<li><p> Actors: '+ actors + '</p></li><br>'
      html += '<li><p> Metascore: '+ score + '</p></li><br>'
      html += '<li><p> Plot: '+ plot + '</p></li><br>'
      html += '<img src=' + poster + '/><br>'

    htmlOutput(html)
    })
  })

  function htmlOutput(html) {
    html += '</ul>';

    $('#content').html(html);
  }
})
