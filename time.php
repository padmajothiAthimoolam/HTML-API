<?php
    header('Content-Type: text/event-stream');
    header('Cache-control: no-cache');

    $time = date('H:i:s');
    echo "data: the server time is: {$time}\n\n";