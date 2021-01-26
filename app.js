const fs = require('fs'); 
function bullshit() {
    fs.writeFile('test.txt', "hiiiiiii", err => { 
        if (err) throw err;
            console.log('The file has been saved!');
    });
}

bullshit()