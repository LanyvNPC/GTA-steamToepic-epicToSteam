const fs = require('fs');
const path = require('path');

const epicFolderPath = 'C:\\Program Files\\Epic Games';
const steamFolderPath = 'C:\\Program Files (x86)\\Steam\\steamapps\\common';

const epicGameFolderName = 'GTAV';
const steamGameFolderName = 'Grand Theft Auto V';


const epicGameFolderPath = path.join(epicFolderPath, epicGameFolderName);
const steamGameFolderPath = path.join(steamFolderPath, steamGameFolderName);

fs.rename(epicGameFolderPath, steamGameFolderPath, (err) => {
  if (err) {
    console.error('Error during change name:', err);
    return;
  }

  console.log('success'); 


  fs.readdir(steamFolderPath, (err, files) => {
    if (err) {
      console.error('reading Error:', err);
      return;
    }

    console.log('list of file:');
    files.forEach((file) => {
      console.log(file);
    });
  });
});
