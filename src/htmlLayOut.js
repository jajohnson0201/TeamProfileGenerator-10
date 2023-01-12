// function to create employee cards
function cardCreate(data) {
    let cards = ``;
    for (i = 0; i < data.length; i++) {
        if (data[i].role === "Intern") {
            cards += ` 
            <div class="card">
                <div class="card-header">
                    <h2>${data[i].name}</h2>
                    <h2>${data[i].role}</h2>
                </div>
                <div class="card-info">
                    <h3>ID: ${data[i].id}</h3>
                    <h3>EMAIL: ${data[i].email}</h3>
                    <h3>School: ${data[i].school}</h3>
                </div>
            </div>
                `;
        }
        else if (data[i].role === "Engineer") {
            cards += ` 
                        <div class="card">
                            <div class="card-header">
                                <h2>${data[i].name}</h2>
                                <h2>${data[i].role}</h2>
                            </div>
                            <div class="card-info">
                                <h3>ID: ${data[i].id}</h3>
                                <h3>EMAIL: ${data[i].email}</h3>
                                <h3>GitHub: ${data[i].github}</h3>
                            </div>
                        </div>
                            `;
        }
        else if (data[i].role === "Manager") {
            cards += ` 
                                    <div class="card">
                                        <div class="card-header">
                                            <h2>${data[i].name}</h2>
                                            <h2>${data[i].role}</h2>
                                        </div>
                                        <div class="card-info">
                                            <h3>ID: ${data[i].id}</h3>
                                            <h3>EMAIL: ${data[i].email}</h3>
                                            <h3>Office #: ${data[i].officeNumber}</h3>
                                        </div>
                                    </div>
                                        `;
        }
    }
    return cards;
}
// function to create an html layout
function createHTML(data) {
    const file = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="assets/style.css" rel="stylesheet">
        <title>Team Profile</title>
    </head>
    <body>
        <div id="page-header">
            <h1> Our Team </h1>
        </div>
        <section id="card-section">
            ${cardCreate(data)}
        </section>

        
    </body>
    </html>`

    return file;
}
module.exports = createHTML;