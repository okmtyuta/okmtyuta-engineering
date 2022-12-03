build-okmtyuta-engineering-api:
	echo "okmtyuta-engineering-apiのビルドを行います"
	docker-compose build okmtyuta-engineering-api
run-okmtyuta-engineering-api:
	echo "okmtyuta-engineering-apiを起動します"
	docker-compose up okmtyuta-engineering-api