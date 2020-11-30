<template>
  <div class="home">
    <body style="width: 1024px; height: 768px;">
      <div id="div1">
        <span class="text1">刘总的日程安排项目</span>
        <input type="text" name="input1" id="input1" value="请输入项目名称" />
        <input type="date" name="input2" id="input2" value="" />
        <button type="button" id="btn1">搜 索</button>
      </div>
      <div id="div2">
        <div id="div21">
          <img src="../assets/addPartner.png" id="img1" />
          <span class="text2">添加团队成员</span>
        </div>
        <div id="div3">
          <span class="text3">项目列表</span>
          <select NAME="TEMP" id="select1">
            <option value="AAAAAA">AAAAAA</option>
          </select>
          <p id="p1"></p>
        </div>
      </div>
    </body>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {},
};
</script>

<style lang="less" scoped>
body {
  margin: 0;
  overflow: hidden;
}
#div1 {
  position: absolute;
  top: 0;
  left: 0;
  width: 1024px;
  height: 131px;
  background: #ffffff;
  border: 1px solid #777777;
}
.text1 {
  width: 324px;
  height: 29px;
  left: 37px;
  top: 50px;
  font-size: 28px;
  font-weight: bold;
  font-family: Microsoft YaHei, Microsoft YaHei-Normal;
  font-weight: Normal;
  text-align: left;
  color: #777777;
  line-height: 6px;
  position: absolute;
}
#input1 {
  width: 200px;
  height: 28px;
  left: 400px;
  top: 40px;
  background: #ffffff;
  border: 1px solid #777777;
  border-radius: 0px;
  font-size: 14px;
  font-family: Microsoft YaHei, Microsoft YaHei-Normal;
  font-weight: Normal;
  text-align: left;
  color: #777777;
  line-height: 20px;
  position: absolute;
}
#input2 {
  width: 150px;
  height: 28px;
  left: 640px;
  top: 40px;
  background: #ffffff;
  border: 1px solid #777777;
  border-radius: 2px;
  font-size: 14px;
  font-family: Microsoft YaHei, Microsoft YaHei-Normal;
  font-weight: Normal;
  text-align: left;
  color: #777777;
  line-height: 20px;
  position: absolute;
}
#btn1 {
  width: 70px;
  height: 28px;
  left: 830px;
  top: 43px;
  background: #ffffff;
  border: 1px solid #777777;
  border-radius: 4px;
  font-size: 14px;
  font-family: Microsoft YaHei, Microsoft YaHei-Normal;
  font-weight: Normal;
  text-align: center;
  color: #777777;
  line-height: 20px;
  position: absolute;
}
#div2 {
  position: absolute;
  left: 0;
  width: 300px;
  height: 637px;
  top: 133px;
  background: #ffffff;
  border: 2px solid #777777;
}
#img1 {
  top: 40px;
  left: 50px;
  position: absolute;
}
.text2 {
  top: 40px;
  left: 90px;
  position: absolute;
  font-weight: bold;
}
#div21 {
  height: 100px;
  background: #ffffff;
  border-bottom: 1px solid #777777;
}
#div3 {
  position: absolute;
  width: 723px;
  height: 638px;
  top: -2px;
  left: 301px;
  background: #ffffff;
  border: 1px solid #777777;
  position: absolute;
}
.text3 {
  width: 112px;
  height: 34px;
  left: 90px;
  top: 50px;
  font-size: 28px;
  font-weight: bold;
  font-family: Microsoft YaHei, Microsoft YaHei-Normal;
  font-weight: Normal;
  text-align: left;
  color: #777777;
  line-height: 6px;
  position: absolute;
}
#select1 {
  width: 150px;
  height: 25px;
  left: 500px;
  top: 42px;
  border-radius: initial;
  position: absolute;
}
#p1 {
  top: 70px;
  left: 120px;
  position: absolute;
  width: 500px;
  height: 0px;
  border: 1px solid #777777;
}
</style>
