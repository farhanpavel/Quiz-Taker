<?php
// Database connection
$host = 'localhost'; // or your MySQL host
$username = 'root'; // your MySQL username
$password = ''; // your MySQL password
$database = 'data'; // your MySQL database name

// Establish connection to MySQL database
$conn = mysqli_connect($host, $username, $password, $database);

// Check connection
if (!$conn) {
  die("Connection failed: " . mysqli_connect_error());
}

// If form submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $email = $_POST["email"];
  $password = $_POST["password"];

  // Perform SQL query to check if the user exists
  $sql = "SELECT * FROM singup WHERE email='$email' AND password='$password'";
  $result = mysqli_query($conn, $sql);

  if (mysqli_num_rows($result) == 1) {
    // User exists, redirect or do further actions
    echo "Login successful";
  } else {
    echo "Invalid email or password";
  }
}

mysqli_close($conn);
?>
