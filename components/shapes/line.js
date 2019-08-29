Crafty.c("Line", {
    init: function () {
        this.requires("2D, Canvas");
        this.bind("Draw", this._draw_me);
        this.ready = true;
    },

   	setStartAndEnd(start, end) {
   		this.start = start;
   		this.end = end
   		return this;
   	},

    _draw_me: function (e) {
        var ctx = e.ctx;
        ctx.lineWidth = 10;
        ctx.strokeStyle = "red";
        ctx.beginPath();
        ctx.moveTo(this.start.x,this.start.y);
        ctx.lineTo(this.end.x, this.end.y);
        ctx.stroke();
    }
});