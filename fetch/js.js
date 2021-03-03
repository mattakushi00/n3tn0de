/*fetch('https://reqres.in/api/users/2')
    .then(
     async function (value) {
         let x = await value.json();
         console.log(x.ad);
     });

///////////////////////////////////////////////

function f1() {
    return fetch('https://www.cbr-xml-daily.ru/daily_json.js')
        .then(function (value) {
           return value.json();
        })
}

f1().then(function (el) {
    console.log(el.Valute.EUR.Value);
});*/

/*let user = GetObjectFromServer('https://reqres.in/api/users/')

///////////////////////////////////////////////////

user.then (arr =>  {
    console.log(arr.data)
    /!*и весь код писать тут, верно?*!/
})

function GetObjectFromServer(url) {
    return fetch(url)
        .then(data => data.json())
}*/

///////////////////////////////////////////////////

let state = {}

let user = GetObjectFromServer('https://reqres.in/api/users/')
user.then(responsePromise => {
    console.log(state.users[0])
    // иформация будет в стейте, чтобы в дальнейшем ей пользоваться

    // но если вдруг что, мы можем поработать с ориджинал данными
    console.log(responsePromise.data)
})

function GetObjectFromServer(url) {
    return fetch(url)
        .then(data => data.json())
        .then(responsePromise => {
            // тут тоже можно реализовывать разную логику
            state = {
                users: responsePromise.data
            }
            return responsePromise
        })
}
console.log(state);