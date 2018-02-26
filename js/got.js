function getData(url, callbackFunc) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            callbackFunc(this);
        }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
}

function successAjax(xhttp) {
    // itt a json content, benne a data változóban
    var userDatas = JSON.parse(xhttp.responseText);
    db = userDatas;
    console.log(userDatas);
    fillDiv(userDatas);
    //sortByName(userDatas, key)

    /*
      Pár sorral lejebb majd ezt olvashatod:
      IDE ÍRD A FÜGGVÉNYEKET!!!!!! NE EBBE AZ EGY SORBA HANEM INNEN LEFELÉ!

      Na azokat a függvényeket ITT HÍVD MEG! 

      A userDatas NEM GLOBÁLIS változó, ne is tegyétek ki globálisra. Azaz TILOS!
      Ha valemelyik függvényeteknek kell, akkor paraméterként adjátok át.
    */
}

// Írd be a json fileod nevét/útvonalát úgy, ahogy nálad van
getData('json/characters.json', successAjax);

// Live servert használd mindig!!!!!
/* IDE ÍRD A FÜGGVÉNYEKET!!!!!! NE EBBE AZ EGY SORBA HANEM INNEN LEFELÉ! */
function fillDiv(userDatas) {
    for (var i in userDatas) {
        var emberek;
        console.log(i);
        emberek += userDatas[i].name;
        var img = document.createElement('img');
        img.setAttribute("src", "/userDatas[i].portrait");
        document.querySelector('#gameof').innerHTML = emberek;
        document.querySelector('#gameof').appendChild(img);

    }
}

// ------- sorba rendező függvény ---------7
function sortByName(data, key) {
    data.sort(function (a, b) {
        var nameA = a[key].toLowerCase();
        var nameB = b[key].toLowerCase();
        //return nameA.localeCompare(nameB); //magyar abc szerint
        if (nameA < nameB) { //angol abc szerint
            return -1;
        }
        if (nameA > nameB) {
            return 1;
        }
        return 0;
    });
    return data;

}


function renderData(postData) {
    return `<div class="col" id="${postData.id}">
              <img src="${postData.portrait}">
              <h1>${postData.name}</h1>                            
            </div>`;
}

function renderCollection(posts) {
    return `<div id="gameof">
              ${posts.map(renderData).join('')}
            </div>`
}

function renderElement(selected) {
    return `<div>
              <img src="${selected.picture}">
              <h1>${selected.name}</h1>
              <p>${selected.bio}</p>                            
            </div>`;
}