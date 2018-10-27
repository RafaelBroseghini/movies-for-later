function passAuthentication() {
    var p = prompt("Password please: ");

    while (p != "batata") {
        var p = prompt("Password please: ");
    }
}

passAuthentication();