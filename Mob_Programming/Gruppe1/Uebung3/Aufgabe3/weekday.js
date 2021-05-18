const day = new Date();

switch (day.getDay()) {
    case 0:
        console.log('Sonntag');
        break;

    case 1:
        console.log('Montag');
        break;

    case 2:
        console.log('Dienstag');
        break;
    
    // ...

    default:
        break;
}

