var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_LimiticomunaliBiodistretto_1 = new ol.format.GeoJSON();
var features_LimiticomunaliBiodistretto_1 = format_LimiticomunaliBiodistretto_1.readFeatures(json_LimiticomunaliBiodistretto_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LimiticomunaliBiodistretto_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LimiticomunaliBiodistretto_1.addFeatures(features_LimiticomunaliBiodistretto_1);
var lyr_LimiticomunaliBiodistretto_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LimiticomunaliBiodistretto_1, 
                style: style_LimiticomunaliBiodistretto_1,
                popuplayertitle: "Limiti comunali Biodistretto ",
                interactive: false,
                title: '<img src="styles/legend/LimiticomunaliBiodistretto_1.png" /> Limiti comunali Biodistretto '
            });
var format_EdificiconesposizioneSOSSE_2 = new ol.format.GeoJSON();
var features_EdificiconesposizioneSOSSE_2 = format_EdificiconesposizioneSOSSE_2.readFeatures(json_EdificiconesposizioneSOSSE_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EdificiconesposizioneSOSSE_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EdificiconesposizioneSOSSE_2.addFeatures(features_EdificiconesposizioneSOSSE_2);
var lyr_EdificiconesposizioneSOSSE_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EdificiconesposizioneSOSSE_2, 
                style: style_EdificiconesposizioneSOSSE_2,
                popuplayertitle: "Edifici con esposizione SO-S-SE",
                interactive: true,
                title: '<img src="styles/legend/EdificiconesposizioneSOSSE_2.png" /> Edifici con esposizione SO-S-SE'
            });

lyr_OSMStandard_0.setVisible(true);lyr_LimiticomunaliBiodistretto_1.setVisible(true);lyr_EdificiconesposizioneSOSSE_2.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_LimiticomunaliBiodistretto_1,lyr_EdificiconesposizioneSOSSE_2];
lyr_LimiticomunaliBiodistretto_1.set('fieldAliases', {'COMUNE_': 'COMUNE_', });
lyr_EdificiconesposizioneSOSSE_2.set('fieldAliases', {'COMUNE_': 'COMUNE_', 'rand_point_id': 'rand_point_id', 'x': 'x', 'y': 'y', 'REV_Address': 'REV_Address', 'REV_Match_addr': 'REV_Match_addr', 'Area_m2': 'Area_m2', });
lyr_LimiticomunaliBiodistretto_1.set('fieldImages', {'COMUNE_': 'TextEdit', });
lyr_EdificiconesposizioneSOSSE_2.set('fieldImages', {'COMUNE_': 'TextEdit', 'rand_point_id': 'Range', 'x': 'TextEdit', 'y': 'TextEdit', 'REV_Address': 'TextEdit', 'REV_Match_addr': 'TextEdit', 'Area_m2': 'Range', });
lyr_LimiticomunaliBiodistretto_1.set('fieldLabels', {'COMUNE_': 'no label', });
lyr_EdificiconesposizioneSOSSE_2.set('fieldLabels', {'COMUNE_': 'no label', 'rand_point_id': 'no label', 'x': 'inline label - always visible', 'y': 'inline label - always visible', 'REV_Address': 'no label', 'REV_Match_addr': 'inline label - always visible', 'Area_m2': 'inline label - always visible', });
lyr_EdificiconesposizioneSOSSE_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});