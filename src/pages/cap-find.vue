<template>
	<div id="boat">
		<b-container class="py-4">
			<b-row>
				<b-col lg="8">
					<b-row>
						<b-col lg="12">
							<b-row>
								<b-col lg="6">
									<div class="ttl">
										Заявки капитанов
									</div>

									<div class="counter">количество заявок: <b>8</b></div>
								</b-col>
							</b-row>
							<b-row>
								<b-col lg="6">
									<b-row>
										<b-col lg="12">
											<div class="cap-card">
												<b-row>
													<b-col-5>
														<div class="photo">
															<img src="../img/avatar.png" alt="placeholder+image">
														</div>
													</b-col-5>
													<b-col-7>
														<div class="info">
															<b-row>
																<div class="info-block">
																	<div class="name">Robert Henry</div>
																	<div class="phone">8 (303) 555-0105</div>
																	<div class="heats">Кол. заплывов: <b>25</b></div>
																</div>
															</b-row>
															<b-row>
																<div class="bttns">
																	<button class="bttn-accept" variant="success">Принять</button>
																	<button class="bttn-reject" variant="success">Отклонить</button>
																</div>
															</b-row>
														</div>
													</b-col-7>
												</b-row>
											</div>
										</b-col>

										<b-col lg="12">
											<div class="cap-card">
												<b-row>
													<b-col-5>
														<div class="photo">
															<img src="../img/avatar.png" alt="placeholder+image">
														</div>
													</b-col-5>
													<b-col-7>
														<div class="info">
															<b-row>
																<div class="info-block">
																	<div class="name">Robert Henry</div>
																	<div class="phone">8 (303) 555-0105</div>
																	<div class="heats">Кол. заплывов: <b>25</b></div>
																</div>
															</b-row>
															<b-row>
																<div class="bttns">
																	<button class="bttn-accept" variant="success">Принять</button>
																	<button class="bttn-reject" variant="success">Отклонить</button>
																</div>
															</b-row>
														</div>
													</b-col-7>
												</b-row>
											</div>
										</b-col>

										<b-col lg="12">
											<div class="cap-card">
												<b-row>
													<b-col-5>
														<div class="photo">
															<img src="../img/avatar.png" alt="placeholder+image">
														</div>
													</b-col-5>
													<b-col-7>
														<div class="info">
															<b-row>
																<div class="info-block">
																	<div class="name">Robert Henry</div>
																	<div class="phone">8 (303) 555-0105</div>
																	<div class="heats">Кол. заплывов: <b>25</b></div>
																</div>
															</b-row>
															<b-row>
																<div class="bttns">
																	<button class="bttn-accept" variant="success">Принять</button>
																	<button class="bttn-reject" variant="success">Отклонить</button>
																</div>
															</b-row>
														</div>
													</b-col-7>
												</b-row>
											</div>
										</b-col>

										<b-col lg="12">
											<div class="cap-card">
												<b-row>
													<b-col-5>
														<div class="photo">
															<img src="../img/avatar.png" alt="placeholder+image">
														</div>
													</b-col-5>
													<b-col-7>
														<div class="info">
															<b-row>
																<div class="info-block">
																	<div class="name">Robert Henry</div>
																	<div class="phone">8 (303) 555-0105</div>
																	<div class="heats">Кол. заплывов: <b>25</b></div>
																</div>
															</b-row>
															<b-row>
																<div class="bttns">
																	<button class="bttn-accept" variant="success">Принять</button>
																	<button class="bttn-reject" variant="success">Отклонить</button>
																</div>
															</b-row>
														</div>
													</b-col-7>
												</b-row>
											</div>
										</b-col>
									</b-row>
								</b-col>

								<b-col lg="6">
									
									<div class="plus"> 
									<div class="circle">
										+
									</div>
									</div>
								</b-col>

							</b-row>
						</b-col>
					</b-row>
				</b-col>
				<b-col lg="4">
					<!-- <ProfileCard/> -->
				</b-col>
			</b-row>
		</b-container>
	</div>
</template>

<script>
	// import ProfileCard from 'src/components/ProfileCard'
	export default {
		components: {
			// ProfileCard,
		}
	}
</script>

<style scoped>
	.ttl {
			
		font-size: 22px;
		line-height: 26px; 

		font-family: Roboto;
	}

	.ttl-cap {
		font-size: 22px;
		line-height: 26px; 

		font-family: Roboto;

		margin-left: 28px;
	}

	.add-img-boat {
		width: 161px;
		height: 97px;

		background: #9E9E9E;
		border-radius: 5px;

		margin-bottom: 24px;
	}

	.ttl-doc {

		font-family: Roboto;
		font-size: 18px;
		line-height: 21px;

		margin-bottom: 21px;
	}

	.type {
		margin: 0 0 27px 0;
	}

	.profile-info {
		width: 350px;
		height: 531px;

		
		border: 1px solid #F4F4F4;
		border-radius: 15px;
		background: #F4F4F4;

		font-family: Roboto;
	}

	.success {
		width: 161px;
		height: 45px;

		border-radius: 5px;

		font-size: 18px;
		line-height: 21px;

		background: #17A4D2;
		border:none;
		border-radius: 5px;


		margin-bottom: 140px;

		font-family: Roboto;
	}

	.success-big {
		width: 350px;
		height: 60px;

		font-size: 20px;
		line-height: 23px;

		background: #7AEC52;
		border-radius: 5px;
		border: none;

		font-family: Roboto;
	}

	.add-img-boat {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.plus {
		display: flex;
		justify-content: center;
		align-items: center;

		width: 349px;
		height: 114px;

		margin: 8px 0 45px 55px;

		box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.07);
		border-radius: 5px;
		background: #FFFFFF;
	}

	.circle {
		display: flex;
		align-items: center;
		justify-content: center;

		width: 51px;
		height: 51px;

		background: #17A4D2;
		border-radius: 100%;

		font-family: Roboto;
		font-style: normal;
		font-weight: normal;
		font-size: 31.5273px;
		line-height: 37px;

	}

		.cap-card {
		display: flex;
		flex-wrap: wrap;

		width: 349px;
		height: 114px;
		
		background: #FFFFFF;
		border-radius: 5px;

		margin: 15px 15px 15px 15px;
	}

	.photo {
		width: 115px;
		height: 114px;
		
		background-color: #C4C4C4;

		border-radius: 5px 0 0 5px;
	}

	.photo img {
		width: 100%;
	}

	.info {
		display: flex;
		flex-direction: column;
	}

	.info-block {
		padding: 10px 0 3px 30px;
	}

	.name {
		font-family: Roboto;
		font-style: bold;
		font-weight: 500;
		font-size: 18px;
		line-height: 21px;

		margin-bottom: 5px;
	}

	.phone {
		font-family: Roboto;
		font-style: normal;
		font-weight: normal;
		font-size: 14px;
		line-height: 16px;

		margin-bottom: 3px;
	}

	.heats {
		font-family: Roboto;
		font-style: normal;
		font-size: 16px;
		line-height: 19px;
	}

	.bttns {
		margin:7px 0 0 35px;
	}

	.block-bttns {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;

	}

	.bttn-accept {
		width: 124px;
		height: 31px;

		border: none;

		background: #8FE173;

		margin-left: -20px;

		color:#fff;
	}

	.bttn-reject {
		width: 125px;
		height: 31px;

		border: none;

		background: #F58282;
		border-radius: 0 0 5px 0;
		color:#fff;
	}

	
</style>