function decimalToQualquerBaseComLetra(decimal, base){
    var conversao = "";
    var temp = decimal;
 
    while(temp > 0){
        if(temp % base == 0){
            conversao = "0" + conversao;
        }
        else {
            resultado = temp % base
            if (resultado == 10 && base == 16) {
                conversao = "A" + conversao;
            } else if (resultado == 11 && base == 16) {
                conversao = "B" + conversao; 
            } else if (resultado == 12 && base == 16) {
                conversao = "C" + conversao; 
            } else if (resultado == 13 && base == 16) {
                conversao = "D" + conversao; 
            } else if (resultado == 14 && base == 16) {
                conversao = "E" + conversao; 
            } else if (resultado == 15 && base == 16) {
                conversao = "F" + conversao; 
            } else {
                conversao = resultado + conversao;
            }
        }

        temp = Math.floor(temp / base);
    }

    return conversao;
}