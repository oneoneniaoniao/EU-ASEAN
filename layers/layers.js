var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_base_map_1 = new ol.format.GeoJSON();
var features_base_map_1 = format_base_map_1.readFeatures(json_base_map_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_base_map_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_base_map_1.addFeatures(features_base_map_1);
var lyr_base_map_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_base_map_1, 
                style: style_base_map_1,
                popuplayertitle: 'base_map',
                interactive: true,
                title: '<img src="styles/legend/base_map_1.png" /> base_map'
            });
var format_CSTO_2 = new ol.format.GeoJSON();
var features_CSTO_2 = format_CSTO_2.readFeatures(json_CSTO_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CSTO_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CSTO_2.addFeatures(features_CSTO_2);
var lyr_CSTO_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CSTO_2, 
                style: style_CSTO_2,
                popuplayertitle: 'CSTO',
                interactive: false,
                title: '<img src="styles/legend/CSTO_2.png" /> CSTO'
            });
var format_AU_3 = new ol.format.GeoJSON();
var features_AU_3 = format_AU_3.readFeatures(json_AU_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AU_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AU_3.addFeatures(features_AU_3);
var lyr_AU_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AU_3, 
                style: style_AU_3,
                popuplayertitle: 'AU加盟資格停止国',
                interactive: false,
                title: '<img src="styles/legend/AU_3.png" /> AU加盟資格停止国'
            });
var format_AU_4 = new ol.format.GeoJSON();
var features_AU_4 = format_AU_4.readFeatures(json_AU_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AU_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AU_4.addFeatures(features_AU_4);
var lyr_AU_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AU_4, 
                style: style_AU_4,
                popuplayertitle: 'AU',
                interactive: false,
                title: '<img src="styles/legend/AU_4.png" /> AU'
            });
var format_NATO_5 = new ol.format.GeoJSON();
var features_NATO_5 = format_NATO_5.readFeatures(json_NATO_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NATO_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NATO_5.addFeatures(features_NATO_5);
var lyr_NATO_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NATO_5, 
                style: style_NATO_5,
                popuplayertitle: 'NATO',
                interactive: false,
                title: '<img src="styles/legend/NATO_5.png" /> NATO'
            });
var format_ASEAN_6 = new ol.format.GeoJSON();
var features_ASEAN_6 = format_ASEAN_6.readFeatures(json_ASEAN_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ASEAN_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ASEAN_6.addFeatures(features_ASEAN_6);
var lyr_ASEAN_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ASEAN_6, 
                style: style_ASEAN_6,
                popuplayertitle: 'ASEAN',
                interactive: false,
                title: '<img src="styles/legend/ASEAN_6.png" /> ASEAN'
            });
var format_EU_7 = new ol.format.GeoJSON();
var features_EU_7 = format_EU_7.readFeatures(json_EU_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EU_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EU_7.addFeatures(features_EU_7);
var lyr_EU_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EU_7, 
                style: style_EU_7,
                popuplayertitle: 'EU',
                interactive: false,
                title: '<img src="styles/legend/EU_7.png" /> EU'
            });

lyr_OpenStreetMap_0.setVisible(false);lyr_base_map_1.setVisible(true);lyr_CSTO_2.setVisible(true);lyr_AU_3.setVisible(true);lyr_AU_4.setVisible(true);lyr_NATO_5.setVisible(true);lyr_ASEAN_6.setVisible(true);lyr_EU_7.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_base_map_1,lyr_CSTO_2,lyr_AU_3,lyr_AU_4,lyr_NATO_5,lyr_ASEAN_6,lyr_EU_7];
lyr_base_map_1.set('fieldAliases', {'fid': 'fid', 'NAME_EN': 'NAME_EN', 'NAME_JA': 'NAME_JA', });
lyr_CSTO_2.set('fieldAliases', {'fid': 'fid', 'ISO_A3_EH': 'ISO_A3_EH', 'ISO_N3': 'ISO_N3', 'UN_A3': 'UN_A3', 'WB_A2': 'WB_A2', 'WB_A3': 'WB_A3', 'NAME_EN': 'NAME_EN', 'NAME_JA': 'NAME_JA', 'Shape_Leng': 'Shape_Leng', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Le_2': 'Shape_Le_2', 'Shape_Area': 'Shape_Area', });
lyr_AU_3.set('fieldAliases', {'fid': 'fid', 'ISO_A3_EH': 'ISO_A3_EH', 'ISO_N3': 'ISO_N3', 'UN_A3': 'UN_A3', 'WB_A2': 'WB_A2', 'WB_A3': 'WB_A3', 'NAME_EN': 'NAME_EN', 'NAME_JA': 'NAME_JA', 'Shape_Leng': 'Shape_Leng', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Le_2': 'Shape_Le_2', 'Shape_Area': 'Shape_Area', });
lyr_AU_4.set('fieldAliases', {'fid': 'fid', 'ISO_A3_EH': 'ISO_A3_EH', 'ISO_N3': 'ISO_N3', 'UN_A3': 'UN_A3', 'WB_A2': 'WB_A2', 'WB_A3': 'WB_A3', 'NAME_EN': 'NAME_EN', 'NAME_JA': 'NAME_JA', 'Shape_Leng': 'Shape_Leng', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Le_2': 'Shape_Le_2', 'Shape_Area': 'Shape_Area', });
lyr_NATO_5.set('fieldAliases', {'fid': 'fid', 'ISO_A3_EH': 'ISO_A3_EH', 'ISO_N3': 'ISO_N3', 'UN_A3': 'UN_A3', 'WB_A2': 'WB_A2', 'WB_A3': 'WB_A3', 'NAME_EN': 'NAME_EN', 'NAME_JA': 'NAME_JA', 'Shape_Leng': 'Shape_Leng', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Le_2': 'Shape_Le_2', 'Shape_Area': 'Shape_Area', });
lyr_ASEAN_6.set('fieldAliases', {'fid': 'fid', 'NAME_EN': 'NAME_EN', 'NAME_JA': 'NAME_JA', 'Shape_Area': 'Shape_Area', });
lyr_EU_7.set('fieldAliases', {'fid': 'fid', 'NAME_EN': 'NAME_EN', 'NAME_JA': 'NAME_JA', });
lyr_base_map_1.set('fieldImages', {'fid': 'TextEdit', 'NAME_EN': 'TextEdit', 'NAME_JA': 'TextEdit', });
lyr_CSTO_2.set('fieldImages', {'fid': 'TextEdit', 'ISO_A3_EH': 'TextEdit', 'ISO_N3': 'TextEdit', 'UN_A3': 'TextEdit', 'WB_A2': 'TextEdit', 'WB_A3': 'TextEdit', 'NAME_EN': 'TextEdit', 'NAME_JA': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'Shape_Le_2': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_AU_3.set('fieldImages', {'fid': 'TextEdit', 'ISO_A3_EH': 'TextEdit', 'ISO_N3': 'TextEdit', 'UN_A3': 'TextEdit', 'WB_A2': 'TextEdit', 'WB_A3': 'TextEdit', 'NAME_EN': 'TextEdit', 'NAME_JA': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'Shape_Le_2': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_AU_4.set('fieldImages', {'fid': 'TextEdit', 'ISO_A3_EH': 'TextEdit', 'ISO_N3': 'TextEdit', 'UN_A3': 'TextEdit', 'WB_A2': 'TextEdit', 'WB_A3': 'TextEdit', 'NAME_EN': 'TextEdit', 'NAME_JA': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'Shape_Le_2': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_NATO_5.set('fieldImages', {'fid': 'TextEdit', 'ISO_A3_EH': 'TextEdit', 'ISO_N3': 'TextEdit', 'UN_A3': 'TextEdit', 'WB_A2': 'TextEdit', 'WB_A3': 'TextEdit', 'NAME_EN': 'TextEdit', 'NAME_JA': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'Shape_Le_2': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_ASEAN_6.set('fieldImages', {'fid': 'TextEdit', 'NAME_EN': 'TextEdit', 'NAME_JA': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_EU_7.set('fieldImages', {'fid': 'TextEdit', 'NAME_EN': 'TextEdit', 'NAME_JA': 'TextEdit', });
lyr_base_map_1.set('fieldLabels', {'fid': 'no label', 'NAME_EN': 'inline label - always visible', 'NAME_JA': 'inline label - visible with data', });
lyr_CSTO_2.set('fieldLabels', {'fid': 'no label', 'ISO_A3_EH': 'no label', 'ISO_N3': 'no label', 'UN_A3': 'no label', 'WB_A2': 'no label', 'WB_A3': 'no label', 'NAME_EN': 'no label', 'NAME_JA': 'no label', 'Shape_Leng': 'no label', 'Shape_Le_1': 'no label', 'Shape_Le_2': 'no label', 'Shape_Area': 'no label', });
lyr_AU_3.set('fieldLabels', {'fid': 'no label', 'ISO_A3_EH': 'no label', 'ISO_N3': 'no label', 'UN_A3': 'no label', 'WB_A2': 'no label', 'WB_A3': 'no label', 'NAME_EN': 'no label', 'NAME_JA': 'no label', 'Shape_Leng': 'no label', 'Shape_Le_1': 'no label', 'Shape_Le_2': 'no label', 'Shape_Area': 'no label', });
lyr_AU_4.set('fieldLabels', {'fid': 'no label', 'ISO_A3_EH': 'no label', 'ISO_N3': 'no label', 'UN_A3': 'no label', 'WB_A2': 'no label', 'WB_A3': 'no label', 'NAME_EN': 'no label', 'NAME_JA': 'no label', 'Shape_Leng': 'no label', 'Shape_Le_1': 'no label', 'Shape_Le_2': 'no label', 'Shape_Area': 'no label', });
lyr_NATO_5.set('fieldLabels', {'fid': 'no label', 'ISO_A3_EH': 'no label', 'ISO_N3': 'no label', 'UN_A3': 'no label', 'WB_A2': 'no label', 'WB_A3': 'no label', 'NAME_EN': 'no label', 'NAME_JA': 'no label', 'Shape_Leng': 'no label', 'Shape_Le_1': 'no label', 'Shape_Le_2': 'no label', 'Shape_Area': 'no label', });
lyr_ASEAN_6.set('fieldLabels', {'fid': 'no label', 'NAME_EN': 'no label', 'NAME_JA': 'no label', 'Shape_Area': 'no label', });
lyr_EU_7.set('fieldLabels', {'fid': 'no label', 'NAME_EN': 'no label', 'NAME_JA': 'no label', });
lyr_EU_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});