window.onload = function() {

    //Listing Variables
    //purpose is to create a quiz answer list by using the arrayQuestion Array and having buttion inside of the li Icon.
    function listQuizArrayQuestionOne() {
    var targetQuestionOne= document.getElementById('questionOne');
    
    var ul = document.createElement('ul')
        targetQuestionOne.appendChild(ul)


      var arrayQuestion = ['()','[]','{}','<>'];

      for (i = 0; i < arrayQuestion.length; i++) {
        //var addBtn = arrayList.
        //anchor to the next page
        var createLink = document.createElement('a');
        createLink.setAttribute("href", "questionTwo.html");
        //button link
        var createBtn = document.createElement('button');
        var arrayList= document.createElement("li");
          var list_text = document.createTextNode(arrayQuestion[i]);
          //appending all the elements to the ul element

          createLink.appendChild(list_text);
          createBtn.appendChild(createLink);          
          arrayList.appendChild(createBtn);
          ul.appendChild(arrayList);
      }

      }

      listQuizArrayQuestionOne ();

}


  