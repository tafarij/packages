/**********************************************************************
 * Extern for mapboxgl
 * Generated by http://jmmk.github.io/javascript-externs-generator
 **********************************************************************/
var mapboxgl = {
  "AttributionControl": function () {},
  "Evented": function () {},
  "FullscreenControl": function () {},
  "GeolocateControl": function () {},
  "LngLat": {
    "convert": function () {}
  },
  "LngLatBounds": {
    "convert": function () {}
  },
  "Map": function () {},
  "Marker": function () {},
  "NavigationControl": function () {},
  "Point": {
    "convert": function () {}
  },
  "Popup": function () {},
  "ScaleControl": function () {},
  "Style": {
    "getSourceType": function () {},
    "registerForPluginAvailability": function () {},
    "setSourceType": function () {}
  },
  "accessToken": {},
  "config": {
    "ACCESS_TOKEN": {},
    "API_URL": {},
    "REQUIRE_ACCESS_TOKEN": {}
  },
  "setRTLTextPlugin": function () {},
  "supported": {
    "webGLContextAttributes": {
      "alpha": {},
      "antialias": {},
      "depth": {},
      "stencil": {}
    }
  },
  "version": {},
  "workerCount": {},
  "workerUrl": {}
};
mapboxgl.AttributionControl.prototype = {
  "_updateAttributions": function () {},
  "_updateCompact": function () {},
  "_updateData": function () {},
  "_updateEditLink": function () {},
  "getDefaultPosition": function () {},
  "onAdd": function () {},
  "onRemove": function () {}
};
mapboxgl.Evented.prototype = {
  "fire": function () {},
  "listens": function () {},
  "off": function () {},
  "on": function () {},
  "once": function () {},
  "setEventedParent": function () {}
};
mapboxgl.FullscreenControl.prototype = {
  "_changeIcon": function () {},
  "_checkFullscreenSupport": function () {},
  "_isFullscreen": function () {},
  "_onClickFullscreen": function () {},
  "_setupUI": function () {},
  "onAdd": function () {},
  "onRemove": function () {}
};
mapboxgl.GeolocateControl.prototype = {
  "_clearWatch": function () {},
  "_finish": function () {},
  "_onError": function () {},
  "_onSuccess": function () {},
  "_setupUI": function () {},
  "_updateCamera": function () {},
  "_updateMarker": function () {},
  "constructor": function () {},
  "fire": function () {},
  "listens": function () {},
  "off": function () {},
  "on": function () {},
  "onAdd": function () {},
  "onRemove": function () {},
  "once": function () {},
  "setEventedParent": function () {},
  "trigger": function () {}
};
mapboxgl.LngLat.prototype = {
  "toArray": function () {},
  "toBounds": function () {},
  "toString": function () {},
  "wrap": function () {}
};
mapboxgl.LngLatBounds.prototype = {
  "extend": function () {},
  "getCenter": function () {},
  "getEast": function () {},
  "getNorth": function () {},
  "getNorthEast": function () {},
  "getNorthWest": function () {},
  "getSouth": function () {},
  "getSouthEast": function () {},
  "getSouthWest": function () {},
  "getWest": function () {},
  "isEmpty": function () {},
  "setNorthEast": function () {},
  "setSouthWest": function () {},
  "toArray": function () {},
  "toString": function () {}
};
mapboxgl.Map.prototype = {
  "_afterEase": function () {},
  "_cancelRenderFrame": function () {},
  "_containerDimensions": function () {},
  "_contextLost": function () {},
  "_contextRestored": function () {},
  "_detectMissingCSS": function () {},
  "_ease": function () {},
  "_fireMoveEvents": function () {},
  "_makeQueryGeometry": function () {},
  "_normalizeBearing": function () {},
  "_normalizeCenter": function () {},
  "_onData": function () {},
  "_onDataLoading": function () {},
  "_onWindowOnline": function () {},
  "_onWindowResize": function () {},
  "_prepareEase": function () {},
  "_render": function () {},
  "_renderFrameCallback": function () {},
  "_requestRenderFrame": function () {},
  "_rerender": function () {},
  "_resizeCanvas": function () {},
  "_setupContainer": function () {},
  "_setupPainter": function () {},
  "_update": function () {},
  "addControl": function () {},
  "addImage": function () {},
  "addLayer": function () {},
  "addSource": function () {},
  "addSourceType": function () {},
  "areTilesLoaded": function () {},
  "cameraForBounds": function () {},
  "constructor": function () {},
  "easeTo": function () {},
  "fire": function () {},
  "fitBounds": function () {},
  "flyTo": function () {},
  "getBearing": function () {},
  "getBounds": function () {},
  "getCanvas": function () {},
  "getCanvasContainer": function () {},
  "getCenter": function () {},
  "getContainer": function () {},
  "getFeatureState": function () {},
  "getFilter": function () {},
  "getLayer": function () {},
  "getLayoutProperty": function () {},
  "getLight": function () {},
  "getMaxBounds": function () {},
  "getMaxZoom": function () {},
  "getMinZoom": function () {},
  "getPaintProperty": function () {},
  "getPitch": function () {},
  "getRenderWorldCopies": function () {},
  "getSource": function () {},
  "getStyle": function () {},
  "getZoom": function () {},
  "hasImage": function () {},
  "isEasing": function () {},
  "isMoving": function () {},
  "isRotating": function () {},
  "isSourceLoaded": function () {},
  "isStyleLoaded": function () {},
  "isZooming": function () {},
  "jumpTo": function () {},
  "listImages": function () {},
  "listens": function () {},
  "loadImage": function () {},
  "loaded": function () {},
  "moveLayer": function () {},
  "off": function () {},
  "on": function () {},
  "once": function () {},
  "panBy": function () {},
  "panTo": function () {},
  "project": function () {},
  "queryRenderedFeatures": function () {},
  "querySourceFeatures": function () {},
  "remove": function () {},
  "removeControl": function () {},
  "removeImage": function () {},
  "removeLayer": function () {},
  "removeSource": function () {},
  "resetNorth": function () {},
  "resize": function () {},
  "rotateTo": function () {},
  "setBearing": function () {},
  "setCenter": function () {},
  "setEventedParent": function () {},
  "setFeatureState": function () {},
  "setFilter": function () {},
  "setLayerZoomRange": function () {},
  "setLayoutProperty": function () {},
  "setLight": function () {},
  "setMaxBounds": function () {},
  "setMaxZoom": function () {},
  "setMinZoom": function () {},
  "setPaintProperty": function () {},
  "setPitch": function () {},
  "setRenderWorldCopies": function () {},
  "setStyle": function () {},
  "setZoom": function () {},
  "snapToNorth": function () {},
  "stop": function () {},
  "unproject": function () {},
  "zoomIn": function () {},
  "zoomOut": function () {},
  "zoomTo": function () {}
};
mapboxgl.Marker.prototype = {
  "_addDragHandler": function () {},
  "_onMapClick": function () {},
  "_onMove": function () {},
  "_onUp": function () {},
  "_update": function () {},
  "addTo": function () {},
  "constructor": function () {},
  "fire": function () {},
  "getElement": function () {},
  "getLngLat": function () {},
  "getOffset": function () {},
  "getPopup": function () {},
  "isDraggable": function () {},
  "listens": function () {},
  "off": function () {},
  "on": function () {},
  "once": function () {},
  "remove": function () {},
  "setDraggable": function () {},
  "setEventedParent": function () {},
  "setLngLat": function () {},
  "setOffset": function () {},
  "setPopup": function () {},
  "togglePopup": function () {}
};
mapboxgl.NavigationControl.prototype = {
  "_createButton": function () {},
  "_rotateCompassArrow": function () {},
  "onAdd": function () {},
  "onRemove": function () {}
};
mapboxgl.Point.prototype = {
  "_add": function () {},
  "_div": function () {},
  "_divByPoint": function () {},
  "_matMult": function () {},
  "_mult": function () {},
  "_multByPoint": function () {},
  "_perp": function () {},
  "_rotate": function () {},
  "_rotateAround": function () {},
  "_round": function () {},
  "_sub": function () {},
  "_unit": function () {},
  "add": function () {},
  "angle": function () {},
  "angleTo": function () {},
  "angleWith": function () {},
  "angleWithSep": function () {},
  "clone": function () {},
  "dist": function () {},
  "distSqr": function () {},
  "div": function () {},
  "divByPoint": function () {},
  "equals": function () {},
  "mag": function () {},
  "matMult": function () {},
  "mult": function () {},
  "multByPoint": function () {},
  "perp": function () {},
  "rotate": function () {},
  "rotateAround": function () {},
  "round": function () {},
  "sub": function () {},
  "unit": function () {}
};
mapboxgl.Popup.prototype = {
  "_createContent": function () {},
  "_onClickClose": function () {},
  "_update": function () {},
  "addTo": function () {},
  "constructor": function () {},
  "fire": function () {},
  "getLngLat": function () {},
  "isOpen": function () {},
  "listens": function () {},
  "off": function () {},
  "on": function () {},
  "once": function () {},
  "remove": function () {},
  "setDOMContent": function () {},
  "setEventedParent": function () {},
  "setHTML": function () {},
  "setLngLat": function () {},
  "setText": function () {}
};
mapboxgl.ScaleControl.prototype = {
  "_onMove": function () {},
  "getDefaultPosition": function () {},
  "onAdd": function () {},
  "onRemove": function () {},
  "setUnit": function () {}
};
mapboxgl.Style.prototype = {
  "_checkLoaded": function () {},
  "_clearSource": function () {},
  "_flattenRenderedFeatures": function () {},
  "_generateCollisionBoxes": function () {},
  "_load": function () {},
  "_reloadSource": function () {},
  "_remove": function () {},
  "_resetUpdates": function () {},
  "_serializeLayers": function () {},
  "_updateLayer": function () {},
  "_updatePlacement": function () {},
  "_updateSources": function () {},
  "_updateWorkerLayers": function () {},
  "_validate": function () {},
  "_validateLayer": function () {},
  "addImage": function () {},
  "addLayer": function () {},
  "addSource": function () {},
  "addSourceType": function () {},
  "constructor": function () {},
  "fire": function () {},
  "getFeatureState": function () {},
  "getFilter": function () {},
  "getGlyphs": function () {},
  "getImage": function () {},
  "getImages": function () {},
  "getLayer": function () {},
  "getLayoutProperty": function () {},
  "getLight": function () {},
  "getPaintProperty": function () {},
  "getSource": function () {},
  "getTransition": function () {},
  "hasTransitions": function () {},
  "listImages": function () {},
  "listens": function () {},
  "loadJSON": function () {},
  "loadURL": function () {},
  "loaded": function () {},
  "moveLayer": function () {},
  "off": function () {},
  "on": function () {},
  "once": function () {},
  "queryRenderedFeatures": function () {},
  "querySourceFeatures": function () {},
  "removeImage": function () {},
  "removeLayer": function () {},
  "removeSource": function () {},
  "serialize": function () {},
  "setEventedParent": function () {},
  "setFeatureState": function () {},
  "setFilter": function () {},
  "setGeoJSONSourceData": function () {},
  "setLayerZoomRange": function () {},
  "setLayoutProperty": function () {},
  "setLight": function () {},
  "setPaintProperty": function () {},
  "setState": function () {},
  "update": function () {}
};
/**********************************************************************
 * End Generated Extern for mapboxgl
/**********************************************************************/
