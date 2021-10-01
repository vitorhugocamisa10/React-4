/*
   Calcula a area de uma forma geométrica
*/

function areaForma(base, altura, tipo) {
    let area
    

    switch (tipo) {
        case 'R':   // retangulo
            area = base * altura
            break

            case 'T':  // triangulo
            area = base * altura  / 2 
            break 

            case 'E':  // elipse
            area = (base / 2) * (altura / 2) * Math.PI
            break

        default:  // Forma não reconhecida
        area = null 

    }
    return area
}

console.log(`A área de um terreno com 16cm x 27m é ${areaForma(16, 27, 'R')}`)