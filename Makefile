# Makefile

## Add binaries in node_modules to PATH
export PATH := $(PATH):node_modules/.bin

.DEFAULT_GOAL := build

node_modules: package.json
	npm install
	@touch node_modules

build: node_modules
	WEBPACK_ENV=production webpack --progress

serve: node_modules
	webpack-dev-server

watch: node_modules
	webpack --watch

clean:
	@rm -f public/bundle.js

distclean: clean
	@rm -rf node_modules
	@rm -f npm-debug.log
