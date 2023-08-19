function GetIP() {
    $.getJSON("https://api.ipify.org?format=json", function(data) {
        return data.ip;
    });
}
