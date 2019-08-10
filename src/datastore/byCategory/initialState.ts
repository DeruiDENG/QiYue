import { ContractAbstract, TimePeriod, WholeState } from "../type";

const byCategorySearchContractAbstract: {
  [key: number]: ContractAbstract[];
} = {
  1: [
    {
      id: 1,
      name: "嘉庆十五年孝义县任永慎卖砖窑红契",
      time: TimePeriod.Qing,
      year: 1810,
      location: "山西",
    },
    {
      id: 2,
      name: "道光二十三年霍州县王宗武卖房红契",
      time: TimePeriod.Qing,
      year: 1843,
      location: "山西",
    },
    {
      id: 3,
      name: "同治五年凤台县张全武卖房红契",
      time: TimePeriod.Qing,
      year: 1866,
      location: "山西",
    },
    {
      id: 4,
      name: "同治六年凤台县张全玉卖房红契",
      time: TimePeriod.Qing,
      year: 1867,
      location: "山西",
    },
    {
      id: 5,
      name: "同治七年绥德县黑天锡卖窑白契",
      time: TimePeriod.Qing,
      year: 1868,
      location: "陕西",
    },
    {
      id: 6,
      name: "同治九年绥德州郝大银卖窑红契",
      time: TimePeriod.Qing,
      year: 1870,
      location: "陕西",
    },
    {
      id: 7,
      name: "同治十一年清涧县师鸿运卖坐宅红契",
      time: TimePeriod.Qing,
      year: 1872,
      location: "陕西",
    },
    {
      id: 8,
      name: "光绪元年临汾县李门梁氏同子登云卖房红契",
      time: TimePeriod.Qing,
      year: 1875,
      location: "山西",
    },
    {
      id: 9,
      name: "光绪四年绥德县李应士卖窑地白契",
      time: TimePeriod.Qing,
      year: 1878,
      location: "陕西",
    },
    {
      id: 10,
      name: "光绪十七年凤台县张书枝卖房红契",
      time: TimePeriod.Qing,
      year: 1891,
      location: "山西",
    },
  ],
  2: [
    {
      id: 11,
      name: "光绪二十年凤台县张永清卖厕坑红契",
      time: TimePeriod.Qing,
      year: 1894,
      location: "山西",
    },
    {
      id: 12,
      name: "光绪二十九年葭州徐良有卖窑红契",
      time: TimePeriod.Qing,
      year: 1903,
      location: "陕西",
    },
    {
      id: 13,
      name: "光绪三十三年绥德县黑应祥卖窑白契",
      time: TimePeriod.Qing,
      year: 1907,
      location: "山西",
    },
    {
      id: 14,
      name: "光绪年间晋城县秦天池卖房红契附官契",
      time: TimePeriod.Qing,
      location: "山西",
    },
    {
      id: 15,
      name: "光绪年间高平县冯立荣卖房红契附官契",
      time: TimePeriod.Qing,
      location: "山西",
    },
    {
      id: 16,
      name: "民国六年绥德县李家坪李勤业卖窑白契",
      time: TimePeriod.MinGuo,
      year: 1917,
      location: "陕西",
    },
    {
      id: 17,
      name: "嘉庆十五年孝义县任永慎卖砖窑红契",
      time: TimePeriod.MinGuo,
      year: 1933,
      location: "山西",
    },
  ],
};

export const initialState: WholeState["byCategorySearch"] = {
  input: {
    checkedKeys: [],
  },
  savedInput: {
    checkedKeys: [],
  },
  contents: byCategorySearchContractAbstract,
  pagination: {
    current: 1,
    total: 17,
  },
  isContentLoading: false,
};
