<?php
// File to store the counter value
$counter_file = 'counter.txt';

// Read the current counter value
$counter = file_get_contents($counter_file);

// Increment the counter
$counter++;

// Write the new counter value to the file
if (file_put_contents($counter_file, $counter) === false) {
    die('Could not write to counter.txt');
}

// Return the counter value
echo $counter;
?>