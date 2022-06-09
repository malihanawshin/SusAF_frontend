from crypt import methods
from lib2to3.pgen2 import token
from sre_constants import SUCCESS
from typing import List, Dict
from unittest import result
from flask import Flask
from flask_cors import CORS, cross_origin
import mysql.connector
import json
# import web3
import os

app = Flask(__name__)
cors =  CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'


def favorite_colors() -> List[Dict]:
    return SUCCESS

def get_impacts() -> List[Dict]:
    config = {
        'user': 'root',
        'password': 'root',
        'host': 'db',
        'port': '3306',
        'database': 'susafManagement'
    }
    connection = mysql.connector.connect(**config)
    cursor = connection.cursor()
    cursor.execute('SELECT * FROM impact')
    results = [{ "id_impact": id_impact, "impact_title": impact_title, '_dimension': _dimension, "_level": _level, '_type': _type,  "_reference": _reference} for (id_impact, impact_title, _dimension, _level, _type, _reference) in cursor]
    cursor.close()
    connection.close()
    print(results)
    return results


def get_impact(impactId) -> List[Dict]:
    config = {
        'user': 'root',
        'password': 'root',
        'host': 'db',
        'port': '3306',
        'database': 'susafManagement'
    }
    connection = mysql.connector.connect(**config)
    cursor = connection.cursor()
    cursor.execute(f'SELECT * FROM impact where id_impact ={impactId}')
    
    results = [{"id_impact": id_impact, "impact_title": impact_title, '_dimension': _dimension, "_level": _level, '_type': _type, '_reference': _reference} for (id_impact, impact_title, _dimension, _level, _type, _reference) in cursor]
    cursor.close()
    connection.close()
    return results

def add_impact(udict):
    config = {
        'user': 'root',
        'password': 'root',
        'host': 'db',
        'port': '3306',
        'database': 'susafManagement'
    }
    connection = mysql.connector.connect(**config)
    cursor = connection.cursor()
    cursor.execute(f"INSERT INTO impact(impact_title, _dimension, _level, _type, _reference) VALUES ('{udict['impact_title']}', {udict['_dimension']}, {udict['_level']}, {udict['_type']}, {udict['_reference']})")
    idd = cursor.lastrowid
    connection.commit()
    cursor.close()
    connection.close()
    return str(idd)

def update_impact(udict):
    config = {
        'user': 'root',
        'password': 'root',
        'host': 'db',
        'port': '3306',
        'database': 'susafManagement'
    }
    connection = mysql.connector.connect(**config)
    cursor = connection.cursor()
    cur = get_impact(udict['id_impact'])[0]
    for x in cur:
        if x not in udict:
            udict[x] = cur[x]
    cursor.execute(f"UPDATE impact SET impact_title='{udict['impact_title']}', _dimension={udict['_dimension']}, _level={udict['_level']}, _type={udict['_type']}, _reference={udict['_reference']} where id_impact={udict['id_impact']}")
    connection.commit()
    cursor.close()
    connection.close()
    return "success"


@app.route('/')
@cross_origin()
def index() -> str:
    return json.dumps({'favorite_colors': favorite_colors()})

# Get Requests

@app.route('/impact/<path:num>')
@cross_origin()
def impact(num) -> str:
    return json.dumps({"result": get_impact(num)})

@app.route('/impacts/')
@cross_origin()
def surveys() -> str:
    return json.dumps({"result": get_impacts()})


# CRUD Impact
@app.route('/addimpact/<path:num>', methods=['POST'])
@cross_origin()
def Addimpact(num):
    return add_impact(json.loads(num))    

@app.route('/updateimpact/<path:num>', methods=['PUT'])
@cross_origin()
def updateImpact(num):
    return update_impact(json.loads(num))



if __name__ == '__main__':
    app.run(host='0.0.0.0')

# create_token({'name': 'token', 'symbol': 'token', 'initSupply': 1000})