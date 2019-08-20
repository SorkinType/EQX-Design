#target Illustrator  
  
//  script.name = selectObjectsTouchingSelection_CS5_Only.jsx;  
//  script.description = selects all objects touching Selected Object (based on bounding box)  
//  script.required = CS5 only, one open document, one artboard, some art & one path selected (works best with a Rectangle)  
//  script.parent = carlos canto // 8/22/12;  
//  script.elegant = false;  
  
var idoc = app.activeDocument;  
var abRect = idoc.artboards[0].artboardRect;  
var tempAB = idoc.artboards.add(abRect);  
  
var sel = idoc.selection[0];  
  
tempAB.artboardRect = sel.visibleBounds;  
  
idoc.selectObjectsOnActiveArtboard();  
var activeAbIndex = idoc.artboards.getActiveArtboardIndex();  
idoc.artboards.remove (activeAbIndex);    
#target Illustrator  
  
//  script.name = selectObjectsTouchingSelection_CS5_Only.jsx;  
//  script.description = selects all objects touching Selected Object (based on bounding box)  
//  script.required = CS5 only, one open document, one artboard, some art & one path selected (works best with a Rectangle)  
//  script.parent = carlos canto // 8/22/12;  
//  script.elegant = false;  
  
var idoc = app.activeDocument;  
var abRect = idoc.artboards[0].artboardRect;  
var tempAB = idoc.artboards.add(abRect);  
  
var sel = idoc.selection[0];  
  
tempAB.artboardRect = sel.visibleBounds;  
  
idoc.selectObjectsOnActiveArtboard();  
var activeAbIndex = idoc.artboards.getActiveArtboardIndex();  
idoc.artboards.remove (activeAbIndex);    
