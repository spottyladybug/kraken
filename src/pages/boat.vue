<template>
	<div id="boat">
		<b-container class="py-4">
			<b-row>
				<b-col lg="8">
					<b-row>
						<b-col lg="8">
							<div class="ttl">
								Регистрация cудна
							</div>
						</b-col>
					</b-row>

					<b-row>
						<b-col lg="6">
							<b-form-input 
							class="type" 
							type="text" 
							placeholder="Название судна"
							></b-form-input>
							
							<b-form-input 
							class="type" 
							type="number" 
							placeholder="Год выпуска"
							></b-form-input>

							<b-form-input 
							class="type" 
							type="number" 
							placeholder="Количество мест"
							></b-form-input>

							<b-form-textarea 
							id="textarea" 
							placeholder="Описание"
							rows="9"
							></b-form-textarea>

						</b-col>
						<b-col lg="6">
							<b-row>
								<b-col lg="7">
									<div class="ttl-boat">Изображение судна</div>
								</b-col>
							</b-row>
							<b-row>
								<b-col lg="6">
									<div class="plus"> 
									<div class="circle">
										+
									</div>
									</div>

								</b-col>
							</b-row>
							<b-row>
								<b-col lg="6">
									<div class="ttl-doc">Документы</div>
								</b-col>
							</b-row>
							<b-row>
								<b-col lg="6">
									<b-button class="success" variant="success">Загрузить</b-button>
								</b-col>
							</b-row>
							<b-row>
								<b-col lg="12">
									<b-button class="success-big" variant="success">Зарегистрировать</b-button>
								</b-col>
							</b-row>
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
		margin: 0 0 38px 0; 

		font-family: Roboto;

	}

	.ttl-boat {
		font-size: 18px;
		line-height: 21px;

		margin-bottom: 21px;

		font-family: Roboto;
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


		margin-bottom: 155px;

		font-family: Roboto;
	}

	.success-big {
		width: 350px;
		height: 60px;

		font-size: 20px;
		line-height: 23px;

		background: #78D657;
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

		width: 161px;
		height: 97px;

		margin: 8px 0 45px 0;

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

	
</style>