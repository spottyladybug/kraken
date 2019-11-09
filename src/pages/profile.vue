<template>
	<div id="profile">
		<b-container>
			<b-row>
				<b-col lg="8">
					<b-row>
						<b-col lg="2">
							<div class="ttl">
								Роли
							</div>
						</b-col>
					</b-row>

					<b-row>
						<b-col lg="6">
							<div class="role">
								<div class="role-ttl">
									Владелец судна
								</div>
								<div class="role-icon"></div>
							</div>
						</b-col>
						<b-col lg="6">
							<div class="role">
								<div class="role-ttl">
									Капитан
								</div>
								<div class="role-icon"></div>
							</div>
						</b-col>
						<b-col lg="6">
							<div class="role">
								<div class="role-ttl">
									Матрос
								</div>
								<div class="role-icon"></div>
							</div>
						</b-col>
						<b-col lg="6">
							<div class="role">
								<div class="role-ttl">
									Помощник организатора
								</div>
								<div class="role-icon"></div>
							</div>
						</b-col>
					</b-row>
				</b-col>

				<b-col lg="4">
					<div class="profile-info">

					</div>
				</b-col>
			</b-row>
		</b-container>
	</div>
</template>

<script>
	export default {

	}
</script>

<style scoped>
	.ttl {
		
		font-size: 30px;
		line-height: 35px; 

		font-family: Roboto;
	}

	.role {

		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;

		width: 350px;
		height: 212px;
		margin: 30px 30px 0 0;

		background: #F4F4F4;
		border-radius: 18px;
		
	}

	.role-ttl {
		font-size: 22px;
		line-height: 26px;
		margin: 0 0 21px 0;

		font-family: Roboto;
	}

	.role-icon {
		width: 160px;
		height: 123px;
		background: #C4C4C4;
	}

	.profile-info {
		width: 350px;
		height: 531px;

		
		border: 1px solid #F4F4F4;
		border-radius: 15px;
		background: #F4F4F4;

		font-family: Roboto;
	}


</style>