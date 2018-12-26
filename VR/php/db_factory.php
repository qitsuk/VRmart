<?php
$dbc = mysqli_connect("mysql79.unoeuro.com", "qitsuk_dk", "19qItSuKsUnOEuRo87", "qitsuk_dk_db2", '3306');
if ($dbc->connect_errno) {
    printf("Connection failed: %s\n", $dbc->connect_error);
    exit();
}