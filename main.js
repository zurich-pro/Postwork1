var john = {
    firstName: 'John',
    lastName: 'Doe'
}

function deepEqual (a, b) {
    if (a === b) {
        return true;
    }
    else if ((typeof a == "object" && a != null) && (typeof  b == "object" && b != null)) { //AQUI VALIDAMOS QUE a Y b SEAN OBJETOS Y QUE NO ESTEN VACIOS, SI ESTAN VACIOS NO PUEDEN SER IGUALES Y RETORNA FALSO.
        if (Object.keys(a).length != Object.keys(b).length) //SI LAS KEYS DEL OBJETO a Y EL OBJETO b NO TIENEN LA MISMA LONGITUD ENTONCES NO SON IGUALES POR LO QUE DESDE AQUI DESCARTAMOS Y MANDAMOS A FALSO.
            return false;
        for (var property in a) { //AQUI HACEMOS UN CICLO FOR QUE RECORRA EL OBJETO a Y ALMACENE SUS PROPIEDADES EN LA VARIABLE PROPERTY. ALMACENA "FIRSTNAME" y "LASTNAME"
            if (b.hasOwnProperty(property)) { //AQUI VALIDAMOS SI EL OBJETO b TIENE LAS MISMAS PROPIEDADES QUE TIENE LA VARIABLE PROPERTY. (FIRSTNAME Y LASTNAME)
                if (deepEqual(a[property], b[property])==false) // SI TIENE LAS MISMAS PROPIEDADES ENTONCES MANDA A LLAMAR A LA FUNCION deepEqual PERO LE ENVIA LO QUE TENGA EL OBJETO a y EL OBJETO b EN SUS PROPIEDADES (John Y Doe)
                    return false; // SI LA LLAMADA A RECURSIVIDAD RETORNA FALSO QUIERE DECIR QUE NO SON EL MISMO TIPO DE DATO.
            }
            else // SI EL OBJETO b NO TIENE LAS MISMAS PROPIEDADES QUE ESTAN EN LA VARIABLE property ENTONCES NO SON IGUALES Y RETORNA FALSO.
                return false;
        } 
        return true;
    }else
        return false;
}

console.log('Test 1:', deepEqual(1, 1)) // true
console.log('Test 2:', deepEqual(1, '1')) // false
console.log('Test 3:', deepEqual(john, john)) // true
console.log('Test 4:', deepEqual(john, { firstName: 'John', lastName: 'Doe' })) // true
console.log('Test 5:', deepEqual(john, { firstName: 'John' })) // false
