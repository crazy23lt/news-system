import Vue from "vue";
Vue.filter("dateFormat", function(originVal, type) {
  const dt = new Date(originVal - 0);
  //   console.info(dt);
  //   return originVal;
  // 获取时间内的年
  const y = dt.getFullYear();
  // 获取时间内的月（月从0开始，+1）（隐式数据类型转变）（月份两位数展示，不足补0）
  const m = (dt.getMonth() + 1 + "").padStart(2, "0");
  // 获取时间内的日（隐式数据类型转变）（日期两位数展示，不足补0）
  const d = (dt.getDate() + "").padStart(2, "0");
  if (type) {
    return `${y}-${m}-${d}`;
  } else {
    // 获取时间内的小时（隐式数据类型转变）（小时两位数展示，不足补0）
    const hh = (dt.getHours() + "").padStart(2, "0");
    // 获取时间内的分钟（隐式数据类型转变）（分钟两位数展示，不足补0）
    const mm = (dt.getMinutes() + "").padStart(2, "0");
    // 获取时间内的秒（隐式数据类型转变）（秒两位数展示，不足补0）
    const ss = (dt.getSeconds() + "").padStart(2, "0");
    return `${y}-${m}-${d}--${hh}:${mm}:${ss}`;
  }
});
