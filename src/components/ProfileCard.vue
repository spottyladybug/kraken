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
										<svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0)">
<path d="M23.997 16.333C23.6393 16.333 23.3494 16.6229 23.3494 16.9806V22.73C23.3482 23.8025 22.4793 24.6716 21.4068 24.6726H3.23767C2.16519 24.6716 1.29633 23.8025 1.29507 22.73V5.85588C1.29633 4.78365 2.16519 3.91454 3.23767 3.91327H8.98707C9.34474 3.91327 9.63461 3.6234 9.63461 3.26574C9.63461 2.90833 9.34474 2.6182 8.98707 2.6182H3.23767C1.45038 2.62023 0.00202355 4.06858 0 5.85588V22.7302C0.00202355 24.5175 1.45038 25.9659 3.23767 25.9679H21.4068C23.1941 25.9659 24.6425 24.5175 24.6445 22.7302V16.9806C24.6445 16.6229 24.3546 16.333 23.997 16.333V16.333Z" fill="#767676" stroke="#767676"/>
<path d="M24.3882 0.952066C23.2502 -0.185926 21.4053 -0.185926 20.2673 0.952066L8.71485 12.5045C8.63568 12.5837 8.57851 12.6818 8.54867 12.7896L7.02949 18.2741C6.96701 18.499 7.0305 18.7398 7.19542 18.905C7.36059 19.0699 7.60139 19.1334 7.82626 19.0711L13.3108 17.5517C13.4186 17.5219 13.5167 17.4647 13.5959 17.3855L25.1481 5.83286C26.2843 4.69411 26.2843 2.85066 25.1481 1.71191L24.3882 0.952066ZM10.1258 12.9254L19.5805 3.47037L22.6298 6.5196L13.1747 15.9746L10.1258 12.9254ZM9.51668 14.1476L11.9528 16.584L8.58307 17.5176L9.51668 14.1476ZM24.2324 4.9172L23.5457 5.60394L20.4962 2.55446L21.1832 1.86772C21.8153 1.23561 22.8402 1.23561 23.4723 1.86772L24.2324 2.62756C24.8635 3.26043 24.8635 4.28459 24.2324 4.9172V4.9172Z" fill="#767676" stroke="#767676"/>
</g>
<defs>
<clipPath id="clip0">
<rect width="26" height="26" fill="white"/>
</clipPath>
</defs>
</svg>
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
								rows="4"
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
		color: #FFFFFF;
		background: #25ABD7;
		font-style: normal;
		font-weight: normal;
		font-size: 29.6471px;
		line-height: 35px;

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
		margin-bottom: 20px;
	}
</style>