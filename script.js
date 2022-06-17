//создане
let body = document.querySelector('body')
body.classList.add('papa')
let father = document.createElement('div')

father.onmouseenter = () => {
    father.classList.remove('father_post_two')
    father.classList.add('father_post')
}

father.onmouseleave = () => {
    father.classList.remove('father_post')
    father.classList.add('father_post_two')
}



let tel = document.createElement('div')

let other = document.createElement('div')
let h3 = document.createElement('h3')
let h2 = document.createElement('h2')
let price = document.createElement('div')
let span = document.createElement('span')
let p = document.createElement('p')
let button = document.createElement('button')

let next = document.createElement('div')
let car = document.createElement('div')
let bes = document.createElement('div')

let anime_bes = document.createElement('div')
let anime_next = document.createElement('div')


let anime_next_i1 = document.createElement('div')
let img_i1 = document.createElement('img')
let p_i1 = document.createElement('span')

let anime_next_i2 = document.createElement('div')
let img_i2 = document.createElement('img')
let p_i2 = document.createElement('span')

let anime_next_i3 = document.createElement('div')
let img_i3 = document.createElement('img')
let p_i3 = document.createElement('span')

let anime_next_i4 = document.createElement('div')
let img_i4 = document.createElement('img')
let p_i4 = document.createElement('span')


let arr = [
    'Смартфоны',
    '2 576 000 сум',
    'Сматрфон Xiaomi Redmi',
    'Note 11 6 GB 128GB...',
    'Купить',
    'от 267 000 сум/месяц',
    'Добавить в сравнение'
]

let mnogo = [
    'Скопировать ссылку',
    'Facebool',
    'Instagram',
    'Telegram'
]

//оформление
father.classList.add('father')
tel.classList.add('tel')
next.classList.add('next')


next.onmouseenter = () => {
    next.classList.remove('next')
    next.classList.add('next_post')
    anime_next.classList.remove('anime_next_post')
    anime_next.classList.add('anime_next')
}

next.onmouseleave = () => {
    next.classList.add('next')
    next.classList.remove('next_post')
    anime_next.classList.add('anime_next_post')
    anime_next.classList.remove('anime_next')
}

car.classList.add('car')
other.classList.add('other')
bes.classList.add('bes')


h3.innerHTML = arr[0]
h3.classList.add('h3')

h3.onmouseenter = () => {
    h3.classList.remove('h3_post_two')
    h3.classList.add('h3_post')
}

h3.onmouseleave = () => {
    h3.classList.add('h3_post_two')
    h3.classList.remove('h3_post')
}



h2.innerHTML = arr[1]
h2.classList.add('h2')

span.innerHTML = arr[2]
span.classList.add('span')

p.innerHTML = arr[3]
p.classList.add('p')

button.innerHTML = arr[4]
button.classList.add('button')

price.innerHTML = arr[5]
price.classList.add('price')

anime_bes.classList.add('anime_bes_post')
anime_bes.innerHTML = arr[6]

bes.onmouseenter = () => {
    anime_bes.classList.remove('anime_bes_post')
    anime_bes.classList.add('anime_bes')
}

bes.onmouseleave = () => {
    anime_bes.classList.add('anime_bes_post')
    anime_bes.classList.remove('anime_bes')
}

anime_next.classList.add('anime_next_post')

anime_next.onmouseenter = () => {
    anime_next.classList.remove('anime_next_post')
    anime_next.classList.add('anime_next')
}

anime_next.onmouseleave = () => {
    anime_next.classList.add('anime_next_post')
    anime_next.classList.remove('anime_next')
}

anime_next_i1.classList.add('anime_next_i1')
img_i1.classList.add('img_i')
img_i1.src = './link.svg'
p_i1.classList.add('p_i')

p_i1.onmouseenter = () => {
    p_i1.classList.add('img_i_post')
}

p_i1.onmouseleave = () => {
    p_i1.classList.remove('img_i_post')
}

p_i1.innerHTML = mnogo[0]

anime_next_i2.classList.add('anime_next_i2')
img_i2.classList.add('img_i')
img_i2.src = './facebook.svg'
p_i2.classList.add('p_i')

p_i2.onmouseenter = () => {
    p_i2.classList.add('img_i_post')
}

p_i2.onmouseleave = () => {
    p_i2.classList.remove('img_i_post')
}

p_i2.innerHTML = mnogo[1]

anime_next_i3.classList.add('anime_next_i3')
img_i3.classList.add('img_i')
img_i3.src = './instagram.svg'
p_i3.classList.add('p_i')

p_i3.onmouseenter = () => {
    p_i3.classList.add('img_i_post')
}

p_i3.onmouseleave = () => {
    p_i3.classList.remove('img_i_post')
}

p_i3.innerHTML = mnogo[2]

anime_next_i4.classList.add('anime_next_i4')
img_i4.classList.add('img_i')
img_i4.src = './telegram.svg'
p_i4.classList.add('p_i')

p_i4.onmouseenter = () => {
    p_i4.classList.add('img_i_post')
}

p_i4.onmouseleave = () => {
    p_i4.classList.remove('img_i_post')
}

p_i4.innerHTML = mnogo[3]












body.append(father, anime_bes, anime_next)
father.append(tel, other)
tel.append(next, car)
other.append(h3, h2, price, price, span, p, button, bes)

anime_next.append(anime_next_i1, anime_next_i2, anime_next_i3, anime_next_i4)
anime_next_i1.append(img_i1, p_i1)
anime_next_i2.append(img_i2, p_i2)
anime_next_i3.append(img_i3, p_i3)
anime_next_i4.append(img_i4, p_i4)