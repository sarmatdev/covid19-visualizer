<script>
import { Pie } from 'vue-chartjs';

export default {
  extends: Pie,
  props: ['chartdata', 'options'],
  mounted() {
    this.renderChart({
      labels: ['Confirmed', 'Recovered', 'Deaths'],
      datasets: [
        {
          label: '# of Votes',
          data: [156400, 73968, 5833],
          backgroundColor: [
            'rgb(0, 0, 255)',
            'rgb(0, 255, 0)',
            'rgb(255, 0, 0)'
          ],
          borderWidth: 1
        }
      ]
    });
  }
};
</script>

<style></style>
