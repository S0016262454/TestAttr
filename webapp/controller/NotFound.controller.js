sap.ui.define([
		"testattr/controller/BaseController"
	], function (BaseController) {
		"use strict";

		return BaseController.extend("testattr.controller.NotFound", {

			/**
			 * Navigates to the worklist when the link is pressed
			 * @public
			 */
			onLinkPressed : function () {
				this.getRouter().navTo("worklist");
			}

		});

	}
);