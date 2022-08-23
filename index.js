alert("i run");
document.body.innerHTML="";
document.head.innerHTML="";
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
