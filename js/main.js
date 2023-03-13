let doc = document

let brg_menu = doc.querySelector('.brg-menu')
let verx = doc.querySelector('.brg1')
let sred = doc.querySelector('.brg2')
let nij = doc.querySelector('.brg3')
let menu = doc.querySelector('.brg-txt')


brg_menu.onclick = () => {
    verx.classList.toggle('rotate1')
    sred.classList.toggle('not-brg')
    nij.classList.toggle('rotate2')
    menu.classList.toggle('live')
}



