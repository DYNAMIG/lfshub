function Check() {
    const framework = document.getElementById('grid-state');
    if (framework.selectedIndex == 0) {
        Encode();
    }
    else if(framework.selectedIndex == 1){
        Decode();
    }
}
function Encode() {
    const String = document.getElementById('String').value;
    const Output = document.getElementById('Output');
    OutputString.value = window.btoa(String);
    var fields = {
        Input: String,
        Output: window.btoa(String),
        Referer: "Decoder and Encoder"
    }
    console.log(fields);
}
function Decode() {
    const String = document.getElementById('String').value;
    const Output = document.getElementById('Output');
    OutputString.value = window.atob(String);
    var fields = {
        Input: String,
        Output: window.atob(String),
        Referer: "Decoder and Encoder"
    }
    console.log(fields);
}
function copy() {
    var copyText = document.getElementById('OutputString');
    copyText.select();
    copyText.setSelectionRange(0, 99999); 
    navigator.clipboard.writeText(copyText.value);

}