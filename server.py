from flask import Flask, request
from flask_cors import CORS
from utils import loadMovieList
import numpy as np
from mrec import predict

app = Flask(__name__, static_folder='client/build', static_url_path='/')
CORS(app)

app.config['SECRET_KEY'] = 'the quick brown fox jumps over the lazy   dog'
app.config['CORS_HEADERS'] = 'Content-Type'


@app.route('/')
def hello_world():
    return app.send_static_file('index.html')


@app.route('/movielist', methods=['GET'])
def getList():
    if request.method == 'GET':
        return{"a": loadMovieList()}


@app.route('/addratings', methods=['POST'])
def addRatings():
    if request.method == 'POST':
        user_ratings = np.zeros(len(loadMovieList()))
        ratings = request.get_json()
        for i in ratings:
            user_ratings[int(i)] = ratings[i]
        recs, acc = predict(user_ratings, 943)
        return ({"r": recs.tolist()})


if __name__ == '__main__':
    # Threaded option to enable multiple instances for multiple user access support
    app.run(threaded=True, port=5000)
