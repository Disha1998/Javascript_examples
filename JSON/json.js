const api = 'AIzaSyCLcfRXw89BGSmjGVDb4ewWvjjwbVgG7I8';
const output = document.querySelector('.output');

const searchTerm = document.querySelector('input');
searchTerm.setAttribute('value', 'test');

const btnPrev = document.createElement('button');
btnPrev.setAttribute('disabled', true);
document.body.appendChild(btnPrev);
btnPrev.textContent='Previous';

const btnNext = document.createElement('button');
btnNext.setAttribute('disabled', true);
btnNext.textContent='NEXT';
document.body.appendChild(btnNext);

const btns = document.querySelectorAll('button');
btns.forEach(function(btn){
    btn.addEventListener('click', ySearch);
})






function ySearch(e) {
    let search = searchTerm.value;
    search = encodeURIComponent(search);
    const url = 'https://www.googleapis.com/youtube/v3/search/?part=snippet&key=' + api + '&q=' + search + '&maxResultgs=20';

    // output.textContent = url;

    fetch(url).then(function(rep){
        return rep.json()
    }).then(function(data){
        // console.log(data);
        // let data1 = 
        return data.items.map(function(x){
            return {
                title : x.snippet.title,
                des : x.snippet.description,
                img : x.snippet.thumbnails.default.url,
                id : x.id.videoId,
                x : x
            }
        })
        // show(data1);
    }).then(function(arr){
        show(arr);
    }).catch(function(error){
        console.log(error);
    })
   

}
// ySearch();

function show(data) {
    console.log(data);
    console.log(data.length);
    data.forEach(function (video) {
        console.log(video);
        let div = document.createElement('div');
        div.classList.add('box');
        let temp = document.createTextNode(video.des);
       
        let span = document.createElement('span');
        span.innerHTML = '<a href="http://www.youtube.com/watch?v=' + video.id + '" target="_blank">' + video.title + '</a>';
        div.appendChild(span);
        div.appendChild(temp);
        output.appendChild(div);
        })
}



// https://www.googleapis.com/youtube/v3/search/?part=snippet&key='+api+'&q=test&maxResults=20