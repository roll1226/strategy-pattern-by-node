up:
	docker compose up
down:
	docker compose down
build:
	docker compose up --build
restart:
	@make down
	@make up
rebuild:
	@make down
	@make build
prisma.generate:
	docker compose exec app npx prisma generate
prisma.init:
	docker compose exec app npx prisma migrate dev --name init
