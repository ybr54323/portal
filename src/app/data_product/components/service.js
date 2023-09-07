let id = 0;
let bizList = ["金融", "保险", "教育", "医疗", "文旅", "民生"];
let goodList = ["数据集", "API"];

bizList = bizList.map((item) => {
  return {
    id: id++,
    title: item,
    type: item,
  };
});
id = 0;
goodList = goodList.map((item) => {
  return {
    id: id++,
    title: item,
    type: item,
  };
});

export { bizList, goodList };
