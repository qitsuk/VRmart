<?php
include_once 'db_factory.php';

if (isset($_GET['data'])) {
    $productID = mysql_real_escape_string($_GET['data']);
    $q1 = "SELECT p_navn, p_pris, p_beskrivelse FROM Produkter WHERE p_id=$productID";
} else {
    echo "Error, please try again.";
}

$result = $dbc->query($q1);
$resultArray = array();
while ($row = $result->fetch_assoc()) {
    array_push($resultArray, $row);
}

echo json_encode($resultArray);