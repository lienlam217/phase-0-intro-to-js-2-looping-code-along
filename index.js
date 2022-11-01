// code your solutions in this file
console.log(writeCards(["Sassy", "Amy", "Vinny", "John", "Lien"], "birthday")) 

function writeCards(name, event) {
    const outPut = []
    for (let i = 0; i < name.length; i++) {
       
       outPut.push(`Thank you, ${name[i]}, for the wonderful ${event} gift!`);
    }

    return outPut;

}


function countDown() {
    let countDown = 10;
    while (countDown >= 0) {
    console.log(countDown--);
}

}


