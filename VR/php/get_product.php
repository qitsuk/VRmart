<?php
include_once 'db_factory.php';

if (isset($_GET['data'])) {
    $productID = mysqli_real_escape_string($dbc, $_GET['data']);
    $q = "SELECT * FROM Produkter WHERE p_id=$productID";
} else {
    echo "Error, please try again.";
}

$resultArray = array();

if ($result = $dbc->query($q)) {
    while ($row = $result->fetch_assoc()) {
        $resultArray[] = $row;
    }
}
echo json_encode($resultArray);
