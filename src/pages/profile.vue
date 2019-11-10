<template>
	<div id="profile">
		<b-container class="py-4">
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
							<router-link :to="{ name: 'boat' }">
							<div class="role">
								<div class="role-ttl">
									Владелец судна
								</div>
								<div class="role-info">
									нет регистрации
								</div>
								<div class="role-icon">
								<img src="../img/Group.svg" alt="placeholder+image">
								</div>
							</div>
							</router-link>
						</b-col>
						<b-col lg="6">
							<router-link :to="{ name: 'cap' }">
							<div class="role">
								<div class="role-ttl-2">
									Капитан
								</div>
								<div class="role-info">
									нет регистрации
								</div>
								<div class="role-icon-2">
									<img src="../img/captain 1.svg" alt="placeholder+image">
								</div>
							</div>
							</router-link>
						</b-col>
						<b-col lg="6">
							<router-link :to="{ name: 'sailor' }">
							<div class="role">
								<div class="role-ttl-3">
									Матрос
								</div>
								<div class="role-info-3">
									нет регистрации
								</div>
								<div class="role-icon-3">
									
								<img src="../img/sailor 1.svg" alt="placeholder+image">


								</div>
							</div>
							</router-link>
						</b-col>
						<b-col lg="6">
							<router-link :to="{ name: 'helper' }">
							<div class="role">
								<div class="role-ttl-4">
									Помощник орг.
								</div>
								<div class="role-info">
									нет регистрации
								</div>
								<div class="role-icon-4">
									
									<img src="../img/support 1.svg" alt="placeholder+image">
								</div>
							</div>
							</router-link>
						</b-col>

					</b-row>
				</b-col>

				<b-col lg="4">
					<div class="all-profile-block">
						<div class="ttl">Информация о пользователе</div>
						<div class="prof-card">
							<ProfileCard/>
						</div>
					</div>
				</b-col>
			</b-row>
		</b-container>
	</div>
</template>

<script>

	import ProfileCard from 'src/components/ProfileCard'
	export default {
		components: {
			ProfileCard,
		}
	}
</script>

<style scoped>
	.ttl {
		
		font-size: 22px;
		line-height: 35px; 

		font-family: Roboto;
	}

	.prof-card {
		padding: 30px 0 0 0;
	}

	.role {

		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;

		width: 350px;
		height: 160px;
		margin: 30px 30px 0 0;

		background: #Fff;
		box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.07);
		border-radius: 18px;
		
	}

	.role-ttl {
		font-size: 22px;
		line-height: 26px;
		margin: 36px 114px 0 0;	

		font-family: Roboto;
	}

	.role-ttl-2 {
		font-size: 22px;
		line-height: 26px;
		margin: 36px 195px 0 0;	

		font-family: Roboto;
	}

	.role-ttl-3 {
		font-size: 22px;
		line-height: 26px;
		margin: 36px 195px 0 0;	

		font-family: Roboto;
	}

	.role-ttl-4 {
		font-size: 22px;
		line-height: 26px;
		margin: 36px 123px 0 0;	

		font-family: Roboto;
	}

	.role-info {
		font-family: Roboto;
		font-style: normal;
		font-weight: 300;
		font-size: 18px;
		line-height: 21px;

		margin-top: 8px;
		margin-right: 138px;

		color: #565656;
	}

	.role-info-3 {
		font-family: Roboto;
		font-style: normal;
		font-weight: 300;
		font-size: 18px;
		line-height: 21px;

		margin-top: 8px;
		margin-right: 134px;

		color: #565656;
	}

	.role-icon {
		display: flex;
		align-items: center;
		justify-content: center;

		margin: -48px -256px 0 0;	
	}

	.role-icon-2 {
		display: flex;
		align-items: center;
		justify-content: center;

		margin: -95px -182px 0 0;
	}

	.role-icon-3 {
		display: flex;
		align-items: center;
		justify-content: center;

		margin: -79px -198px 0 0;
	}

	.role-icon-4 {
		display: flex;
		align-items: center;
		justify-content: center;

		margin: -69px -210px 0 0;
	}




</style>