function resultado() {
    var tn1 = window.document.getElementById('txtn1')
    var tn2 = window.document.querySelector('input#txtn2')
    var res = window.document.getElementById('res')
    var n1 = Number(tn1.value)
    var n2 = Number((tn2.value)**2)
    var t = n1 / n2
    if (t < 18.5) {
        res.innerHTML  = `Seu IMC é <strong> ${t}</strong> Você esta abaixo do peso`
    } 
    else if( t < 25){
        res.innerHTML   = `Seu IMC é <strong> ${t}</strong> Você esta no peso ideal`
    }
    else {
        res.innerHTML  = `Seu IMC é <strong> ${t}</strong> . Você está acima do peso `
    }  
   
   
    

   
}    