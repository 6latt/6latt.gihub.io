<?php
// Set the path to the images folder
$folderPath = "portfolio/";

// Get a list of files in the folder
$files = scandir($folderPath);

// Filter out any files that aren't images
$imageFiles = array_filter($files, function($filename) use ($folderPath) {
  $extension = pathinfo($folderPath . $filename, PATHINFO_EXTENSION);
  return in_array(strtolower($extension), array('jpg', 'jpeg', 'png', 'gif'));
});

// Convert the list of filenames to JSON format
$jsonData = json_encode($imageFiles);

// Set the content type header to JSON
header('Content-Type: application/json');

// Send the JSON data to the client
echo $jsonData;
?>
