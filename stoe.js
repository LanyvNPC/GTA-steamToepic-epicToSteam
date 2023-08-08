const fs = require('fs');
const path = require('path');

const steamFolderPath = 'C:\\Program Files (x86)\\Steam\\steamapps\\common';
const epicFolderPath = 'C:\\Program Files\\Epic Games';

const steamGameFolderName = 'Grand Theft Auto V';
const newGameFolderName = 'GTAV';

const steamGameFolderPath = path.join(steamFolderPath, steamGameFolderName);
const epicGameFolderPath = path.join(epicFolderPath, newGameFolderName);

fs.rename(steamGameFolderPath, epicGameFolderPath, (err) => {
  if (err) {
    console.error('Error during change name:', err);
    return;
  }

  console.log('success');


  fs.readdir(epicFolderPath, (err, files) => {
    if (err) {
      console.error('reading Error :', err);
      return;
    }

    console.log('you are gay');
    files.forEach((file) => {
      console.log(file);
    });
  });
});