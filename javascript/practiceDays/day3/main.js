// import path from "path";
// import fs from "fs";

// // console.log(
// //   path.dirname(
// //     "C:/Users/USER/Dropbox/My PC (DESKTOP-VDJO078)/Desktop/VS_CODE/2021/C++/javascript/day3/main.js"
// //   )
// // );

// // console.log(path.extname('C:/Users/USER/Dropbox/My PC (DESKTOP-VDJO078)/Desktop/VS_CODE/2021/C++/javascript/day3/main.js'))

// // console.log(path.basename('C:/Users/USER/Dropbox/My PC (DESKTOP-VDJO078)/Desktop/VS_CODE/2021/C++/javascript/day3/main.js'))

// // console.log(path)




// // const fileNames = fs.readFileSync('javascript')
// // console.log(fileNames)

// // console.log(__dirname);
// console.log(process.cwd());

// // new folder absolute path
// const dirPath = path.join(__dirname, '/day3');

// // create directory
// fs.mkdirSync(dirPath);


import path  from 'path';

const __dirname = path.resolve();

console.log(__dirname+'/javascript/day3/morsalin.js')


import fs from 'fs';

fs.mkdirSync(__dirname,"client");
