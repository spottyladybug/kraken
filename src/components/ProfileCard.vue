<template>
	<div class="profile-info">
		<div class="profile-info">
						<b-row>
							<b-col lg="3">
								<div class="avatar">
									<!-- Добавть фото профиля -->
									<img src="../img/avatar.png" alt="">

									<!-- <div class="fake-img">
									фото
									</div> -->
								</div>
							</b-col>
							<b-col lg="6">
								<div class="main-info">
									<div class="name-info">
										Max Flores
									</div>
									<div class="phone-info">
										8 (406) 555-0120
									</div>
								</div>
							</b-col>
							<b-col lg="3">
								<div class="icon">
									<div class="sq"></div>
								</div>
							</b-col>
						</b-row>

						<b-row class="mx-3">
							<b-col lg="12">
								<div class="email-ttl">Email</div>
							</b-col>
							<b-col lg="12">
								<div class="email-info">erika.evans@example.com</div>
							</b-col>
							<b-col lg="12">
								<div class="number-heats">Количество заплывов</div>
							</b-col>
							<b-col lg="12">
								<div class="heats-block">25</div>
							</b-col>
							<b-col lg="12">
								<div class="passport-info">Данные паспорта</div>
							</b-col>
							<b-col lg="12">
								<div class="plus">
									+
								</div>
							</b-col>
							<b-col lg="12">
								<div class="about-info">О себе</div>
							</b-col>
							<b-col lg="12">
								<b-form-textarea 
								id="textarea-about" 
								placeholder="Описание"
								rows="6"
								></b-form-textarea>
							</b-col>
						</b-row>
					</div>
	</div>
</template>

<script>
	
</script>

<style>
	
	.profile-info {
		width: 100%;

		
		border: 1px solid #F4F4F4;
		border-radius: 15px;
		background: #F4F4F4;

		font-family: Roboto;
	}

	@media (max-width: 1190px) {
		.profile-info {display: none;}
	}

	.avatar {
		/* display: flex;
		align-items: center;
		justify-content: center; */


		width: 100%;
		/* height: 89px; */
	}

	.fake-img {
		background-color: #C4C4C4;
		border-radius: 13px 0px 0px 0px;

		/* width: 95px; */
		/* height: 89px; */
	}

	.main-info {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;


		height: 89px;

		color: #000;
	}

	.name-info{
		font-family: Roboto;
		font-style: normal;
		font-weight: bold;
		font-size: 16px;
		line-height: 19px;

		margin-bottom: 7px;
	}

	.phone-info{
		font-family: Roboto;
		font-style: normal;
		font-weight: 100;
		font-size: 1rem;
		line-height: 1.085em;
	}

	.icon {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;

		width: 95px;
		height: 89px;
	}

	.sq {
		width: 31px;
		height: 31px;

		background: #C4C4C4;
	}

	.email-ttl {

		font-family: Roboto;
		font-style: normal;
		font-weight: normal;
		font-size: 1rem;
		line-height: 1.0875em;
		color: #555555;

		margin-bottom: 0.5em;
		margin-top: 0.925em;
	}

	.email-info {
		font-family: Roboto;
		font-style: normal;
		font-weight: normal;
		font-size: 1em;
		line-height: 1.0875em;

		margin-bottom: 0.825em;
	}

	.number-heats {
		font-family: Roboto;
		font-style: normal;
		font-weight: normal;
		font-size: 1em;
		line-height: 1.0875em;


		color: #555555;

		margin-bottom: 0.925em;
	}

	.heats-block {
		display: flex;
		align-items: center;
		justify-content: center;

		width: 70px;
		height: 31px;
		
		background: #C4C4C4;
		border-radius: 5px;

		font-family: Roboto;
		font-style: normal;
		font-weight: normal;
		font-size: 1em;
		line-height: 1.0875em;

		margin-bottom: 1em;
	}

	.passport-info {
		font-family: Roboto;
		font-style: normal;
		font-weight: normal;
		font-size: 1em;
		line-height: 1.0875em;

		color: #555555;

		margin-bottom: 1em;
	}

	.plus {
		display: flex;
		justify-content: center;
		align-items: center;

		width: 44px;
		height: 44px;

		background: #C4C4C4;

		border-radius: 100%;

		margin-bottom: 10px;
	}

	.about-info {
		font-family: Roboto;
		font-style: normal;
		font-weight: normal;
		font-size: 1em;
		line-height: 1.0875em;


		color: #555555;

		margin-bottom: 10px;
	}

	#textarea-about {
		width: 100%;
	}
</style>