#!/usr/bin/python3
import os
import json
from datetime import datetime

from influxdb_client import InfluxDBClient, Point, WritePrecision
from influxdb_client.client.write_api import SYNCHRONOUS

def loaddata(path="./atlas_cap_subterranea.geojson"):
    with open(path, 'r') as datafile:
        return json.load(datafile)

tags = ['cod', 'FID', 'cpt','sis_id_prid', 'sis_id_sec', 'int_sis', 'sistema', 'nm_captaca', 'nm_fantasi', 'cpt_vz_max', 'cpt_vz_med', 'nm_tratame', 'cd_ibge', 'nm_municipio']
fields = [ 'cd_massa_d', 'nm_massa_d', 'tp_captaca', 'tp_estrutu', 'status_man', 'tp_tratame', 'n_municipio', 'populacao_', 'demanda_al', 'gad', 'cd_quanti', 'cs_quali', 'gad_sistem', 'geom_obs']
data = loaddata()

# You can generate an API token from the "API Tokens Tab" in the UI
token = os.getenv("token")
org = os.getenv("org")
bucket = os.getenv("bucket")

with InfluxDBClient(url="http://localhost:8086", token=token, org=org) as client:
    write_api = client.write_api(write_options=SYNCHRONOUS)
    for feature in data['features']:
        point = Point("captacoes_subterraneas").time(datetime.utcnow(), WritePrecision.NS)
        props = feature['properties']
        geometry = feature['geometry']
        for [lat, lon] in geometry['coordinates']:
            point = point.field('lat', lat)
            point = point.field('lon', lon)
        for key, value in props.items():
            if key in tags:
                point = point.tag(key, value)
            elif key in fields:
                point = point.field(key, value)
        write_api.write(bucket, org, point)

