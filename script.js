var quotesArr = [
  "Pleasure in the job puts perfection in the work."
  ,
  
  "It is not the mountain we conquer, but ourselves."
  ,
  
  "Lost time is never found again."
  ,
  
  "No matter how great the talent or efforts, some things just take time. You can’t produce a baby in one month by getting nine women pregnant."
  ,
  
  "You may delay, but time will not."
  
  ,
  
  "The tragedy in life doesn’t lie in not reaching your goal. The tragedy lies in having no goal to reach."
  ,
  "Both good and bad days should end with productivity. Your mood affairs should never influence your work."
  ,
  "Focus on being productive instead of busy."
  ,
  "There is never enough time to do it right, but there is always enough time to do it over."
  ,
  "Knowledge is the source of wealth. Applied to tasks we already know, it becomes productivity. Applied to tasks that are new, it becomes innovation."

    
];

var authorArr = [
  "- Aristotle",
  "- Sir Edmund Hillary",
"- Benjamin Franklin",
"- Warren Buffett",
"- Benjamin Franklin",
"- Benjamin E. Mays",
"- Greg Evans",
"- Tim Ferriss",
"- John W. Bergman",
"- Peter Drucker"
];


var twitterQuote = quotesArr[0]+authorArr[0];

function newQuote(){

var i = Math.floor(Math.random()*quotesArr.length);

document.getElementById("quotes").innerHTML = quotesArr[i];

document.getElementById("authors").innerHTML = authorArr[i];
  
twitterQuote = quotesArr[i]+" "+" "+authorArr[i];
  
}

function tweetQuote(){
  
  window.open("https://twitter.com/intent/tweet?text="+encodeURIComponent(twitterQuote));

}