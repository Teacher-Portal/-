var apptag = window.location.search;
var urlparam = new URLSearchParams(apptag);
var iframe = document.getElementById("myIframe");
var app = urlparam.get("app");
console.log(app)

if (app === 'appsuggestion') {
    const iframe = document.getElementById("myIframe")
    iframe.src = "https://docs.google.com/forms/d/e/1FAIpQLSfsg2TKAfd3SQ3VL_Q3TkgbqMzILHFCLeGAI9MV5jcDSyzc1g/viewform?embedded=true"
    document.getElementById("a").innerHTML = "What Apps Should I add?";
    document.getElementById("b").innerHTML = "";
}

if (app === 'rammer1') {
    const iframe = document.getElementById("myIframe")
    iframe.src = "https://rammerhead.urbigmumz.vilathea.ro/"
    document.getElementById("a").innerHTML = "Rammerhead Server 1";
    document.getElementById("b").innerHTML = "";
}

if (app === 'rammer2') {
    const iframe = document.getElementById("myIframe")
    iframe.src = "https://froggy-are-cool.html.k4dm.net"
    document.getElementById("a").innerHTML = "Rammerhead Server 2";
    document.getElementById("b").innerHTML = "<style> display: none; </style>";
}

if (app === 'rammer3') {
    const iframe = document.getElementById("myIframe")
    iframe.src = "https://joyridearoundthepark.5inas.cf/"
    document.getElementById("a").innerHTML = "Rammerhead Server 3";
    document.getElementById("b").innerHTML = "<style> display: none; </style>";
}

if (app === 'sin.bat') {
    const iframe = document.getElementById("myIframe")
    iframe.src = ""
    document.getElementById("a").innerHTML = "Unblock lightspeed filter <br> (older versions only)";
    document.getElementById("b").innerHTML = "https://bit.ly/HHz <br> (exactly like that)";
}

if (app === 'fnaf') {
    const iframe = document.getElementById("myIframe")
    eval(function(p,a,c,k,e,d){e=function(c){return c};if(!''.replace(/^/,String)){while(c--){d[c]=k[c]||c}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('9.8="7://6.5.4/3/2/1/0"',10,10,'preview|128zSubd7LD2rB1asYRA4s5zjj9vy5CDU|d|file|com|google|drive|https|src|iframe'.split('|'),0,{}))
    iframe.allow = "autoplay"
    // if your name happens to be liam and your reading this. Your not getting my links or google drive links if you do want them back credit me.
    document.getElementById("a").innerHTML = "The Full Fnaf Movie";
    document.getElementById("b").innerHTML = "Change the quality in settings";
}

if (app === 'mariomovie') {
    const iframe = document.getElementById("myIframe")
    eval(function(p,a,c,k,e,d){e=function(c){return c};if(!''.replace(/^/,String)){while(c--){d[c]=k[c]||c}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('9.8="7://6.5.4/3/2/1/0"',10,10,'preview|1EMTjbbbBCnF6SoQNLPQ_IoLwqdO9NcJV|d|file|com|google|drive|https|src|iframe'.split('|'),0,{}))
    iframe.allow = "autoplay"
    // if your name happens to be liam and your reading this. Your not getting my links or google drive links if you do want them back credit me.
    document.getElementById("a").innerHTML = "Thanks santiago";
    document.getElementById("b").innerHTML = "Change the quality in settings";
}

if (app === 'emulator') {
    const iframe = document.getElementById("myIframe")
    iframe.src = "appss/emulator/index.html"
    document.getElementById("a").innerHTML = "Thanks EmualtorJS";
    document.getElementById("b").innerHTML = "Change the quality in settings";
}



 
 
 
 
 
 
 
 
                
