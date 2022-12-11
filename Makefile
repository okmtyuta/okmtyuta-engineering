build-okmtyuta-engineering-api:
	@echo "okmtyuta-engineering-apiのビルドを行います"
	docker-compose build okmtyuta-engineering-api
up-okmtyuta-engineering-api:
	@echo "okmtyuta-engineering-apiのコンテナを起動します"
	docker-compose up -d okmtyuta-engineering-api
run-okmtyuta-engineering-api:
	@echo "okmtyuta-engineering-apiを起動します"
	docker exec okmtyuta-engineering-api npm run start:prod -w @okmtyuta-engineering/api
stop-okmtyuta-engineering:
	echo "okmtyuta-engineerin-apiを停止します"
	docker-compose rm -fsv okmtyuta-engineerin-api

up-database:
	echo "databaseを起動します"
	docker-compose up -d --build database
stop-database:
	echo "databaseを停止します"
	docker-compose rm -fsv database