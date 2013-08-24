function(Widget) {

  var canvas = new fabric.Canvas(Widget.cfg.id); // 'c')

  var cfg = {
    left: Widget.cfg.left, // 100
    top: Widget.cfg.top, // 100
    width: Widget.cfg.width, // 100
    height: Widget.cfg.height, // 100
    fill: Widget.cfg.fill, // 'green'
    angle: Widget.cfg.angle, // 20
    padding: Widget.cfg.padding // 10
  };

  var rect = new fabric.Rect(cfg);
  canvas.add(rect);

  // ok dit moet beter, want laad maar 1 svg en voegt daarna een vierkant toe.

  fabric.loadSVGFromURL(Widget.cfg.svg, function(objects, options) { // '../assets/15.svg'

    var shape = fabric.util.groupSVGElements(objects, options);
    canvas.add(shape.scale(0.6));
    shape.set({ left: 300, top: 300 }).setCoords();
    canvas.renderAll();

    canvas.forEachObject(function(obj) {
      var setCoords = obj.setCoords.bind(obj);
      obj.on({
          moving: setCoords,
          scaling: setCoords,
          rotating: setCoords
      });
    });
  });

  canvas.on('after:render', function() {
    canvas.contextContainer.strokeStyle = Widget.cfg.strokeStyle; // '#555';

    canvas.forEachObject(function(obj) {
      var bound = obj.getBoundingRect();

      canvas.contextContainer.strokeRect(
        bound.left + 0.5,
        bound.top + 0.5,
        bound.width,
        bound.height
      );
    })
  });

}(Widget);
