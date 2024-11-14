<?php
try {
    $conn = new mysqli("localhost", "root", "", "pontolimpo");

    if ($conn->connect_error) {
        throw new Exception("Conexão falhou: " . $conn->connect_error);
    }

    $email = $_POST['email'];
    $password = password_hash($_POST['password'], PASSWORD_BCRYPT);
    $user_type = $_POST['user_type'];

    // Insere o novo usuário no banco de dados
    $sql = "INSERT INTO users (email, password, user_type) VALUES ('$email', '$password', '$user_type')";
    if ($conn->query($sql) === TRUE) {
        session_start();
        $_SESSION['user_id'] = $conn->insert_id;
        $_SESSION['user_type'] = $user_type;
        header("Location: index.html"); // Redireciona para a página inicial ao registrar com sucesso
        exit();
    } else {
        throw new Exception("Erro: " . $sql . "<br>" . $conn->error);
    }

} catch (Exception $e) {
    echo "Erro ao registrar: " . $e->getMessage();
}

$conn->close();
?>
