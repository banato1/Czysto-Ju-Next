<meta charset="UTF-8" />
<?phpза
$name = $_POST['name'];
$email = $_POST['email'];
$header = $_POST['header'];
$message = $_POST['message'];
$mes = "Имя: $name \nE-mail: $email \nТема: $header \nТекст: $message";
$send = mail(senchuk.sasha99@gmail.com, $header, $mes, "Content-type:text/plain; charset = UTF-8\r\nFrom:$email");
if ($send == 'true') {echo "Wyslano";}
else {echo "Coś nie tak";}
?>
