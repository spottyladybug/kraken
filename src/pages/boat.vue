<template>
	<div id="boat">
		<b-container class="my-4">
			<b-row>
				<b-col lg="8">
					<b-row>
						<b-col lg="2">
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
							rows="10"
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
									<div class="add-img-boat">+</div>
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
					<ProfileCard/>
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
		
		font-size: 30px;
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


		margin-bottom: 140px;

		font-family: Roboto;
	}

	.success-big {
		width: 350px;
		height: 60px;

		font-size: 20px;
		line-height: 23px;

		font-family: Roboto;
	}

	.add-img-boat {
		display: flex;
		justify-content: center;
		align-items: center;
	}


	
</style>