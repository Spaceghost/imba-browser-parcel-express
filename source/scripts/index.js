var Imba = require('imba'), _1 = Imba.createElement;
console.log('running');

var Simple = Imba.defineTag('Simple', function(tag){
	tag.prototype.__x = {'default': Math.floor(Math.random() * 300),name: 'x'};
	tag.prototype.x = function(v){ return this._x; }
	tag.prototype.setX = function(v){ this._x = v; return this; }
	tag.prototype._x = Math.floor(Math.random() * 300);
	tag.prototype.__y = {'default': Math.floor(Math.random() * 300),name: 'y'};
	tag.prototype.y = function(v){ return this._y; }
	tag.prototype.setY = function(v){ this._y = v; return this; }
	tag.prototype._y = Math.floor(Math.random() * 300);
	
	tag.prototype.render = function (){
		return this.$open(0).css('top',("" + (this._y) + "px")).css('left',("" + (this._x) + "px")).setText('Hello world').synced();
	};
});

Imba.mount((_1(Simple)).end());
