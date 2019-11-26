from flask import request, jsonify
from urllib.parse import urlparse
from app import app

@app.route('/')

@app.route('/myurl')
def myurl():
    url = urlparse('')
    param = request.args.get('foo', 'you didnt send anything')
    return jsonify({
        'input':param,
        'output':param.upper()
    })