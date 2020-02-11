
let addSong = [];

$(".button").click(function () {
  var name = $("#songname").val();
  var artistname = $("#artist").val();
  var time = $("#songlength").val();
  var imgurls = $("#imageurl").val();
  var songurls = $("#songurl").val();
  var song = {
    sname: "",
    aname: "",
    stime: "",
    iurl: "",
    surl: ""
  };
  song["sname"] = name;
  song["aname"] = artistname;
  song["time"] = time;
  song["iurl"] = imgurls;
  song["surl"] = songurls;

  console.log(song);


  $(".songlist").empty();
  $(".artistlist").empty();
  $(".lengthlist").empty();
  $(".imglist").empty();
  $(".linklist").empty();
 addSong.push(song);
 console.log(addSong);

 $("input").val('');



  addSong.forEach(function (song) {
    $(".songlist").append("<li>"+song.sname+"</li>");
    $(".artistlist").append("<li>"+song.aname+"</li>");
    $(".lengthlist").append("<li>"+song.time+"</li>");
    $(".imglist").append("<li><img src="+song.iurl+"></li>");
    $(".linklist").append($('<a href ="' +song.surl+'">'+"link"+'</a>'));
  });


});




