<template>
	<b-container fluid id="admin-backgrnd">
		<b-container >
			<b-row>
				<b-col lg="6">
					<b-row>
						<b-col lg="6">
							<div class="left-menu">
								<b-row>
									<b-col lg="12">
										<div class="user">
											<div class="user-avatar">
												<img src="../img/Ellipse 1.png" alt="placeholder+image">
											</div>
											<div class="user-name">Victoria Jones</div>
										</div>
									</b-col>

									<b-col lg="12">
										<b-list-group>
											<b-list-group-item class="active">Список пользователей</b-list-group-item>
											<b-list-group-item class="non-active">Статисика</b-list-group-item>
											<b-list-group-item class="non-active">Управление мероприятием</b-list-group-item>
										</b-list-group>
									</b-col>
								</b-row>
							</div>
						</b-col>
						<b-col lg="6">
							<b-row>
								<b-col lg='12'>
									<div class="filter">
										<div class="ttl">Список пользователей</div>
										<div class="filer-block">
											<div class="filter-ttl">Фильтр</div>
											<div class="filter-tags">
												<b-dropdown text="Роль" variant="outline" class="dropss" >
													<b-dropdown-item>Капитан</b-dropdown-item>
													<b-dropdown-item>Матрос</b-dropdown-item>
													<b-dropdown-item>Помощник</b-dropdown-item>
													<b-dropdown-item>Все</b-dropdown-item>
												</b-dropdown>

												<b-dropdown text="Статус" variant="outline" class="dropss" >
													<b-dropdown-item>Проверка</b-dropdown-item>
													<b-dropdown-item>Отменём</b-dropdown-item>
													<b-dropdown-item>Подтверждён</b-dropdown-item>
													<b-dropdown-item>Все</b-dropdown-item>
												</b-dropdown>
											</div>
										</div>
									</div>
								</b-col>
							</b-row>
						</b-col> 	
					</b-row>
				</b-col>
				<b-col lg="6"></b-col>
			</b-row>
		</b-container>
	</b-container>
</template>
<script>

</script>
<style scoped>

	#admin-backgrnd {
		background-color: #fff;
	}

	.left-menu{
		width: 260px;
		height: 100%;

		background: #F9F9F9;
		box-shadow: 4px 0px 4px rgba(0, 0, 0, 0.15);
	}

	.user {
		height: 90px;

		display: flex;
		align-items: center;
		justify-content: center;

	}

	.user-name {
		font-family: Roboto;
		font-style: normal;
		font-weight: 300;
		font-size: 16px;
		line-height: 19px;

		margin: -12px 0 0 0;

	}
	
	.user-avatar{
		width: 50px;
		height: 50px;

		border-radius: 100%;
		padding-right: 56px;
	}

	.active {
		height: 55px;

		border: none;
		background: #59AFFF;
		color: #fff;

		font-family: Roboto;
		font-style: normal;
		font-weight: 500;
		font-size: 16px;
		line-height: 19px;

		padding-top: 16px;
	}

	.non-active {
		height: 55px;

		border: none;

		font-family: Roboto;
		font-style: normal;
		font-weight: 500;
		font-size: 16px;
		line-height: 19px;

		padding-top: 16px;
	}

	.filter {
		width: 280px;
		height: 100%;
	}

	.ttl {
		font-family: Roboto;
		font-style: normal;
		font-weight: lighter;
		font-size: 22px;
		line-height: 26px;
	}

	.filer-block {
		width: 280px;
	}

	.filter-ttl {
		font-family: Roboto;
		font-style: normal;
		font-weight: normal;
		font-size: 16.2857px;
		line-height: 19px;

		margin: 38px 0 16px 24px; 
	}

	.filter-tags{
		width: 280px;;
		height: 100%;

		border: 1px solid #8B8B8B;
		box-sizing: border-box;
		border-radius: 5px;
	}


	.dropss{

		height: 39px;
		min-width: 100%;
		border-radius: 25px;
	}

	.dropdown-menu {
		min-with: 100%;
	}


</style>