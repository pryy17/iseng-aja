let pacar = prompt("pacar kamu siapa?", "kaiser");

function pacarSiapa(pacarku) {
    let pacars = pacarku;
    if( pacar == "priandy") {
        alert(" love u sayangku :3 ")
    } else {
        alert("parah si kalo g bisa jawab")
        pacar = prompt("pacar kamu siapa serius");
        pacarSiapa(pacar);
    }
}

pacarSiapa(pacar);
