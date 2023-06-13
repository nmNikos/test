/* eslint-disable */
'use strict';

const build = require('@microsoft/sp-build-web');
const path = require('path');

build.configureWebpack.mergeConfig({
	additionalConfiguration: (generatedConfig) => {
		generatedConfig.resolve.alias = {
			'@helpers': path.resolve(__dirname, './lib/webparts/helloWorld/helpers'),
			'@hooks': path.resolve(__dirname, './lib/webparts/helloWorld/hooks'),
			'@layout': path.resolve(__dirname, './lib/webparts/helloWorld/components/layout'),
			'@spfx-webpart': path.resolve(__dirname, './lib/webparts/helloWorld/TestNpxWebPart.js'),
			'@ui': path.resolve(__dirname, './lib/webparts/helloWorld/components/ui'),
			'@provider': path.resolve(__dirname, './lib/webparts/helloWorld/provider'),
		};
		return generatedConfig;
	},
})

build.addSuppression('Warning - [sass] The local CSS class \'ms-Grid\' is not camelCase and will not be type-safe.');

const { getTasks } = build.rig;
build.rig.getTasks = function () {
	const result = getTasks.call(build.rig);

	result.set('serve', result.get('serve-deprecated'));

	return result;
};

build.initialize(require('gulp'));
