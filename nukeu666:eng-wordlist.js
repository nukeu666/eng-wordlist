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
	WordListCollection.ensureIndex({word:1});
	Assets.getText('dict.txt',function(text){
		WordListCollection.insert({word:text});
		console.log(text+"##");
	});
});


Wordlist = {
	exists: function(word) {
		return WordListCollection.findOne({word:word});
	}
}

