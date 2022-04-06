//Visualizzare in pagina 5 numeri casuali. 
//Da lì parte un timer di 30 secondi.
//Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
//Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.


//steps da seguire

// 1. array di 5 numeri casuali
// 2. timer 30 secondi con allert che la persona che li vede deve memorizzare quindi creare allert prima che spieghi cosa deve fare
// 3. dopo il timer l'utente dovrà inserire i numeri che ha visto in quei 30 secondi ( quanti e quali lo determina il pc)
// 4. dopo averli inseriti il programma indica quanti e quali sono stati indovinati 


alert('ti spiego le regole del gioco! Memorizzale bene!!')
alert('Vedrai a schermo 5 numeri il pc dopo ti dira di quanti e quali indicare, hai 30 secondi per memorizzarli ')
alert('Buonafortuna Player')
let stampNumber = document.getElementById('numbersStamp')
const numberPlayer = []
const numberPC = []
let score = []
let punteggio = 0

stampNumber.innerHTML += `<h1>Se hai letto bene le regole sai cosa fare con i seguenti numeri :</h1><div>${(numberToImpress())}</div>`
// timer da 30 secondi
setTimeout(Hidden,30000)
setTimeout(numberToPlayer,30000)

// vari console log per tenere traccia
//console.log(score)//
console.log(numberPC)


//funzioni
//funzione per creare un massimo di 5 numeri
function numberToImpress(){
    for( i = 0; i < 5; i++){
        let randomNumbers = Math.floor(Math.random()*10)
        numberPC.push(randomNumbers)
    }
    return numberPC
}
//console.log(numberToImpress(numberPC)
//funzione per avere i numeri dal utente
function numberToPlayer () {
    for(i = 0; i < 5; i++){
        let numberuser = parseInt(prompt(`inserisci il ${i+1}° numero`))
        numberPlayer.push(numberuser)
    }

    compareArray()
    return numberPlayer
}
//console.log(numberToPlayer(numberPlayer))
// funzione per comparare gli array
function compareArray(){
    for(x = 0; x < 5 ; x++){
        if(numberPC.includes(numberPlayer[x])){
            score.push(numberPlayer[x])
            punteggio++
        }
        
    }   
    Equal()
    return score 
}
//funzione che nasconde i numeri
function Hidden(){
    stampNumber.classList.add('Dnone')
}
// funzione che chiamera il punteggio e che fa ricomparire tutto
function Equal (){
    stampNumber.classList.remove('Dnone')
    stampNumber.innerHTML = `i numeri indovinati sono ${score} e i numeri da ricordare erano ${numberPC} quindi il tuo punteggio è ${punteggio}`
}
