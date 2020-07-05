import { Bar, mixins } from 'vue-chartjs'
const { reactiveProp } = mixins

//Con la librería Chartsjs se crea una  instancia de un gráfico de barras
export default {
  extends: Bar,
  mixins: [reactiveProp],
  props: {
    chartData: {
      type: Object,
      default: null
    },
    options:{
      legend: {
        hidden: true,
        labels: {
          fontColor: 'yellow'
        }
      }
    }
  },
  mounted () {
    // this.chartData is created in the mixin.
    // If you want to pass options please create a local options object

    this.renderChart(this.chartData, this.options)
  }
}