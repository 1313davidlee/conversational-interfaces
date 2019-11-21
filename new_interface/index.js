function askQuestion(){
    var user_question = document.getElementById('userQuestion').value
    console.log(user_question)
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => fillFields(json))

    
}

const metascraper = require('metascraper')([
  require('metascraper-image')(),
  require('metascraper-publisher')(),
  require('metascraper-title')(),
])

const got = require('got')

const targetUrl = 'http://www.bloomberg.com/news/articles/2016-05-24/as-zenefits-stumbles-gusto-goes-head-on-by-selling-insurance'


fetch(targetUrl)
  .then(respones => console.log(response.text()))






function fillFields(json) {
    console.log(json)

    
    var sample_data = [{
        "original_q" : "original question string",
        "matched_q" : "what the question was matched to",
        "source_url" : "this is a url",
        "sourceTitle" : "some article name",
        "sourceName" : "The New York Times",
        "sourceImageURL" : "https://cdn.vox-cdn.com/thumbor/cXFmLvR0cLwgspir3axOU_AK2d0=/0x0:5260x3507/1360x765/filters:focal(2474x62:3314x902):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/65652070/1184672034.jpg.0.jpg",
        "answer_string" : "this is an answer string"

    }]
    
    var matched_q = sample_data[0].matched_q
    var answer_string = sample_data[0].answer_string
    var sourceName = sample_data[0].sourceName
    var sourceTitle = sample_data[0].sourceTitle
    var sourceImageURL = sample_data[0].sourceImageURL

    var qaTemplate = document.getElementById('comment-template').innerHTML;

    var templateFunction = _.template(qaTemplate)

    var filledTemplate = templateFunction({
        'matchedQuestion' : matched_q,
        'matchedAnswer' : answer_string,
        'sourceTitle' : sourceTitle,
        'sourceName' : sourceName,
        'sourceImageURL' : sourceImageURL,
    })

    var questionSet = document.getElementById('questionSet')

    questionSet.innerHTML += filledTemplate
    
    
};



function ready(fn) {
    if (document.readyState != 'loading'){
      fn();
    } else {
      document.addEventListener('DOMContentLoaded', fn);
    }
  }
  
ready(function() {
    document.getElementById('submit-button').addEventListener('click',askQuestion)
})