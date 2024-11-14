<?php
try {
    $conn = new mysqli("localhost", "root", "", "pontolimpo");

    if ($conn->connect_error) {
        throw new Exception("Conexão falhou: " . $conn->connect_error);
    }

    $email = $_POST['email'];
    $password = $_POST['password'];

    // Verifica o usuário no banco de dados
    $sql = "SELECT * FROM users WHERE email = '$email'";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        $user = $result->fetch_assoc();
        if (password_verify($password, $user['password'])) {
            session_start();
            $_SESSION['user_id'] = $user['id'];
            $_SESSION['user_type'] = $user['user_type'];
            header("Location: index.html"); // Redireciona para a página inicial ao fazer login com sucesso
            exit();
        } else {
            throw new Exception("Senha incorreta.");
        }
    } else {
        throw new Exception("Usuário não encontrado.");
    }

} catch (Exception $e) {
    echo "Erro ao fazer login: " . $e->getMessage();
}

$conn->close();
?>
