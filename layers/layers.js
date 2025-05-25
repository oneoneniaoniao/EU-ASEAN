var wms_layers = [];

var format__0 = new ol.format.GeoJSON();
var features__0 = format__0.readFeatures(json__0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__0.addFeatures(features__0);
var lyr__0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__0, 
                style: style__0,
                popuplayertitle: '世界地図',
                interactive: false,
                title: '<img src="styles/legend/_0.png" /> 世界地図'
            });
var format_SCO_1 = new ol.format.GeoJSON();
var features_SCO_1 = format_SCO_1.readFeatures(json_SCO_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SCO_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SCO_1.addFeatures(features_SCO_1);
var lyr_SCO_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SCO_1, 
                style: style_SCO_1,
                popuplayertitle: '上海協力機構（SCO）',
                interactive: true,
                title: '<img src="styles/legend/SCO_1.png" /> 上海協力機構（SCO）'
            });
var format_AU_2 = new ol.format.GeoJSON();
var features_AU_2 = format_AU_2.readFeatures(json_AU_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AU_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AU_2.addFeatures(features_AU_2);
var lyr_AU_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AU_2, 
                style: style_AU_2,
                popuplayertitle: 'AU加盟資格停止国',
                interactive: true,
                title: '<img src="styles/legend/AU_2.png" /> AU加盟資格停止国'
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
                popuplayertitle: 'アフリカ連合（AU）',
                interactive: true,
                title: '<img src="styles/legend/AU_3.png" /> アフリカ連合（AU）'
            });
var format_EU_4 = new ol.format.GeoJSON();
var features_EU_4 = format_EU_4.readFeatures(json_EU_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EU_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EU_4.addFeatures(features_EU_4);
var lyr_EU_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EU_4, 
                style: style_EU_4,
                popuplayertitle: '欧州連合（EU）',
                interactive: true,
                title: '<img src="styles/legend/EU_4.png" /> 欧州連合（EU）'
            });
var format_ASEAN_5 = new ol.format.GeoJSON();
var features_ASEAN_5 = format_ASEAN_5.readFeatures(json_ASEAN_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ASEAN_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ASEAN_5.addFeatures(features_ASEAN_5);
var lyr_ASEAN_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ASEAN_5, 
                style: style_ASEAN_5,
                popuplayertitle: '東南アジア諸国連合（ASEAN）',
                interactive: true,
                title: '<img src="styles/legend/ASEAN_5.png" /> 東南アジア諸国連合（ASEAN）'
            });
var format_TPP_6 = new ol.format.GeoJSON();
var features_TPP_6 = format_TPP_6.readFeatures(json_TPP_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TPP_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TPP_6.addFeatures(features_TPP_6);
var lyr_TPP_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TPP_6, 
                style: style_TPP_6,
                popuplayertitle: '環太平洋パートナーシップ協定（TPP）',
                interactive: true,
                title: '<img src="styles/legend/TPP_6.png" /> 環太平洋パートナーシップ協定（TPP）'
            });

lyr__0.setVisible(true);lyr_SCO_1.setVisible(true);lyr_AU_2.setVisible(true);lyr_AU_3.setVisible(true);lyr_EU_4.setVisible(true);lyr_ASEAN_5.setVisible(true);lyr_TPP_6.setVisible(true);
var layersList = [lyr__0,lyr_SCO_1,lyr_AU_2,lyr_AU_3,lyr_EU_4,lyr_ASEAN_5,lyr_TPP_6];
lyr__0.set('fieldAliases', {'fid': 'fid', 'NAME_EN': 'NAME_EN', 'NAME_JA': 'NAME_JA', });
lyr_SCO_1.set('fieldAliases', {'fid': 'fid', 'NAME_EN': 'NAME_EN', 'NAME_JA': 'NAME_JA', });
lyr_AU_2.set('fieldAliases', {'fid': 'fid', 'NAME_EN': 'NAME_EN', 'NAME_JA': 'NAME_JA', });
lyr_AU_3.set('fieldAliases', {'fid': 'fid', 'NAME_EN': 'NAME_EN', 'NAME_JA': 'NAME_JA', });
lyr_EU_4.set('fieldAliases', {'fid': 'fid', 'NAME_EN': 'NAME_EN', 'NAME_JA': 'NAME_JA', });
lyr_ASEAN_5.set('fieldAliases', {'fid': 'fid', 'NAME_EN': 'NAME_EN', 'NAME_JA': 'NAME_JA', });
lyr_TPP_6.set('fieldAliases', {'fid': 'fid', 'NAME_EN': 'NAME_EN', 'NAME_JA': 'NAME_JA', });
lyr__0.set('fieldImages', {'fid': 'TextEdit', 'NAME_EN': 'TextEdit', 'NAME_JA': 'TextEdit', });
lyr_SCO_1.set('fieldImages', {'fid': '', 'NAME_EN': '', 'NAME_JA': '', });
lyr_AU_2.set('fieldImages', {'fid': '', 'NAME_EN': '', 'NAME_JA': '', });
lyr_AU_3.set('fieldImages', {'fid': '', 'NAME_EN': '', 'NAME_JA': '', });
lyr_EU_4.set('fieldImages', {'fid': 'TextEdit', 'NAME_EN': 'TextEdit', 'NAME_JA': 'TextEdit', });
lyr_ASEAN_5.set('fieldImages', {'fid': '', 'NAME_EN': '', 'NAME_JA': '', });
lyr_TPP_6.set('fieldImages', {'fid': '', 'NAME_EN': '', 'NAME_JA': '', });
lyr__0.set('fieldLabels', {'fid': 'no label', 'NAME_EN': 'no label', 'NAME_JA': 'no label', });
lyr_SCO_1.set('fieldLabels', {'fid': 'no label', 'NAME_EN': 'no label', 'NAME_JA': 'no label', });
lyr_AU_2.set('fieldLabels', {'fid': 'no label', 'NAME_EN': 'no label', 'NAME_JA': 'no label', });
lyr_AU_3.set('fieldLabels', {'fid': 'hidden field', 'NAME_EN': 'no label', 'NAME_JA': 'no label', });
lyr_EU_4.set('fieldLabels', {'fid': 'hidden field', 'NAME_EN': 'no label', 'NAME_JA': 'no label', });
lyr_ASEAN_5.set('fieldLabels', {'fid': 'header label - visible with data', 'NAME_EN': 'no label', 'NAME_JA': 'no label', });
lyr_TPP_6.set('fieldLabels', {'fid': 'hidden field', 'NAME_EN': 'no label', 'NAME_JA': 'no label', });
lyr_TPP_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});