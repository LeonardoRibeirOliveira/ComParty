const reportsBarChartData = {
  chart: {
    labels: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: { label: "Sales", data: [450, 200, 100, 220, 500, 100, 400, 230, 500] },
  },
  items: [
    {
      icon: { color: "primary", component: "" },
      label: "Sertanejo",
      progress: { content: "36 Ouvintes", percentage: 60 },
    },
    {
      icon: { color: "info", component: "touch_pp" },
      label: "Rock",
      progress: { content: "200 Ouvintes", percentage: 90 },
    },
    {
      icon: { color: "warning", component: "" },
      label: "Pop",
      progress: { content: "45 Ouvintes", percentage: 30 },
    },
    {
      icon: { color: "error", component: "" },
      label: "Pagode",
      progress: { content: "43 Ouvintes", percentage: 50 },
    },
  ],
};

export default reportsBarChartData;
