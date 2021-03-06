"use strict";Object.defineProperty(exports, "__esModule", {value: true});exports. default = function (p) {
  const retorno = false;
  const letrasMaiusculas = /[A-Z]/;
  const letrasMinusculas = /[a-z]/;
  const numeros = /[0-9]/;
  const caracteresEspeciais = /[!|@|#|$|%|^|&|*|(|)|-|_]/;
  if (p.length > 8) {
    return retorno;
  }
  if (p.length < 8) {
    return retorno;
  }
  let  auxMaiuscula = 0;
  let auxMinuscula = 0;
  let auxNumero = 0;
  let auxEspecial = 0;
  for (let i = 0; i < p.length; i++) {
    if (letrasMaiusculas.test(p[i]))
      auxMaiuscula++;
    else if (letrasMinusculas.test(p[i]))
      auxMinuscula++;
    else if (numeros.test(p[i]))
      auxNumero++;
    else if (caracteresEspeciais.test(p[i]))
      auxEspecial++;
  }
  if (auxMaiuscula > 0) {
    if (auxMinuscula > 0) {
      if (auxNumero > 0) {
        if (auxEspecial) {
          retorno = true;
        }
      }
    }
  }

  return retorno;
}