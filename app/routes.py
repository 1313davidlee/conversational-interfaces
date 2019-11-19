from flask import request, jsonify
from app import app

@app.route('/')

@app.route('/myurl')
def myurl():
    param = request.args.get('foo', 'you didnt send anything')
    return jsonify({
        'input':param,
        'output':param.upper()
    })