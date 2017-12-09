from pymongo import MongoClient

mongoClient = MongoClient('localhost',27017)
db = mongoClient.puntos
collection = db.puntos

puntos = [{'lat':19.378, 'lng': -99.175}]

for punto in puntos:
    collection.insert(punto)
