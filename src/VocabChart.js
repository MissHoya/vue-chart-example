import { Line } from 'vue-chartjs'

export default Line.extend({
	props: ['chartData'],
	data(){
		this.options = {
			responsive: true,
			maintainAspectRatio:false,
			legend:{
				// display: false
			}
		}
		return{}
	},
	watch:{
    'chartData': {
      handler (newData, oldData) {
      	console.log('watch ,', newData, oldData);
        if (oldData) {
          let chart = this._chart

          let newDataLabels = newData.datasets.map((dataset) => {
            return dataset.label
          })

          let oldDataLabels = oldData.datasets.map((dataset) => {
            return dataset.label
          })

          if (JSON.stringify(newDataLabels) === JSON.stringify(oldDataLabels)) {
            newData.datasets.forEach((dataset, i) => {
              chart.data.datasets[i].data = dataset.data
            })
            chart.data.labels = newData.labels
            chart.update()
          } else {
            this.render(this.chartData, this.options)
          }
        }
      }
    }
	},
  ready () {
    console.log("vocab chart ready")
    this.render(this.chartData, this.options)
  }
})