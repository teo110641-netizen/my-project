<?php
// Lấy dữ liệu từ POST
$name = trim($_POST['name'] ?? '');
$email = trim($_POST['email'] ?? '');
$message = trim($_POST['message'] ?? '');

// Kiểm tra dữ liệu cơ bản
if (!$name || !$email || !$message || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo "error";
    exit;
}

// Cấu hình email
$to = "youremail@example.com";  // Thay bằng email bạn muốn nhận
$subject = "New Contact Message from $name";
$body = "Name: $name\nEmail: $email\n\nMessage:\n$message";
$headers = "From: $email\r\nReply-To: $email\r\n";

// Gửi email
if (mail($to, $subject, $body, $headers)) {
    echo "success";
} else {
    echo "error";
}
?>
