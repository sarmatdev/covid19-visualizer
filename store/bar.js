import moment from 'moment';
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
    const res = await this.$axios.get(`https://covid19.mathdro.id/api/daily`);
    const barChartData = {
      labels: res.data.map(date => moment(date.reportDate).format('MMM Do')),
      datasets: [
        {
          label: 'Growth of total confirmed cases',
          backgroundColor: '#127EB1',
          data: res.data.map(total => total.totalConfirmed)
        }
      ]
    };
    commit('setData', barChartData);
  }
};

export const getters = {
  data(state) {
    return state.data;
  }
};
