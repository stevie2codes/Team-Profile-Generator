
let build = require("./build_team");

function generateHTML(team_cards){

   return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    <link rel="stylesheet" href="/style.css">
    <title>Main</title>
</head>
<body>
  <style>
    body{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: rgb(29,30,34);
    display: flex;
    justify-content: center;
}

.card{
  margin-top: 100px;
  color: rgb(206, 189, 189);
  background-color: rgb(29,30,34);
  box-shadow: -6px -6px 26px 0 rgba(53, 51, 51, 0.301),6px 6px 16px 0 rgba(17, 18, 20, 0.8);
  border: none;
}

.card ul li{
    background-color: rgb(29,30,34);
    border-bottom: 1px solid rgba(206, 189, 189, 0.657);
}

.card-header{
    border-bottom: 1px solid rgba(206, 189, 189, 0.685);
}
    </style>
    <div class = "card-div">
     ${team_cards}
     </div>

            
</body>
</html>`

}

// <!-- <div class = "card-div">
// ${employee_cards}
// </div> --!>

module.exports = {
    generateHTML: generateHTML
}