<template>
  <div>
    <table class="mainTask">
      <tr>
        <td>项目名称</td>
        <td>参与者</td>
        <td>起始时间</td>
        <td>结束时间</td>
        <td>完成进度</td>
      </tr>
      <tr v-for="(item, index) in mainTask" :key="index">
        <td>{{ item.name }}</td>
        <td>{{ item.participant[0] }},{{ item.participant[1] }}</td>
        <td>{{ item.startTime }}</td>
        <td>{{ item.endTime }}</td>
        <td>{{ item.processBar }}</td>
      </tr>
    </table>
    <!-- <img src="../assets/addProject.png" /> -->
  </div>
</template>

<script>
export default {
  name: "mainTaskTable",
  data() {
    return {
      mainTask: [
        {
          name: "countdown",
          startTime: "2020.11.27",
          endTime: "2020.11.27",
          participant: ["锟总", "干饭王"],
          processBar: "100%",
        },
        {
          name: "schedule",
          startTime: "2020.11.29",
          endTime: "2020.12.06",
          participant: ["锟总", "干饭王"],
          processBar: "10%",
        },
      ],
    };
  },
  methods: {
    getJson() {
      let url = "../assets/mainTask.json";
      this.$axios({ url: url, method: "get" }).then((response) => {
        console.log(response);
      });
    },
  },
  mounted() {
    this.getJson();
  },
};
</script>

<style scoped>
.mainTask {
  position: absolute;
  top: 100px;
  left: 30px;
  border-collapse: collapse;
}
tr {
  height: 40px;
}
td {
  width: 130px;
  border: 1px solid #777777;
}
</style>
