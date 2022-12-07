<?php
use PHPMailer\PHPMailer\PHPMailer;
require_once __DIR__ . '/vendor/autoload.php';
$errors = [];
$errorMessage = '';

if (!empty($_POST)) {
   $name = $_POST['name'];
   $email = $_POST['email'];
   $message = $_POST['message'];

   if (empty($name)) {
       $errors[] = 'Name is empty';
   }

   if (empty($email)) {
       $errors[] = 'Email is empty';
   } else if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
       $errors[] = 'Email is invalid'

   }


   if (empty($message)) {
       $errors[] = 'Message is empty';
   }

   if (!empty($errors)) {
       $allErrors = join('<br/>', $errors);
       $errorMessage = "<p style='color: red;'>{$allErrors}</p>";
   } else {
       $mail = new PHPMailer();


       // specify SMTP credentials


       $mail->isSMTP();
       $mail->Host = 'smtp.mailtrap.io';
       $mail->SMTPAuth = true;
       $mail->Username = 'api';
       $mail->Password = 'c42c91ef273117e1789a402a20066383';
       $mail->SMTPSecure = 'tls';
       $mail->Port = 2525;
       $mail->setFrom($email, 'Mailtrap Website');
       $mail->addAddress('mailtrap@fahrudin.me', 'Me');
       $mail->Subject = 'New message from your website';

       // Enable HTML if needed
       $mail->isHTML(true);
       $bodyParagraphs = ["Name: {$name}", "Email: {$email}","Subject: {$subject}", "Message:", nl2br($message)];
       $body = join('<br />', $bodyParagraphs);
       $mail->Body = $body;
       echo $body;

       if($mail->send()){
           header('Location: thank-you.html'); // Redirect to 'thank you' page. Make sure you have it
       } else {

           $errorMessage = 'Oops, something went wrong. Mailer Error: ' . $mail->ErrorInfo;
       }

   }

}

?>