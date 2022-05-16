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
        trigger: "axis",
        backgroundColor: "#fff",
        textStyle: {
          color: '#000',
          fontFamily: "BarlowRegular",
          fontSize: 16,
        },
        axisPointer: {
          type: "cross",
          crossStyle: {
            color: "#000",
          },
          lineStyle: {
            color: "#000",
          },
        },
      },
      grid: {
        top: 35,
        bottom: 50,
        left: 80,
        right: 80,
      },
      color: ["#62929E", "#62929E"],
      xAxis: [
        {
          type: "category",
          data: ["1/23", "1/30", "2/8", "2/16", "2/25", "3/3", "3/14"],
          axisTick: {
            alignWithLabel: true,
          },
          axisPointer: {
            label: {
              backgroundColor: "#ddd",
              color: "#000",
              fontFamily: "BarlowRegular",
              fontSize: 16,
            },
          },
          axisLabel: {
            show: true,
            interval: 0,
            color: "#000",
            fontFamily: "BarlowRegular",
            fontSize: 16,
            letterSpacing: -1,
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: "#DDDDDD",
              width: 1,
            },
          },
        },
      ],
      yAxis: [
        {
          type: "value",
          axisLabel: {
            color: "#000",
            fontFamily: "BarlowRegular",
            fontSize: 16,
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: "#ddd",
            },
          },
          splitLine: {
            lineStyle: {
              type: "solid",
              color: "#DDDDDD",
              width: 1,
            },
          },
          axisTick: {
            show: true,
          },
          axisPointer: {
            label: {
              backgroundColor: "#ddd",
              color: "#000",
              fontFamily: "BarlowRegular",
              fontSize: 16,
            },
          },
        },
        {
          type: "value",
          axisLabel: {
            color: "#000",
            fontFamily: "BarlowRegular",
            fontSize: 16,
            formatter: `{value} %`,
          },
          splitLine: {
            show: false,
          },
        },
      ],
      series: [
        {
          name: "value",
          type: "bar",
          yAxisIndex: 0,
          barWidth: 15,
          label: {
            show: true,
            position: "top",
            color: "#000",
            fontFamily: "BarlowRegular",
            fontSize: 16,
          },
          tooltip: {
            valueFormatter: function (value) {
              return value + " ml";
            },
          },
          data: [
            2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3,
          ],
          select: {
            backgroundColor: "red",

            labelLine: {
              show: true,
              backgroundColor: "red",
              color: "blue",
            },
          },
        },
        {
          name: "vols rate",
          type: "line",
          select: {
            backgroundColor: "red",

            labelLine: {
              show: true,
              backgroundColor: "red",
              color: "blue",
            },
          },
          yAxisIndex: 0,
          tooltip: {
            show: false,
          },
          data: [
            2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3,
          ],
        },
      ],
    };
  };

  return <div className={classes.root} ref={myChart} />;
};

export default ActivityBar;
const useStyle = makeStyles((theme) => ({
  root: {
    height: 318,
    background: "#fff",
    marginBottom: 30,
    borderRadius: 20,
  },
}));
