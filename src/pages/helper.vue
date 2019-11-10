<template>
	<div id="sailor">
		<b-container class="py-4">
			<b-row>
				<b-col lg="8">
					<b-row>
						<b-col lg="7">
							<div class="ttl">
								Регистрация помощника
							</div>
						</b-col>
					</b-row>

					<b-row>
						<b-col lg="6"><div class="ttl-doc">Документы</div></b-col>
					</b-row>
					<b-row>
						<b-col lg="6"><b-button class="success" variant="success">Загрузить</b-button></b-col>
					</b-row>
					<b-row>
						<b-col lg="6">
							<b-form-textarea 
							id="textarea-helper" 
							placeholder="Опыт"
							rows="6"
							></b-form-textarea>
						</b-col>
					</b-row>
					<b-row>
						<b-col lg="6" class="pl-0">
							<b-col lg="6"><b-button class="success-big" variant="success">Зарегистрировать</b-button></b-col>
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

		background: #17A4D2;
		border:none;
		border-radius: 5px;

		font-size: 18px;
		line-height: 21px;


		margin-bottom: 45px;

		font-family: Roboto;
	}

	.success-big {
		width: 350px;
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



	
</style>