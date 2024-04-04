<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

// Database connection
$host = 'localhost'; // or your MySQL host
$username = 'root'; // your MySQL username
$password = ''; // your MySQL password
$database = "data"; // Name of your database
$table = "signup"; // Name of your table

// Create connection
$conn = new mysqli($host, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get POST data
$data = json_decode(file_get_contents("php://input"), true);

// Check if all required fields are present
if (!isset($data['firstName']) || !isset($data['lastName']) || !isset($data['email']) || !isset($data['password']) || !isset($data['c_password'])) {
    echo json_encode(array('success' => false, 'error' => 'Required fields are missing'));
    exit;
}

// Extract data from JSON
$firstName = $data['firstName'];
$lastName = $data['lastName'];
$email = $data['email'];
$password = $data['password'];
$c_password = $data['c_password'];

// Validate if password and confirm password match
if ($password !== $c_password) {
    echo json_encode(array('success' => false, 'error' => 'Passwords do not match'));
    exit;
}

// Prepare statement
$stmt = $conn->prepare("INSERT INTO $table (firstName, lastName, email, password) VALUES (?, ?, ?, ?)");

// Check if prepare() succeeded
if ($stmt === false) {
    echo json_encode(array('success' => false, 'error' => $conn->error));
    exit; // Exit script
}

// Bind parameters
$stmt->bind_param("ssss", $first, $last, $emai, $pass);

// Execute statement
$first = $firstName;
$last = $lastName;
$emai = $email;
$pass = $password;

if (!$stmt->execute()) {
    // Error in executing query
    echo json_encode(array('success' => false, 'error' => $stmt->error));
} else {
    // Success
    echo json_encode(array('success' => true));
}

// Close statement and connection
$stmt->close();
$conn->close();
?>
