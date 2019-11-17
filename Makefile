# Makefile

install:
	npm install

start:
	npx babel-node src/bin/brain-games.js

start2:
	npx babel-node src/bin/brain-even.js

start3:
	npx babel-node src/bin/brain-calc.js
	
start4:
	npx babel-node src/bin/brain-gcd.js

start5: 
	npx babel-node src/bin/brain-progression.js

start6: 
	npx babel-node src/bin/brain-prime.js

start7:
	npx babel-node src/bin/test-brain-games.js

publish:
	npm publish --dry-run

lint:
	npx eslint .