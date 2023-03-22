
var link = "";

document.getElementById("find_video").addEventListener("click", function() {
    var link = document.getElementById("text").value


    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '96d73abc7bmsh757d81e8a0fe32cp1d767djsnf40f1c0672c9',
            'X-RapidAPI-Host': 'aiov-download-youtube-videos.p.rapidapi.com'
        }
    };
    
    fetch('https://aiov-download-youtube-videos.p.rapidapi.com/GetVideoDetails?URL='+link, options)
        .then(response => response.json())
        .then(response => show(response))
        .catch(err => console.error(err));

        function show(response) {
            console.log(response)
            // title and thumbnail
            var title = (response.fulltitle)
            var thumbnail = (response.thumbnail)


            // file names

            var mp3_link = "mp3"
            var medium_link = (response.formats[20].format_note)
            var hd_link = (response.formats[26].format_note)


            // file sizes

            var mp3_size = (response.formats[9].filesize)
            var medium_size = (response.formats[21].filesize)
            var hd_size = (response.formats[26].filesize_approx)



            // download link of mp3,medium and hd
            var mp3 = (response.formats[9].url)
            var medium = (response.formats[21].url)
            var hd = (response.formats[26].url)




            // adding to the site.

            document.getElementById("thumbnail").innerHTML="<img class='thumbnail' src="+thumbnail+">"

            document.getElementById("main_title").innerHTML=title

            // data of the file extension

            document.getElementById("hd").innerHTML=hd_link
            document.getElementById("mp4").innerHTML=medium_link
            document.getElementById("mp3").innerHTML=mp3_link



            // size of the file in kb

            document.getElementById("hd_si").innerHTML=hd_size
            document.getElementById("mp4_si").innerHTML=medium_size
            document.getElementById("mp3_si").innerHTML=mp3_size


            // Assigning the download link

            document.getElementById("hd_link").innerHTML="<a href="+hd+">Download</a>"
            document.getElementById("mp4_link").innerHTML="<a href="+medium+">Download</a>"
            document.getElementById("mp3_link").innerHTML="<a href="+mp3+">Download</a>"
        }

    })


    // https://www.youtube.com/watch?v=32RAq6JzY-w


