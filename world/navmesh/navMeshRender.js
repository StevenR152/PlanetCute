var test;
var boarderGap = 8;
Crafty.c("NavMeshRender", {

    init: function(meshPolygonPoints) { 
        this.requires('2D, DOM, NavMesh')
    },

    render : function () {
    	var mesh = this.getMesh();
    	for (var i = mesh.length - 1; i >= 0; i--) {
    		test= mesh[i]
    		points=mesh[i].polygon.points

    		const height = points[2].y - points[1].y - boarderGap;
    		const width = points[1].x - points[0].x - boarderGap;
    		const x = points[0].x;
    		const y = points[0].y;
            // this.renderBlock(x, y, height, width);
            // this.renderText(x, y, height, width);
    	}
    },

    renderBlock : function (x,y,height,width) {
        const e = Crafty.e('2D, DOM, Color, MeshRenderLayer, Mouse')
            .color('#DDD')
            .attr({
                x: x + boarderGap / 2,
                y: y + boarderGap / 2,
                w: width, 
                h: height
            })
            .bind('Click', this.highlightNavMeshRenderLayer);
        e._z = 100;
    },
    
    renderText : function (x,y,height,width) {
        Crafty.e('2D, DOM, Text, MeshRenderLayerText')
        .attr({
         x: x + boarderGap,
         y: y + boarderGap + height/2 - 8,
         w: width, 
         h: height
        })
        .text(function () { 
         const texty = this.y - height/2 + 8 - boarderGap;
         const textx = this.x - boarderGap;
         return "{" + textx +  "," + texty + "}"
        })
        .textAlign("center")
    },

	highlightNavMeshRenderLayer : function() {
		const clickedMeshRenders = Crafty("MeshRenderLayer");

		// Clear them all if more than 2.
		clickedMeshRenders.each(function () {
			this.color("grey")
		})

		this.color("darkgreen")

	}
})
