import React, { useEffect, useState, useRef, useMemo } from "react";
import * as echarts from "echarts";
import { Grid, Hidden, makeStyles } from "@material-ui/core";

//百分比数据，要计算好再传入
const ActivityBar = (props) => {
  const { data = [] } = props;
  const classes = useStyle();

  let chartDom = null;
  const myChart = useRef(null);

  const barData = useMemo(() => {
    if (data && data.length === 0) return;
    const obj = {};
    obj.productName = data.map((item) => item.productName); //产品名称
    obj.requiredQty = data.map((item) =>
      item.requiredQty ? item.requiredQty : 0
    ); //订单需求量
    obj.finishedQty = data.map((item) =>
      item.finishedQty ? item.finishedQty : 0
    ); //交货量 （投料量）
    obj.xiShaQty = data.map((item) => (item.xiShaQty ? item.xiShaQty : 0)); //细纱完工量
    obj.orderEnd = data.map((item) => (item.orderEnd ? item.orderEnd : 0)); //订单了尾日
    return obj;
  }, [data]);

  useEffect(() => {
    return () => {
      chartDom && chartDom.dispose();
    };
  }, []);

  useEffect(() => {
    if (!chartDom) {
      chartDom = echarts.init(myChart.current);
      chartDom.setOption(option());
    }
    // chartDom.setOption({
    //   xAxis: [
    //     {
    //       type: "category",
    //       data: barData && barData.productName,
    //     },
    //   ],
    //   series: [
    //     {
    //       name: "订单量",
    //       data: barData && barData.requiredQty,
    //     },
    //     {
    //       name: "交货量",
    //       data: barData && barData.finishedQty,
    //     },
    //     {
    //       name: "细纱完工量",
    //       data: barData && barData.xiShaQty,
    //     },
    //     {
    //       name: "订单了尾日",
    //       data: barData && barData.orderEnd,
    //     },
    //   ],
    // });
  }, [data]);

  const option = () => {
    return {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          crossStyle: {
            color: '#999'
          }
        }
      },
     
      legend: {
        data: ['Evaporation', 'Temperature']
      },
      xAxis: [
        {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          axisPointer: {
            type: 'shadow'
          }
        }
      ],
      yAxis: [
        {
          type: 'value',
          name: 'Precipitation',
          min: 0,
          max: 250,
          interval: 50,
          axisLabel: {
            formatter: '{value} ml'
          }
        },
        {
          type: 'value',
          name: 'Temperature',
          min: 0,
          max: 25,
          interval: 5,
          axisLabel: {
            formatter: '{value} °C'
          }
        }
      ],
      series: [
        {
          name: 'Evaporation',
          type: 'bar',
          tooltip: {
            valueFormatter: function (value) {
              return value + ' ml';
            }
          },
          data: [
            2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3
          ]
        },
      
        {
          name: 'Temperature',
          type: 'line',
          yAxisIndex: 1,
          tooltip: {
            valueFormatter: function (value) {
              return value + ' °C';
            }
          },
          data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
        }
      ]
    }
  };

  return <div className={classes.root} ref={myChart} />;
};

export default ActivityBar;
const useStyle = makeStyles((theme) => ({
  root: {
    height: 318,
    // background: 'red',
    marginBottom: 30
  },
 
}));
