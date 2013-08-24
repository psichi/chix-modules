YUI().use(
  'aui-image-cropper',
  function(Y) {
    var imageCropper = new Y.ImageCropper(
      {
        srcNode: '#image',
        x: 100,
        y: 100
      }
    ).render();

    var statusTPL = Y.one('#template-').html();

    var updateImage = function() {
      var cropRegion = imageCropper.get('region');

      croppedImage.setStyles(
        {
          'backgroundPosition': (-cropRegion.x) + 'px ' + (-cropRegion.y) + 'px',
          height: cropRegion.height,
          width: cropRegion.width
        }
      );

      croppedImage.html(Y.Lang.sub(statusTPL, cropRegion));
    };

    imageCropper.after(
      'crop',
      function(event) {
        updateImage();
      }
    );

    var croppedImage = Y.one('#croppedImage');

    var croppedStatus = Y.one('#croppedStatus');

    croppedImage.show();

    updateImage();

    Y.one('#cropLink').on(
      'click',
      function (event) {
        imageCropper.setAttrs(
          {
            cropHeight: 125,
            cropWidth: 390,
            x: 45,
            y: 5
          }
        );
      }
    );
  }
);
