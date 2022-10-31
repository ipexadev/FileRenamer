const { readdirSync, rename } = require('fs');
const { resolve } = require('path');
const c = require('./config.json');

console.log(`
###################################################################
#     Removing ${c.removefileextension} from every File    
###################################################################
`)

const DirPath = resolve(__dirname, c.folder);

const files = readdirSync(DirPath);

files.forEach(file => {



    let newname = file.replace(`${c.removefileextension}`, "");
    let suffix = newname.split(" - ")[1];
    let prefix = newname.split(" - ")[0];
    let ext_temp = prefix.split(".");
    setTimeout(() => {
        let ext = ext_temp[ext_temp.length - 1];
        ext_temp[ext_temp.length - 1 ] = null;
        let name = ext_temp.join(".");
        if(suffix === null) {
            setTimeout(() => {
                newname = `${name.slice(0, name.length - 1)}.${ext}`;
                console.log(newname);
            }, 100)
        } else {
            setTimeout(() => {
                newname = `${name.slice(0, name.length - 1)}__${suffix}.${ext}`;
                rename(
                    DirPath + `/${file}`,
                    DirPath + `/${newname}`,
                    err => console.log(err)
                )
            }, 100)
        }
    }, 100)
});