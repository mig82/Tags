define(function() {

	function clone(button, id, text, left){
		var config = {
			id: id,
			isVisible: true,
			skin: button.skin,
			focusSkin: button.focusSkin,
			text: text
		};

		if(left){config.left = left;}

		var layout = {
			containerWeight: button.containerWeight,
			padding: button.padding,
			margin: button.margin,
			displayText: true
		};

		var platformConfig = {};

		//Creating the button.
		return new kony.ui.Button(config, layout, platformConfig);
	}

	return {

		preShow: function(){
			var tagModel = this.view.tag1;
			var left = this.view.tag2.left;
			this.view.removeAll();

			var tags = this._tags.split(",");
			//var tagButtons = [];
			for(var k = 0; k < tags.length; k++){
				var text = tags[k].trim();
				kony.print(`Creating tag '${text}'`);
				//tagButtons.push(clone(tagModel, `tag${k}`, text));
				this.view.add(clone(tagModel, `tag${k}`, text, k>0?left:null));
			}
			//this.view.add(tagButtons);
		},

		constructor: function(/*baseConfig, layoutConfig, pspConfig*/) {
			this.view.preShow = this.preShow;
		},

		initGettersSetters: function() {
			defineGetter(this, "tags", () => {return this._tags;});
			defineSetter(this, "tags", (tags) => {this._tags = tags;});
		}
	};
});