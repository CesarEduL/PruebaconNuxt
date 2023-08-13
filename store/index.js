//Almacenamiento central
export const state = () => ({
    _counter: 0
})

//Accesores o getters
//Normalmente se llaman desde las propiedades computed de los componentes
export const getters = {
    getCounter(state) {
        return state._counter
    }
}

//Acciones
//Estas funciones con metodos sirven para llamar a las mutaciones
//A diferencias de las mutaciones pueden ser asincronas (llamadas a las APIs)
//Pueden contener algo de logica de negocio y además pueden llamar a varias mutaciones
export const actions = {
    sumarDos({commit}) {
        commit('increment');
        commit('increment');
    }
}

//Mutadores
//Unico fin de los mutadores es mutar o modificar el state o almacenamiento
export const mutations = {
    increment(state){
        state._counter++;
    }
}