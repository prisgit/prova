//literal notation    
let laCascina = {
    nome: 'La Cascina',
    camere: 20,
    wc: 18,
    senzaBagno: function() {
        return this.camere - this.wc;
    }
};

console.log(laCascina.senzaBagno());

// notazione a oggetto generico
var agriturismo = new Object();
    agriturismo.nome = "La Cascina";
    agriturismo.camere = 20;
    agriturismo.wc = 18;
    agriturismo.senzaBagno = function(){
        return this.camere - this.wc;
    };
    agriturismo.indirizzo = "via Dante 110";

console.log("L'agriturismo '" + agriturismo.nome + "' si trova in " + agriturismo.indirizzo + " ed è dotato di " + agriturismo.wc + " camere con bagno e di " + agriturismo.senzaBagno() + " camere senza bagno");

// notazione col costruttore
function casaVacanze(nome, camere, wc){
    this.nome = nome;
    this.camere = camere;
    this.wc = wc;
    this.senzaBagno = this.camere - this.wc; 
}

let loChalet = new casaVacanze("Lo chalet", 5, 3);
console.log("La casa vacanze " + loChalet.nome + " è dotata di " + loChalet.camere + " camere e di " + loChalet.wc + " bagni");

