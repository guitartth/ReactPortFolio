<?php

    // Headers
    header('Access-Control-Allow-Origin: *');
    header('Content-Type: application/json');

    require_once ('./src/database.php');
    require_once ('./src/score.php');

    // Instantiate DB & Connect
    $database = new Database();
    $db = $database->connect();

    // Instantiate Quote Object
    $score = new Scores($db);

    // Get ID
    $score->id = filter_input(INPUT_GET, 'id', FILTER_VALIDATE_INT);

    // Get Quote
    $score->get_high_score();

    // Create Array
    $score_arr = array(
        'id' => $score->id,
        'high_score' => $score->high_score
    );

    // Turn to JSON
    print_r(json_encode($score_arr));