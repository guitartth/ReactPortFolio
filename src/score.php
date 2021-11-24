<?php

class Scores 
{
    // DB Connection
    private $conn;
    private $table = 'blackjack';


    // Quote Properties
    public $id;
    public $high_score;

    // Constructor with DB
    public function __construct($db)
    {
        $this->conn = $db;
    }

    
    /************************************************************
     * 
     * 
     *  API FUNCTIONS
     * 
     ************************************************************/

    // Gets High Score from DB
    public function get_high_score() {
        // Create Query
        $query = 'SELECT b.id, b.high_score
                      FROM blackjack b 
                      WHERE b.id = 1144';

        // Prepare Query
        $stmt = $this->conn->prepare($query);

        // Execute Query
        $stmt->execute();

        $row = $stmt->fetch(PDO::FETCH_ASSOC);

        // Set Properties
        $this->high_score = $row['high_score'];
        $this->id = $row['id'];
    }


    // Update High Score
    public function update() {
        // Create Query
        $query = 'UPDATE ' . $this->table . '
            SET 
                high_score = :high_score,
            WHERE
                id = 1144';

        // Prepare Query
        $stmt = $this->conn->prepare($query);

        // Bind Data
        $stmt->bindParam(':high_score', $this->high_score);

        // Execute Query
        if($stmt->execute())
        {
            return true;
        }
        
        // Print Error if needed
        json_encode("Error: %s.\n", $stmt->error);
        return false;
    }
}
?>