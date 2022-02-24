<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");

include 'DbConnect.php';
$objDb = new DbConnect;
$conn = $objDb->connect();

$method = $_SERVER['REQUEST_METHOD'];
switch($method) {
    case "GET":
        $sql = "SELECT * FROM movie";
        $path = explode('/', $_SERVER['REQUEST_URI']);
        if(isset($path[3]) && is_numeric($path[3])) {
            $sql .= " WHERE id = :id";
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':id', $path[3]);
            $stmt->execute();
            $movie = $stmt->fetch(PDO::FETCH_ASSOC);
        } else {
            $stmt = $conn->prepare($sql);
            $stmt->execute();
            $movie = $stmt->fetchAll(PDO::FETCH_ASSOC);
        }

        echo json_encode($movie);
        break;
    case "POST":
        $movie = json_decode(file_get_contents('php://input'));
        $sql = "INSERT INTO movie(id,name,image,year) VALUES(null,:name,:image,:year)";
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':name', $movie->name);
        $stmt->bindParam(':image', $movie->image);
        $stmt->bindParam(':year', $movie->year);

        if($stmt->execute()) {
            $response = ['status' => 1, 'message' => 'Record created successfully.'];
        } else {
            $response = ['status' => 0, 'message' => 'Failed to create record.'];
        }
        echo json_encode($response);
        break;

    case "PUT":
        $movie = json_decode(file_get_contents('php://input') );
        $sql = "UPDATE movie SET name= :name, year =:year, image =:image, description =:description WHERE id = :id";
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':id', $movie->id);
        $stmt->bindParam(':name', $movie->name);
        $stmt->bindParam(':year', $movie->year);
        $stmt->bindParam(':image', $movie->image);
        $stmt->bindParam(':description', $movie->description);

        if($stmt->execute()) {
            $response = ['status' => 1, 'message' => 'Record updated successfully.'];
        } else {
            $response = ['status' => 0, 'message' => 'Failed to update record.'];
        }
        echo json_encode($response);
        break;

    case "DELETE":
        $sql = "DELETE FROM movie WHERE id = :id";
        $path = explode('/', $_SERVER['REQUEST_URI']);

        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':id', $path[3]);

        if($stmt->execute()) {
            $response = ['status' => 1, 'message' => 'Record deleted successfully.'];
        } else {
            $response = ['status' => 0, 'message' => 'Failed to delete record.'];
        }
        echo json_encode($response);
        break;
}