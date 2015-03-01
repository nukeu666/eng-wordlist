var WordListCollection = new Mongo.Collection("wordListCollection");
WordListCollection.allow({
	insert:function(){
		return false;
	},
	update:function(){
		return false;
	},
	remove:function(){
		return false;
	}
});

Meteor.startup(function(){
	WordListCollection.ensureIndex({Word:1});
	Assets.getText('dict.txt',function(text){
		console.log(text);
	});
});

Wordlist = {
	exists: function(word) {
	}
}

