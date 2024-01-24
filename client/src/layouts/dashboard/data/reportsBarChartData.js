const reportsBarChartData = {
  chart: {
    labels: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: { label: "Sales", data: [450, 200, 100, 220, 500, 100, 400, 230, 500] },
  },
  items: [
    {
      icon: { color: "primary", component: "" },
      label: "Sertanejo",
      progress: { content: "6 Ouvintes", percentage: 6 },
    },
    {
      icon: { color: "info", component: "touch_pp" },
      label: "Rock",
      progress: { content: "3 Ouvintes", percentage: 3 },
    },
    {
      icon: { color: "warning", component: "" },
      label: "Pop",
      progress: { content: "5 Ouvintes", percentage: 5 },
    },
    {
      icon: { color: "error", component: "" },
      label: "mpb",
      progress: { content: "4 Ouvintes", percentage: 4 },
    },
    {
      icon: { color: "error", component: "" },
      label: "Eletrofunk",
      progress: { content: "4 Ouvintes", percentage: 4 },
    },
  ],
};

export default reportsBarChartData;
