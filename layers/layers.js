var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_FIXX_ANTAPANI_1 = new ol.format.GeoJSON();
var features_FIXX_ANTAPANI_1 = format_FIXX_ANTAPANI_1.readFeatures(json_FIXX_ANTAPANI_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FIXX_ANTAPANI_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FIXX_ANTAPANI_1.addFeatures(features_FIXX_ANTAPANI_1);
var lyr_FIXX_ANTAPANI_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_FIXX_ANTAPANI_1, 
                style: style_FIXX_ANTAPANI_1,
                interactive: true,
    title: 'FIXX_ANTAPANI<br />\
    <img src="styles/legend/FIXX_ANTAPANI_1_0.png" /> Sangat Rendah<br />\
    <img src="styles/legend/FIXX_ANTAPANI_1_1.png" /> Rendah<br />\
    <img src="styles/legend/FIXX_ANTAPANI_1_2.png" /> Sedang<br />\
    <img src="styles/legend/FIXX_ANTAPANI_1_3.png" /> Tinggi<br />\
    <img src="styles/legend/FIXX_ANTAPANI_1_4.png" /> Sangat Tinggi<br />'
        });

lyr_OSMStandard_0.setVisible(true);lyr_FIXX_ANTAPANI_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_FIXX_ANTAPANI_1];
lyr_FIXX_ANTAPANI_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'FCODE': 'FCODE', 'LCODE': 'LCODE', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'METADATA': 'METADATA', 'PELAKSANA': 'PELAKSANA', 'UPDATED': 'UPDATED', 'Shape_Leng': 'Shape_Leng', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Area': 'Shape_Area', 'Nilai_Bobo': 'Nilai_Bobo', 'Nilai_Bo_1': 'Nilai_Bo_1', 'TARGET_FID': 'TARGET_FID', 'Shape_Le_2': 'Shape_Le_2', 'Shape_Ar_1': 'Shape_Ar_1', 'skor_orang': 'skor_orang', 'skor_jalan': 'skor_jalan', 'skor_COVID': 'skor_COVID', 'skor_VIIRS': 'skor_VIIRS', 'skor_total': 'skor_total', });
lyr_FIXX_ANTAPANI_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'FCODE': 'TextEdit', 'LCODE': 'TextEdit', 'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'METADATA': 'TextEdit', 'PELAKSANA': 'TextEdit', 'UPDATED': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'Shape_Area': 'TextEdit', 'Nilai_Bobo': 'TextEdit', 'Nilai_Bo_1': 'TextEdit', 'TARGET_FID': 'TextEdit', 'Shape_Le_2': 'TextEdit', 'Shape_Ar_1': 'TextEdit', 'skor_orang': 'TextEdit', 'skor_jalan': 'TextEdit', 'skor_COVID': 'TextEdit', 'skor_VIIRS': 'TextEdit', 'skor_total': 'TextEdit', });
lyr_FIXX_ANTAPANI_1.set('fieldLabels', {'OBJECTID': 'no label', 'FCODE': 'no label', 'LCODE': 'no label', 'NAMOBJ': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'METADATA': 'no label', 'PELAKSANA': 'no label', 'UPDATED': 'no label', 'Shape_Leng': 'no label', 'Shape_Le_1': 'no label', 'Shape_Area': 'no label', 'Nilai_Bobo': 'no label', 'Nilai_Bo_1': 'no label', 'TARGET_FID': 'no label', 'Shape_Le_2': 'no label', 'Shape_Ar_1': 'no label', 'skor_orang': 'no label', 'skor_jalan': 'no label', 'skor_COVID': 'no label', 'skor_VIIRS': 'no label', 'skor_total': 'no label', });
lyr_FIXX_ANTAPANI_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});