let homeEl = document.getElementById("home-el")
let guestEl = document.getElementById("guest-el")

function hAdd1() {
    let total = Number(homeEl.innerHTML) + 1
    homeEl.textContent = total
}

function hAdd2() {
    let total = Number(homeEl.innerHTML) + 2
    homeEl.textContent = total
}

function hAdd3() {
    let total = Number(homeEl.innerHTML) + 3
    homeEl.textContent = total
}

function hReset() {
    homeEl.textContent = 0
}

function gAdd1() {
    let total = Number(guestEl.innerHTML) + 1
    guestEl.textContent = total
}

function gAdd2() {
    let total = Number(guestEl.innerHTML) + 2
    guestEl.textContent = total
}

function gAdd3() {
    let total = Number(guestEl.innerHTML) + 2
    guestEl.textContent = total
}

function gReset() {
    guestEl.textContent = 0
} 