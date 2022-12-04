build-okmtyuta-engineering-api:
	echo "okmtyuta-engineering-apiのビルドを行います"
	docker-compose build okmtyuta-engineering-api
run-okmtyuta-engineering-api:
	echo "okmtyuta-engineering-apiを起動します"
	docker-compose up okmtyuta-engineering-api
run-database:
	echo "databaseを起動します"
	docker-compose up -d --build database
stop-database:
	echo "databaseを停止します"
	docker-compose rm -fsv database
stop-all-service:
	echo "すべてのサービスを停止します。"
	docker-compose down