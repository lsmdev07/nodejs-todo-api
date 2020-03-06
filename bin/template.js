module.exports = {
    HTML: function(body, style){
        return `
        <!DOCTYPE html>
        <html>
            <head>
                <title>write your todo</title>
                <meta charset="utf-8">
            </head>
            <body>
                <h1><a href="/" style="text-decoration: none; color: #424242;">Write Your "To Do"</a></h1>
                ${body}
            </body>
        </html>
        <style>
            h1 {
                margin-top: 50px;
                font-size: 100px;
            }
            a, div {
                margin: 5px;
                color: #6E6E6E;
                
            }
            
            form {
                text-algn: left;
            }

            body {
                text-align: center;
                background-color: #ECF6CE;
            }
        </style>
    
        `;
    }
}