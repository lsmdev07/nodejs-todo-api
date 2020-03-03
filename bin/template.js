module.exports = {
    HTML: function(title, body, style){
        return `
        <!DOCTYPE html>
        <html>
            <head>
                <title>${title}</title>
                <meta charset="utf-8">
            </head>
            <body>
                <h1><a href="/" style="text-decoration: none; color: black;">get name</a></h1>
                ${body}
            </body>
        </html>
        <style>
            h1 {
                margin-top: 50px;
            }
            a, div {
                margin: 5px;
                color: #6E6E6E;
            }
            div > form {
                text-align: center;
            }
            body {
                text-align: center;
                background-color: #ECF6CE;
            }
        </style>
    
        `;
    }
}