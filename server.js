var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
var articles={
'article-one':{
    tittle:'Article One..Nishant',
    heading:'Article One',
    date:'Feb 10,2017',
    content:` <p>
                this is the content for my first article.this is the content for my first article.this is the content for my first article.
                </p>
                <p>
                this is the content for my first article.this is the content for my first article.this is the content for my first article.
                </p>
                `}
    `
};
function createTemplate(data){
var tittle=data.tittle;
var heading=data.heading;
var date=data.date;
var content=data.content;
var htmlTemplate=`<html>
    <head>
        <title>
            ${tittle}
        </title>
        <meta name="viewport" content="width-device-width,initial-scale=1"/>
         <link href="/ui/style.css" rel="stylesheet" />
    </head>
    <BODY>
        <div class="container">
            <a href="/">HOME</a>
        </div>
        <hr/>
        <h3>
            ${heading}
        </h3>
        <div>
            ${date}
        </div>
        <div class="container">
            ${content}
        </div>
    </BODY>
</html>

`;
return htmlTemplate;
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/articleName',function(req,res){
var articleName=req.params.articleName;
    res.send(createTemplate(articles[articleName]));
});
app.get('/article-two',function(req,res){
   res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
});
app.get('/article-three',function(req,res){
    res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
