const domSort = document.querySelector('.sort')
const domValuteList = document.querySelector('.valuteList')
const btnsSort = document.querySelectorAll('.btn')
const arrowUpClass = 'btn--arrowUp'
const btnClass = 'btn'
const state = {
    currencies: []
}

btnsSort.forEach(btn => {
    btn.addEventListener('click', ({currentTarget}) => {
        let {classList, parentElement} = currentTarget
        let index = 0
        if (classList.contains('btn-sort_value')) {
            index = 1
        }
        const isArrowUp = classList.contains(arrowUpClass)
        clearChild('.valuteList')
        classList.toggle(arrowUpClass)

        state.currencies.sort((a, b) => {
            let itemA = a[index]
            let itemB = b[index]
            if (isArrowUp) {
                itemA = b[index]
                itemB = a[index]
            }
            if (index === 1) {
                return itemA.Value - itemB.Value
            }
            return itemA.localeCompare(itemB)
        })

        creatElemets(state.currencies)
    })

})

valute('https://www.cbr-xml-daily.ru/daily_json.js')
    .then(obj => {
        state.currencies = Object.entries(obj).slice(0, 10)
        creatElemets(state.currencies)

    })


function valute(url) {
    return fetch(url)
        .then(json => json.json())
        .then(valuteArr => valuteArr.Valute)
}

function creatElemets(items) {
    // TODO: rename elem on item
    for (elem of items) {
        let domValuteListItem = document.createElement('div'),
            spanNameValute = document.createElement('span'),
            spanNameValueValute = document.createElement('span')

        domValuteListItem = document.createElement('div')
        domValuteList.append(domValuteListItem)
        domValuteListItem.append(spanNameValute)
        domValuteListItem.append(spanNameValueValute)

        domValuteListItem.classList.add('valuteList-item')
        spanNameValute.classList.add('valute-info', 'valute_name')
        spanNameValueValute.classList.add('valute-info', 'valute_value')

        spanNameValute.textContent = `${elem[0]}, ${elem[1].Name}`
        spanNameValueValute.textContent = elem[1].Value
    }
}

function clearChild(parent) {
    let childArray = document.querySelector(parent).childNodes
    let newChildArray = []
    childArray.forEach(elem => newChildArray.push(elem))
    newChildArray.forEach(elem => elem.remove())
}
