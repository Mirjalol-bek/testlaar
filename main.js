  
const Savollar = [
    {
        savol: "4X3",
        variant: [ "A. 14", "B. 12", "C. 10", "D. 13"],
        javobi: "B"
    },
    {
        savol: "8X4?",
        variant: [ "A. 36", "B. 39", "C. 32", "D. 35"],
        javobi: "C"
    },
    {
        savol: "6X3?",
        variant: [ "A. 20", "B. 19", "C. 15", "D. 18"],
        javobi: "D"
    },
    {
        savol: "7X6",
        variant: [ "A.42", "B. 44", "C. 45", "D. 35"],
        javobi: "A"
    },
    {
        savol: "8X5?",
        variant: [ "A. 38", "B. 41", "C. 42", "D. 40"],
        javobi: "D"
    },
    {
        savol: "4X5",
        variant: [ "A. 20", "B. 29", "C. 22", "D. 32"],
        javobi: "A"
    },
    {
        savol: "3X7?",
        variant: [ "A. 20", "B. 19", "C. 21", "D. 25"],
        javobi: "C"
    },
    {
        savol: "9X2",
        variant: [ "A. 15", "B. 18", "C. 22", "D. 15"],
        javobi: "B"
    },
    {
        savol: "3X9?",
        variant: [ "A. 25", "B. 29", "C. 22", "D. 27"],
        javobi: "D"
    },
    {
        savol: "8X3?",
        variant: [ "A. 24", "B.22", "C. 23", "D. 25"],
        javobi: "A"
    }
    
];

let togriJavoblar = 0;

for (let i = 0; i < Savollar.length; i++) {
    const mainJavobi = prompt(Savollar[i].savol + "\nVariant: " +  Savollar[i].variant.join("\n"));

    if (mainJavobi === Savollar[i].javobi) {
        togriJavoblar++;
    } 
        else if(mainJavobi === ""|| mainJavobi === null){
            alert?.("Siz javobni belgilamadingiz");
        }
}
 

alert("Siz " + Savollar.length  + " ta savoldan " +  togriJavoblar+ " ta to'gri topdiz.");

 if ( togriJavoblar >= Savollar.length-3) {
    alert("Siz grant asosida o'qishga qabul qilindingiz.");
}
else if( togriJavoblar === Savollar.length-5 || togriJavoblar > Savollar.length-3){
    alert("Siz to'lov kontrakt asosida o'qishga qabul qilindingiz.");
}
else{
    alert("Siz talabalikka tavsiya etilmadingiz");
}