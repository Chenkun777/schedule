<template>
	<div class="home">
		<body style="width: 1024px; height: 768px;">
			<div id="div1">
				<span class="text1">刘总的日程安排项目</span>
				<input type="text" name="input1" id="input1" value="" placeholder="请输入项目的名称"/>
				<input type="date" name="input2" id="input2" value=""  />
				<button type="button" id="btn1" @click="but1click">搜 索</button>
			</div>
		</body>
	</div>

</template>

<script>
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
</style>
