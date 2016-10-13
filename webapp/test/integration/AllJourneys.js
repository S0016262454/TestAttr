jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

sap.ui.require([
		"sap/ui/test/Opa5",
		"testattr/test/integration/pages/Common",
		"sap/ui/test/opaQunit",
		"testattr/test/integration/pages/Worklist",
		"testattr/test/integration/pages/Object",
		"testattr/test/integration/pages/NotFound",
		"testattr/test/integration/pages/Browser",
		"testattr/test/integration/pages/App"
	], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "testattr.view."
	});

	sap.ui.require([
		"testattr/test/integration/WorklistJourney",
		"testattr/test/integration/ObjectJourney",
		"testattr/test/integration/NavigationJourney",
		"testattr/test/integration/NotFoundJourney",
		"testattr/test/integration/FLPIntegrationJourney"
	], function () {
		QUnit.start();
	});
});