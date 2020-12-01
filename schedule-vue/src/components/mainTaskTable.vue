<template>
	<div>
		<table class="mainTask">
			<tr>
				<td>name</td>
				<td>startTime</td>
				<td>endTime</td>
				<td>participant</td>
				<td>processBar</td>
			</tr>
			<tr v-for="(item,index) in mainTask" :key="index">
				<td>{{item.name}}</td>
				<td>{{item.startTime}}</td>
				<td>{{item.endTime}}</td>
				<td>{{item.participant[0]}},{{item.participant[0]}}</td>
				<td>{{item.processBar}}</td>
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
				mainTask: [{
						"name": "countdown",
						"startTime": "2020.11.27",
						"endTime": "2020.11.27",
						"participant": ["kunzong", "ganfanwang"],
						"processBar":"100%"
					},
					{
						"name": "schedule",
						"startTime": "2020.11.29",
						"endTime": "2020.12.06",
						"participant": ["kunzong", "ganfanwang"],
						"processBar":"10%"
					},
				]
			};
		},
	}
</script>

<style scoped>
.mainTask {
	position: absolute;
	top: 100px;
	left: 50px;
	
}
tr {
	height: 50px;
}
td {
	width: 100px;
}
</style>
