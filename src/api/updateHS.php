<?php

    // Headers
    header('Access-Control-Allow-Origin: *');
    header('Content-Type: application/json');
    header('Access-Control-Allow-Methods: POST');
    header('Access-Control-Allow-Headers: Access-Control-Allow-Headers, Content-Type, Access-Control-Allow-Methods, Authorization, X-Requested-With');

    require_once ('./src/database.php');
    require_once ('./src/score.php');

    // Instantiate DB & Connect
    $database = new Database();
    $db = $database->connect();

    // Instantiate Quote Object
    $score = new Scores($db);

    // Get Raw Posted Data
    $data = json_decode(file_get_contents("php://input"));

    // Set Id to Update
    $score->id = $data->id;

    $score->high_score = $data->high_score;

    // Update Quote
    if($score->update())
    {
        echo json_encode(
            array('message' => 'Post Updated')
        );
    }
    else
    {
        echo json_encode(
            array('message' => 'Post Not Updated')
        );
    }