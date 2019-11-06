/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"oData_Assignment/oData_Assignment/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});