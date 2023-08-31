//Almacenamiento central
export const state = () => ({
  _counter: 0,
});

//Accesores o getters
//Normalmente se llaman desde las propiedades computed de los componentes
export const getters = {
  getCounter(state) {
    return state._counter;
  },
};

//Acciones
//Estas funciones con metodos sirven para llamar a las mutaciones
//A diferencias de las mutaciones pueden ser asincronas (llamadas a las APIs)
//Pueden contener algo de logica de negocio y además pueden llamar a varias mutaciones
export const actions = {
  /**
   * Esta función se ejecuta al inicializrse la app
   * @param {*} vuexContext commit, dispatch, state
   * @param {*} context es el mismo de asyncData y aquí tenemos acceso a toda la app: app, $axios, env, store
   */
  async nuxtServerInit({ dispatch }, context) {
    await dispatch("posts/loadPosts");
  },

  sumarDos({ commit }) {
    commit("increment");
    commit("increment");
  },
};

//Mutadores
//Unico fin de los mutadores es mutar o modificar el state o almacenamiento
export const mutations = {
  increment(state) {
    state._counter++;
  },
};
