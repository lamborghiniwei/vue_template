<template>
  <div :ref="'echarts'+uid" class="echarts-box"></div>
</template>

<script>
import echartMixins from './resize_mixins'
let echarts = require("echarts");
const options = {
        grid: {
          top: "15%",
          left: "0",
          right: "0",
          bottom: "22%"
          // containLabel: true
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            animation: true
          }
          // formatter: function(params) {
          //       var htmlStr = '<div style="color: #fff">';
          //       htmlStr += params[0].name +'<br/>';
          //       htmlStr +=   params[0].seriesName + ': ' + (params[0].value / 10000).toFixed(2) + '万元<br/>';
          //       return htmlStr;
          // }
        },
        // legend:{
        //     show:true,
        //      right:0,
        // },
        xAxis: [
          {
            type: "category",
            boundaryGap: true,
            axisLine: {
              //坐标轴轴线相关设置。数学上的x轴
              show: true,
              lineStyle: {
                color: "#EAEAEA"
              }
            },
            axisLabel: {
              //坐标轴刻度标签的相关设置
              textStyle: {
                color: "#fff",
                fontSize: 12
              }
              // interval:0,
              // rotate:40
            },
            axisTick: {
              show: false
            },
            data: ["11", "12", "13", "14", "15", "16", "17", "18", "19", "20"]
          }
        ],
        yAxis: [
          {
            type: "value",
            min: 0,
            max: 30,
            splitNumber: 5,
            splitLine: {
              show: true,
              lineStyle: {
                color: "rgba(238,238,238,0.2)",
                type: "dashed"
              }
            },
            axisLine: {
              show: false
            },
            axisLabel: {
              show: false,
              textStyle: {
                color: "#fff"
              }
            },
            textStyle: {
              color: "#fff"
            },
            axisTick: {
              show: false
            }
          }
        ],
        series: [
          {
            name: "增长数(用电)",
            type: "line",
            // symbol: "circle",
            // symbolSize: 8,
            symbol: "none", //取消折点圆圈
            lineStyle: {
              normal: {
                color: "#218BEA" // 线条颜色
              }
            },
            label: {
              show: false
            },
            itemStyle: {
              normal: {
                label: {
                  show: false, //开启显示
                  position: "top", //在上方显示
                  textStyle: {
                    //数值样式
                    color: "#fff",
                    fontSize: 12
                  }
                }
              }
            },
            axisLine: {
              lineStyle: {
                color: "rgba(234,234,234,.65)"
              }
            },
            areaStyle: {
              //区域填充样式
              normal: {
                //线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
                color: new echarts.graphic.LinearGradient(
                  0,
                  0,
                  0,
                  1,
                  [
                    {
                      offset: 0,
                      color: "rgba(32,138,234, .2)"
                    },
                    {
                      offset: 1,
                      color: "rgba(61,223,237,.2)"
                    }
                  ],
                  false
                )
                //  shadowColor: "rgba(53,142,215, 0.9)", //阴���颜色
                //  shadowBlur: 20 //shadowBlur设图形阴影的模糊大小。配合shadowColor,shadowOffsetX/Y, 设置图形的阴影效果。
              }
            },
            data: []
          }
        ]
      }
export default {
  mixins: [echartMixins],
  data() {
    return {
      uid: '',
      chart: null
    };
  },
  props: {
    list: {
      type: Array,
      default() {
        return [];
      }
    },
    max: {
      type: Number,
      default: 0
    }
  },
  mounted() {
    this.init();
  },
  components: {},
  computed: {},
  methods: {
    init() {
      if (this.list) {
        options.series[0].data = this.list;
        if (this.max) {
          options.yAxis[0].max = this.max;
        }
      }
      let chartDom = this.$refs[`echarts${this.uid}`];
      this.chart = echarts.init(chartDom);
      this.chart.setOption(options);
    }
  },
  watch: {
    list: {
      handler() {
        this.init();
      },
      deep: true
    }
  }
};
</script>

<style scoped lang="less">
.echarts-box {
  height: 100%;
}
</style>

