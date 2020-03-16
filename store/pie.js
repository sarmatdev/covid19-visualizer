export const state = () => {
  data: [];
};

export const mutations = {
  setData(state, data) {
    state.data = data;
  }
};

export const actions = {
  async getData({ commit }) {
    const res = await this.$axios.get(`https://covid19.mathdro.id/api`);
    const pieChartData = {
      labels: ['Confirmed🤒', 'Recovered😁', 'Deaths😵'],
      datasets: [
        {
          data: [
            res.data.confirmed.value,
            res.data.recovered.value,
            res.data.deaths.value
          ],
          backgroundColor: ['#0000ff', '#00ff00', '#ff0000'],
          borderWidth: 1
        }
      ]
    };
    commit('setData', pieChartData);
  }
};

export const getters = {
  data(state) {
    return state.data;
  }
};
