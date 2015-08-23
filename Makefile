default: build

build:
	node_modules/.bin/webpack -p

serve:
	node_modules/.bin/webpack-dev-server

watch:
	node_modules/.bin/webpack --watch

clean:
	rm -f public/bundle.js

distclean: clean
	rm -rf node_modules
