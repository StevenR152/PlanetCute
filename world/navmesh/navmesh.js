Crafty.c("NavMesh", {
    init: function(meshPolygonPoints) { 
      
    },

    setMesh : function (meshPolygonPoints, shrink) {
      this.navMesh = new NavMesh(meshPolygonPoints, shrink);
    },

    findPath : function (start, end) {
      return this.navMesh.findPath(start, end)
    },

    getMesh : function () {
      return this.navMesh.getPolygons()
    }
})
