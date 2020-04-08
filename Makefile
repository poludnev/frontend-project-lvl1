# Makefile

install:
	npm install

start:
	npx babel-node src/bin/brain-games.js

start-even:
	npx babel-node src/bin/brain-even.js

start-calc:
	npx babel-node src/bin/brain-calc.js
	
start-gcd:
	npx babel-node src/bin/brain-gcd.js

start-progress: 
	npx babel-node src/bin/brain-progression.js

start-prime: 
	npx babel-node src/bin/brain-prime.js

start-all:
	npx babel-node src/bin/test-brain-games.js

publish:
	npm publish --dry-run

lint:
	npx eslint .
