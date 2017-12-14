"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Random_Link = function () {
	function Random_Link() {
		_classCallCheck(this, Random_Link);
	}

	_createClass(Random_Link, null, [{
		key: "init",
		value: function init() {
			this.PLUGIN_ID = "pd_random_link";
			this.random_links = [];

			this.setup();

			if (this.random_links.length > 0) {
				$(this.ready.bind(this));
			}
		}
	}, {
		key: "ready",
		value: function ready() {
			var _this = this;

			var $button = $("#random-link-button");

			if ($button.length == 1) {
				$button.on("click", function () {

					var link = _this.random_links[~~(Math.random() * _this.random_links.length)];

					window.open(link.link);
				});
			}
		}
	}, {
		key: "setup",
		value: function setup() {
			var plugin = pb.plugin.get(this.PLUGIN_ID);

			if (plugin && plugin.settings) {
				this.random_links = plugin.settings.links;
			}
		}
	}]);

	return Random_Link;
}();


Random_Link.init();