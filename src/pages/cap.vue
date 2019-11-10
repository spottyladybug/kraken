<template>
	<div id="cap">
		<b-container class="py-4">
			<b-row>
				<b-col lg="8">
					<b-row>
						<b-col lg="12">
							<div class="ttl">
								Регистрация капитана
							</div>
						</b-col>
					</b-row>

					<b-row>
						<b-col lg="6">
							<b-row>
								<b-col lg="12">
									<b-form-input 
									class="type" 
									type="text" 
									placeholder="Номер прав"
									></b-form-input>
								</b-col>
								<b-col lg="12">
									<b-form-input 
									class="type" 
									type="number" 
									min="0"
									placeholder="Количество матросов"
									></b-form-input>
								</b-col>
							</b-row>
							
							<b-row>
								<b-col cols="12" xl="6">
									<div class="ttl-boat">Права капитана</div>
									<AddFile/>
								</b-col>
								<b-col cols="12" xl="6">
									<div class="ttl-doc">Документы</div>
									<AddFile/>
								</b-col>
							</b-row>
						</b-col>
						<b-col lg="6">
							<b-row>
								<b-col lg="12">
									<b-form-textarea 
									id="textarea-cap" 
									placeholder="Опыт"
									rows="9"
									></b-form-textarea>
								<!-- </b-col>
							
								<b-col lg="12" class="pl-0"> -->
									<b-button class="success-big" block variant="success">Зарегистрировать</b-button>
								</b-col>
							</b-row>
						</b-col>
					</b-row>
				</b-col>

				<b-col lg="4">
					<b-row>
						<b-col lg="12">
							<div class="ttl">
								Информация о пользователе 
							</div>
						</b-col>
					</b-row>
					<ProfileCard/>
				</b-col>
			</b-row>
		</b-container>
	</div>
</template>

<script>
	import ProfileCard from 'src/components/ProfileCard'
	import AddFile from 'src/components/AddFile'

	export default {
		components: {
			ProfileCard,
			AddFile
		}
	}
</script>

<style scoped>
	#cap {
		padding-bottom: 8vh;
	}

	.ttl {
		
		font-size: 22px;
		line-height: 26px;
		margin-bottom: 1em; 

		font-family: Roboto;
	}

	@media (max-width: 1190px) {
		.ttl:last-of-type {
			display: none;
		}
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

		background: #17A4D2;
		border:none;
		border-radius: 5px;

		font-size: 18px;
		line-height: 21px;


		margin-bottom: 140px;

		font-family: Roboto;
	}

	.success-big {
		width: 100%;
		height: 60px;

		font-size: 20px;
		line-height: 23px;

		font-family: Roboto;

		background: #7AEC52;
		border-radius: 5px;
		border: none;

		margin: 55px 0 0 0;
		padding: 0;
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