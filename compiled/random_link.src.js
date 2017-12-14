class Random_Link {

	static init(){
		this.PLUGIN_ID = "pd_random_link";
		this.random_links = [];

		this.setup();

		if(this.random_links.length > 0){
			$(this.ready.bind(this));
		}
	}

	static ready(){
		let $button = $("#random-link-button");

		if($button.length == 1){
			$button.on("click", () => {

				let link = this.random_links[~~ (Math.random() * this.random_links.length)];

				window.open(link.link);

			});
		}
	}

	static setup(){
		let plugin = pb.plugin.get(this.PLUGIN_ID);

		if(plugin && plugin.settings){
			this.random_links = plugin.settings.links;
		}
	}

}

Random_Link.init();