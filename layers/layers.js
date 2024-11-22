var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 0.600000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_ConfinicomunaliBIOcopia_1 = new ol.format.GeoJSON();
var features_ConfinicomunaliBIOcopia_1 = format_ConfinicomunaliBIOcopia_1.readFeatures(json_ConfinicomunaliBIOcopia_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ConfinicomunaliBIOcopia_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ConfinicomunaliBIOcopia_1.addFeatures(features_ConfinicomunaliBIOcopia_1);
var lyr_ConfinicomunaliBIOcopia_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ConfinicomunaliBIOcopia_1, 
                style: style_ConfinicomunaliBIOcopia_1,
                popuplayertitle: "Confini comunali BIO copia",
                interactive: false,
                title: '<img src="styles/legend/ConfinicomunaliBIOcopia_1.png" /> Confini comunali BIO copia'
            });
var format_EdificiExp_S_WGS84_Street_2 = new ol.format.GeoJSON();
var features_EdificiExp_S_WGS84_Street_2 = format_EdificiExp_S_WGS84_Street_2.readFeatures(json_EdificiExp_S_WGS84_Street_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EdificiExp_S_WGS84_Street_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EdificiExp_S_WGS84_Street_2.addFeatures(features_EdificiExp_S_WGS84_Street_2);
var lyr_EdificiExp_S_WGS84_Street_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EdificiExp_S_WGS84_Street_2, 
                style: style_EdificiExp_S_WGS84_Street_2,
                popuplayertitle: "Edifici Exp_S_WGS84_Street",
                interactive: true,
                title: '<img src="styles/legend/EdificiExp_S_WGS84_Street_2.png" /> Edifici Exp_S_WGS84_Street'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_ConfinicomunaliBIOcopia_1.setVisible(true);lyr_EdificiExp_S_WGS84_Street_2.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_ConfinicomunaliBIOcopia_1,lyr_EdificiExp_S_WGS84_Street_2];
lyr_ConfinicomunaliBIOcopia_1.set('fieldAliases', {'COMUNE_': 'COMUNE_', });
lyr_EdificiExp_S_WGS84_Street_2.set('fieldAliases', {'COMUNE_': 'COMUNE_', 'rand_point_id': 'rand_point_id', 'x': 'x', 'y': 'y', 'REV_Address': 'REV_Address', 'REV_Match_addr': 'REV_Match_addr', 'Area_m2': 'Area_m2', });
lyr_ConfinicomunaliBIOcopia_1.set('fieldImages', {'COMUNE_': 'TextEdit', });
lyr_EdificiExp_S_WGS84_Street_2.set('fieldImages', {'COMUNE_': 'TextEdit', 'rand_point_id': 'Range', 'x': 'TextEdit', 'y': 'TextEdit', 'REV_Address': 'TextEdit', 'REV_Match_addr': 'TextEdit', 'Area_m2': 'Range', });
lyr_ConfinicomunaliBIOcopia_1.set('fieldLabels', {'COMUNE_': 'no label', });
lyr_EdificiExp_S_WGS84_Street_2.set('fieldLabels', {'COMUNE_': 'no label', 'rand_point_id': 'no label', 'x': 'inline label - visible with data', 'y': 'inline label - visible with data', 'REV_Address': 'inline label - visible with data', 'REV_Match_addr': 'no label', 'Area_m2': 'inline label - visible with data', });
lyr_EdificiExp_S_WGS84_Street_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});