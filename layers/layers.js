ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:32636").setExtent([232536.371982, 3444969.015349, 233094.121141, 3445353.314818]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format__1 = new ol.format.GeoJSON();
var features__1 = format__1.readFeatures(json__1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32636'});
var jsonSource__1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__1.addFeatures(features__1);
var lyr__1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__1, 
                style: style__1,
                popuplayertitle: "كابل الجهد المنخفض",
                interactive: true,
                title: '<img src="styles/legend/_1.png" /> كابل الجهد المنخفض'
            });
var format__2 = new ol.format.GeoJSON();
var features__2 = format__2.readFeatures(json__2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32636'});
var jsonSource__2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__2.addFeatures(features__2);
var lyr__2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__2, 
                style: style__2,
                popuplayertitle: "موصل هوائي منخفض",
                interactive: true,
                title: '<img src="styles/legend/_2.png" /> موصل هوائي منخفض'
            });
var format__3 = new ol.format.GeoJSON();
var features__3 = format__3.readFeatures(json__3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32636'});
var jsonSource__3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__3.addFeatures(features__3);
var lyr__3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__3, 
                style: style__3,
                popuplayertitle: "أعمدة شبكات المنخفض",
                interactive: true,
    title: 'أعمدة شبكات المنخفض<br />\
    <img src="styles/legend/_3_0.png" /> المحول<br />\
    <img src="styles/legend/_3_1.png" /> عمود 350/10 مجلفن قائم<br />\
    <img src="styles/legend/_3_2.png" /> عمود 350/10 مجلفن قائم + كشاف إنارة<br />\
    <img src="styles/legend/_3_3.png" /> عمود جديد مجلفن 350/10<br />\
    <img src="styles/legend/_3_4.png" /> عمود جديد مجلفن 350/10 + كشاف إنارة<br />\
    <img src="styles/legend/_3_5.png" /> عمود جديد مجلفن 350/8<br />\
    <img src="styles/legend/_3_6.png" /> عمود جديد مجلفن 350/8 + كشاف إنارة<br />\
    <img src="styles/legend/_3_7.png" /> عمود حديد قائم<br />\
    <img src="styles/legend/_3_8.png" /> عمود حديد قائم + كشاف إنارة<br />\
    <img src="styles/legend/_3_9.png" /> عمود مجلفن قائم<br />\
    <img src="styles/legend/_3_10.png" /> عمود مجلفن قائم + كشاف إنارة<br />\
    <img src="styles/legend/_3_11.png" /> لوحة ربط حلقي<br />'
        });
var format__4 = new ol.format.GeoJSON();
var features__4 = format__4.readFeatures(json__4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32636'});
var jsonSource__4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__4.addFeatures(features__4);
var lyr__4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__4, 
                style: style__4,
                popuplayertitle: "المحول",
                interactive: true,
                title: '<img src="styles/legend/_4.png" /> المحول'
            });
var format__5 = new ol.format.GeoJSON();
var features__5 = format__5.readFeatures(json__5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32636'});
var jsonSource__5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__5.addFeatures(features__5);
var lyr__5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__5, 
                style: style__5,
                popuplayertitle: "حدود السورتيهات و القرى",
                interactive: true,
    title: 'حدود السورتيهات و القرى<br />\
    <img src="styles/legend/_5_0.png" /> أبوقير<br />\
    <img src="styles/legend/_5_1.png" /> بولين<br />\
    <img src="styles/legend/_5_2.png" /> زهرة<br />'
        });

lyr_GoogleSatellite_0.setVisible(true);lyr__1.setVisible(true);lyr__2.setVisible(true);lyr__3.setVisible(true);lyr__4.setVisible(true);lyr__5.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr__1,lyr__2,lyr__3,lyr__4,lyr__5];
lyr__1.set('fieldAliases', {'Shape_Leng': 'Shape_Leng', });
lyr__2.set('fieldAliases', {'Shape_Leng': 'Shape_Leng', 'NAME': 'NAME', 'L': 'L', });
lyr__3.set('fieldAliases', {'CODE': 'CODE', 'X': 'X', 'Y': 'Y', 'Z': 'Z', 'TYPE': 'TYPE', 'القري': 'القري', });
lyr__4.set('fieldAliases', {'NAME': 'NAME', 'TYPE': 'TYPE', 'COMMENTS': 'COMMENTS', 'القدر': 'القدر', 'POINT_X': 'POINT_X', 'POINT_Y': 'POINT_Y', 'الكرو': 'الكرو', 'منخفض': 'منخفض', });
lyr__5.set('fieldAliases', {'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'NAME': 'NAME', 'المجل': 'المجل', });
lyr__1.set('fieldImages', {'Shape_Leng': 'TextEdit', });
lyr__2.set('fieldImages', {'Shape_Leng': 'TextEdit', 'NAME': 'TextEdit', 'L': 'TextEdit', });
lyr__3.set('fieldImages', {'CODE': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'Z': 'TextEdit', 'TYPE': 'TextEdit', 'القري': 'TextEdit', });
lyr__4.set('fieldImages', {'NAME': 'TextEdit', 'TYPE': 'TextEdit', 'COMMENTS': 'TextEdit', 'القدر': 'TextEdit', 'POINT_X': 'TextEdit', 'POINT_Y': 'TextEdit', 'الكرو': 'TextEdit', 'منخفض': 'TextEdit', });
lyr__5.set('fieldImages', {'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'NAME': 'TextEdit', 'المجل': 'TextEdit', });
lyr__1.set('fieldLabels', {'Shape_Leng': 'no label', });
lyr__2.set('fieldLabels', {'Shape_Leng': 'no label', 'NAME': 'no label', 'L': 'no label', });
lyr__3.set('fieldLabels', {'CODE': 'no label', 'X': 'inline label - visible with data', 'Y': 'no label', 'Z': 'no label', 'TYPE': 'no label', 'القري': 'no label', });
lyr__4.set('fieldLabels', {'NAME': 'no label', 'TYPE': 'inline label - visible with data', 'COMMENTS': 'inline label - visible with data', 'القدر': 'no label', 'POINT_X': 'no label', 'POINT_Y': 'no label', 'الكرو': 'no label', 'منخفض': 'no label', });
lyr__5.set('fieldLabels', {'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'NAME': 'no label', 'المجل': 'no label', });
lyr__5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});