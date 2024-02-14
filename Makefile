build:
	npm run build
script:
	npm run script ${index}
run:
	@make build
	@make script index=${index}
