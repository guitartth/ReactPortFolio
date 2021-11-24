<?php

class Database
{
    
    public function connect()
    {
        
        $hostname = '160.153.47.130:3306';
        $username = 'cfree';
        $password = 'Cwf010115!';
        $database = 'cwfportfolioDB';
        $dsn = "mysql:host={$hostname};dbname={$database}";

        try
        {
            $this->conn = new PDO($dsn, $username, $password);
            $this->conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        }
        catch(PDOException $e)
        {
            echo 'Connection Failed: ' . $e->getMessage();
        }

        return $this->conn;
    }
}

?>