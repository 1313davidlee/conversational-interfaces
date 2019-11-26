from flask import request, jsonify
import spacy
from app import app

my_dict ={"How old is Kamala Harris":"Kamala Harris is 42", 
          "Where is Kamala Harris from?":"Kamala Harris is from California"}

nlp = spacy.load('en_core_web_lg')

@app.route('/')

@app.route('/myurl')
def myurl():
    param = request.args.get('question', None)
    similarity_dict = get_similarities(param, my_dict)
    high_score = get_highest(my_dict)
    answer = get_val(high_score, my_dict)
    return jsonify({
        'question':param,
        'answer':answer
    })

# function to return a list of similarities
def get_similarities(question, database):
    a_dict = {}
    for key, value in database:
        sentence1 = nlp(question)
        sentence2 = nlp(key)
        similarity_score = sentence1.similarity(sentence2)
        a_dict[similarity_score] = value
        return a_dict

# get highest value key in dictionary 
def get_highest(dictionary):
    key_list = dictionary.keys()
    high_score = key_list.max()
    return high_score
         
# function to return value for any key 
def get_val(score, dictionary): 
    for key, value in dictionary.items(): 
        if key == score: 
             return value 

    return "key/value doesn't exist"