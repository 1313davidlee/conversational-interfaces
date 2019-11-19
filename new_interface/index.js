function postComment() {
    var commenter = document.getElementById("commenterName").value;
    var comment = document.getElementById("commentText").value;
  
    //insert comment into "comments" div in this format:
    //<div class="comment"><p>comment</p><p>Posted By: <span class="commenter">commenter</span></p></div>
  
    //create template string - THIS IS THE ONLY LINE WE HAVE TO CHANGE
    //var commentTemplate = '<div class="comment"><p><%= comment %></p><p>Posted By: <span class="commenter"><%= commenter %></span></p></div>';
    var commentTemplate = document.getElementById("comment-template").innerHTML;
  
    //create template function
    var templateFn = _.template(commentTemplate);
  
    var commentsDiv = document.getElementById("comments");
  
    //execute template function with JSON object for the interpolated values
    var templateHTML = templateFn({ 'comment': comment, 'commenter': commenter });
  
    //append rather than replace!
    commentsDiv.innerHTML += templateHTML;
  }

function askQuestion(){

    //var asked_question = 

    var matched_q = sample_data[0].matched_q
    var answer_string = sample_data[0].answer_string
    var sourceName = sample_data[0].sourceName
    var sourceTitle = sample_data[0].sourceTitle

    var qaTemplate = document.getElementById('comment-template').innerHTML;

    var templateFunction = _.template(qaTemplate)

    var filledTemplate = templateFunction({
        'matchedQuestion' : matched_q,
        'matchedAnswer' : answer_string,
        'sourceTitle' : sourceTitle,
        'sourceName' : sourceName,
    })

    var questionSet = document.getElementById('questionSet')

    questionSet.innerHTML += filledTemplate
    
    
};

var sample_data = [
    {
        "original_q" : "original question string",
        "matched_q" : "what the question was matched to",
        "source_url" : "this is a url",
        "sourceTitle" : "some article name",
        "sourceName" : "The New York Times",
        "answer_string" : "this is an answer string"
    },
]