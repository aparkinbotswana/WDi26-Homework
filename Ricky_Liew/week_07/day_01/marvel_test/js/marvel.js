
let privKey = 'a8f53d74ff1b0b36fe8cb260b585e054243d9bc4'
let pubKey  = '01c7334ab72d75bf17262f6a543261f3'

// Finds comic by title string and issue number
// Parameters: format: comic
//             formatType: comic
//             noVariants: true
//             title: <input_value>
//             issueNumber: <input_value>
//



//https://gateway.marvel.com:443/v1/public/comics?title=x-men&issueNumber=42&apikey=


// title, id, description, thumbnail
const renderResults = function(issues){
  //console.log(issues);
  document.getElementById("titles-result").innerHTML = '';
  var issueCoverDiv = document.createElement('div');
  issueCoverDiv.class = "issue-covers";
  // document.getElementById("titles-result").appendChild(issueCoverDiv);

  //console.log(issues);

  for (var i = 0; i < issues.length; i++) {
    document.getElementById("titles-result").appendChild(issueCoverDiv);
    var issueCover = document.createElement('img');
    issueCover.id = issues[i][1];
    issueCover.src = issues[i][3];
    issueCover.title = issues[i][0];
    issueCover.classList.add("issue-cover");

    issueCoverDiv.appendChild(issueCover);
  }
}


const findIssueByTitle = function(titleName, issueNo){
  console.log(titleName);
  console.log(issueNo);

  let request = new XMLHttpRequest();
  let ts = new Date().getTime();
  let web = 'https://gateway.marvel.com:443/v1/public/comics?format=comic&formatType=comic&noVariants=true&title=' + titleName +'&issueNumber=' + issueNo + "&ts=" + ts + '&apikey=' + pubKey + "&hash=" + md5(ts+privKey+pubKey);

//console.log(web);

  request.open('GET', web, true);
  request.setRequestHeader('Content-Type', 'application/json');
  request.send();

  request.onload = function (){
    comicIssues = [];
    if(request.status >= 200 && request.status < 400){
      let results = JSON.parse(request.responseText).data.results;
      for (var i = 0; i < results.length; i++){
        // console.log(results[i].title);
        // console.log(results[i].thumbnail.path + "." + results[i].thumbnail.extension);
        title = results[i].title;
        issueId = results[i].id;
        issueDescription = results[i].description;
        thumbnail = results[i].thumbnail.path + "." + results[i].thumbnail.extension;

        comicIssues[i] = [title, issueId, issueDescription, thumbnail];
        //console.log(comicDetails[i]);
      }
    }
    renderResults(comicIssues);
    //return comicIssues;  // won't work

  }
}

const showValues = function(event){
  event.preventDefault();
  let title = document.getElementById('title').value;
  let issue_no = document.getElementById('issue-no').value;

  findIssueByTitle(title, issue_no);
}


const button = document.getElementById('fetch');
button.addEventListener('click', showValues);

//findIssueByTitle('x-men', 43);
