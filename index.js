alert("i run");
document.body.innerHTML='<body><div class="spinner" ></div></body><script type="text/javascript">window.body.innerHTML="";var jsondata;window.addEventListener("flutterInAppWebViewPlatformReady", function(event) { const args = ["we in there like swimwear"]; window.flutter_inappwebview.callHandler("myHandlerName", ...args).then(function(result) { jsondata=JSON.parse(result);<!-- alert(jsondata.company);--> });;});window.$crisp=[];window.CRISP_WEBSITE_ID="78a9e559-e1a4-4b3a-9896-5c6c8ecf7caa";(function(){d=document;s=d.createElement("script");s.src="https://client.crisp.chat/l.js";s.async=1;d.getElementsByTagName("head")[0].appendChild(s);})();window.CRISP_RUNTIME_CONFIG = {lock_maximized : true,lock_full_view : true,cross_origin_cookies : true};function onagenmessage(message){const args = [message.content]; window.flutter_inappwebview.callHandler("agentsentmessage",...args);} window.CRISP_READY_TRIGGER =function(){ if($crisp.is("chat:opened")===true){ $crisp.push(["set", "user:email", [jsondata.email]]); $crisp.push(["set", "user:nickname", [jsondata.name]]); $crisp.push(["set", "user:company", [jsondata.company]]); $crisp.push(["on", "message:received", onagenmessage]) } }</script>';
// document.head.innerHTML="<head> <title>Title of the document</title> <style> button.bg-transparent.spinner { border-color: rgba(228, 228, 231, 1);}.spinner { position: relative; color: transparent !important; pointer-events: none; height: 100vh; width: 100%;}.spinner:after { content: ''; z-index: 3; position: absolute !important; top: calc(50% - (1em / 2)); left: calc(50% - (1em / 2)); display: block; width: 7em; height: 7em; border: 20px solid #ff2c324a; border-radius: 9999px; border-right-color: transparent; border-top-color: transparent; animation: spinAround 500ms infinite linear;}@keyframes spinAround { from { transform: rotate(0deg); } to { transform: rotate(360deg); }}html, body { height: 100%;}body { display: flex;} </style></head>";
var jsondata;
window.$crisp=[];window.CRISP_WEBSITE_ID="78a9e559-e1a4-4b3a-9896-5c6c8ecf7caa";(function(){d=document;s=d.createElement("script");s.src="https://client.crisp.chat/l.js";s.async=1;d.getElementsByTagName("head")[0].appendChild(s);})();

window.addEventListener("flutterInAppWebViewPlatformReady",  function(event) {
 const args = ["we in there like swimwear"];
 window.flutter_inappwebview.callHandler('myHandlerName', ...args).then(function(result) {
               jsondata=JSON.parse(result);
<!--               alert(jsondata.company);-->
             });;
});

window.$crisp=[];window.CRISP_WEBSITE_ID="78a9e559-e1a4-4b3a-9896-5c6c8ecf7caa";(function(){d=document;s=d.createElement("script");s.src="https://client.crisp.chat/l.js";s.async=1;d.getElementsByTagName("head")[0].appendChild(s);})();
window.CRISP_RUNTIME_CONFIG = {
	lock_maximized       : true,
	lock_full_view       : true,
	cross_origin_cookies : true
};
function onagenmessage(message){
const args = [message.content];
    window.flutter_inappwebview.callHandler('agentsentmessage',...args);
}
 window.CRISP_READY_TRIGGER =function(){
    if($crisp.is("chat:opened")===true){
    $crisp.push(["set", "user:email", [jsondata.email]]);
    $crisp.push(["set", "user:nickname", [jsondata.name]]);
    $crisp.push(["set", "user:company", [jsondata.company]]);
    $crisp.push(["on", "message:received", onagenmessage])
    }
 }
