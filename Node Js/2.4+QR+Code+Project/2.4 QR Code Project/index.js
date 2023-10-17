import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer
  .prompt([
    {
      message: "Type in your Url: ",
      name: "Url",
    },
  ])
  .then((answers) => {
    const url = answers.Url;
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream("qr_img1.png"));

    fs.writeFile("Url.txt", url, (err) => {
      if (err) throw err;
      console.log("The file has been saved!");
    });
  })
  .catch((error) => {
    if (error.isTtyError) {
      
    } else {
      
    }
  });