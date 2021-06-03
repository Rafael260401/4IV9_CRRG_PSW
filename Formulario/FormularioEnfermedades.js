/* global formulario_pregunta, respuesta, Siempre, i, Si */

console.log('Deteccion de enfermedades/Transtornos Mentales');

function procesarEnfermedades() {
    var respuestas = [formulario_pregunta];
    var contador = 0;
    formulario = document.getElementById('formE').elements;
    for (var i = 0; i < formulario.length; i++) {
        if (formulario[i].type == "radio" && formulario[i].checked) {
            respuestas.push(formulario[i].value);
        }
    for (int i=0; i>=8; i++){
        if (contador==6){
            alert('Tienes Depresión');
        }
        else{
            if (respuestas[i]==Siempre){
                contador++;
            }
        }
    }
    for (int i=9; i>=19; i++){
        if (contador==8){
            alert('Tienes Ansiedad');
        }
        else{
            if (respuesta[i]==Si){
                contador++;
            }
        }
    }
    for(int i=20; i>=29; i++){
        if (contador==8){
            alert('Tienes Sindrome de Asperger');
        }
        else{
            if (respuesta[i]==Siempre){
                contador++;
            }
        }
    }
    for(int i=30; i>=39; i++){
        if (contador==8){
            alert('Tienes Trastorno de Conducta');
        }
        else{
            if(respuesta[i]==Si){
                contador++;
            }
        }
    }
    for(int i=40; i>=48; i++){
        if (contador==7){
            alert('Tienes Transtorno de Déficit de Atención')
        }
        else{
            if(respuesta[i]==Si){
                contador++;
            }
        }
    }
    for(int i=49; i>=56; i++){
        if (contador==6){
            alert('Tienes Dislexia')
        }
        else{
            if(respuesta[i]==Si){
                contador++;
            }
        }
    }
    for(int i=57; i>=65; i++){
        if (contador==7){
            alert('Tienes autismo')
        }
        else{
            if(respuesta[i]==Si){
                contador++
            }
        }
    }
    for(int i=66; i>=75; i++){
        if (contador==8){
            alert('Tienes Bipolaridad')
        }
        else{
            if(respuesta[i]==Si){
                contador++
            }
        }
    }
    for(int i=76; i>=85; i++){
        if (contador==8){
            alert('Tienes Transtorno Obsecivo Compulsivo')
        }
        else{
            if(respuesta[i]=Si){
                contador++
            }
        }
    }
    for(int i=86; i>=95; i++){
        if (contador==8){
            alert('Tienes Transtorno de Conducta Alimentaria')
        }
        else{
            if(respuesta[i]=MuchoS){
                contador++
            }
        }
    }
    for(int i=96; i>=105; i++){
        if (contador==8){
            alert('Tienes Estrés')
        }
        else{
            if(respuesta[i]=Si){
                contador++
            }
        }
    }
    console.log(respuestas);
}
