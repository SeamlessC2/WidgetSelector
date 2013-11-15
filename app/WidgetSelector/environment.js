var DEBUG_LOCAL = true;
var LOGGER_ENABLED = false;
var CONSOLE_ENABLED = true;

//GLOBAL VARIABLES
var LOCAL_8443_URL = "https://localhost:8443/";
var LOCAL_8080_URL = "http://localhost:8080/";
var SHOW_SYSTEM_WIDGETS = true;
var WIDGET_FILTER = ["MITRE.CIV","Google Maps","HTML Viewer"]; //[]   filters the widget list and only shows these

//OWF SETUP
var owf_running = OWF.Util.isRunningInOWF(); //https://github.com/ozoneplatform/owf/wiki/OWF-7-Developer-Creating-a-Widget                    
//The location is assumed to be at /<context>/js/eventing/rpc_relay.uncompressed.html if it is not set
OWF.relayFile = '../owf/js/eventing/rpc_relay.uncompressed.html';

//LOGGING
if(LOGGER_ENABLED){
    var logger = OWF.Log.getDefaultLogger(); //popup window
    var appender = logger.getEffectiveAppenders()[0];
    // Enable logging 
    appender.setThreshold(log4javascript.Level.DEBUG);
    OWF.Log.setEnabled(LOG_ENABLED);
}

//Logger used through app
function log(str,obj){  
    if(CONSOLE_ENABLED){
        if(typeof(console) !== 'undefined'){
            if(typeof(obj) !== 'undefined'){
                console.log(str,obj);
            }else{
                console.log(str);
            }
        }
    }
    if(LOGGER_ENABLED){
        logger.debug(str);
    }
}
function error(str,obj){  
    if(CONSOLE_ENABLED){
        if(typeof(console) !== 'undefined'){
            if(typeof(obj) !== 'undefined'){
                console.log(str,obj);
            }else{
                console.log(str);
            }
        }
    }
    if(LOGGER_ENABLED){
        logger.error(str);
    }
    Ext.MessageBox.alert(str);
    //throw(str);
}