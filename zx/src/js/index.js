// banner
let arr=[1,2,3,4,5];
arr.sort((first,second)=>first-second);

var ban = document.getElementsByClassName("ban_con")[0],
    banBtn = document.getElementsByTagName("button"),
    banTabc = document.getElementsByClassName("ban_tab")[0],
    banJ = 0;
banTab = banTabc.children;
// console.log(banTab);

for (i = 0; i < banBtn.length; i++) {
    banBtn[i].onclick = function () {
        if (this.innerHTML == "→") {
            // banJ++;
            // if (banJ > 2) {
            //     banJ = 0;
            // }
            banF(1);
        }
        else if (this.innerHTML == "←") {
            // banJ--;
            // if (banJ < 0) {
            //     banJ = 2;
            // }
            banF(-1);
        }
        // ban.style.marginLeft = -100 * banJ + "%";
        // for (var j = 0; j < banTab.length; j++) {
        //     banTab[j].className = "";
        // }
        // banTab[banJ].className = "tab_ac";
    }
}
for (var i = 0; i < banTab.length; i++) {
    banTab[i].onclick = function () {
        // banJ = parseInt(this.getAttribute("dy"));
        // ban.style.marginLeft = -100 * banJ + "%";
        // for (var j = 0; j < banTab.length; j++) {
        //     banTab[j].className = "";
        // }
        // banTab[banJ].className = "tab_ac";
        banF(undefined,this);
    }
}
function banF(x, banBTN) {
    if (x) {
        banJ += x;
        if (banJ > 2) {
            banJ = 0;
        }
        if (banJ < 0) {
            banJ = 2;
        }
    }else{
        banJ = parseInt(banBTN.getAttribute("dy"));
    }
    for (var j = 0; j < banTab.length; j++) {
        banTab[j].className = "";
    }
    banTab[banJ].className = "tab_ac";
    ban.style.marginLeft = -100 * banJ + "%";
}

// 定时器
banGO=setInterval(
    function(){
        banJ ++;
        if (banJ > 2) {
            banJ = 0;
        }
        for (var j = 0; j < banTab.length; j++) {
            banTab[j].className = "";
        }
        banTab[banJ].className = "tab_ac";
        ban.style.marginLeft = -100 * banJ + "%";
    },3000
);
ban.onmouseover=function(){
    clearInterval(banGO);
};
banBtn[0].onmouseover=function(){
    clearInterval(banGO);
};
banBtn[1].onmouseover=function(){
    clearInterval(banGO);
};
ban.onmouseout=function(){
    banGO=setInterval(
    function(){
        banJ ++;
        if (banJ > 2) {
            banJ = 0;
        }
        for (var j = 0; j < banTab.length; j++) {
            banTab[j].className = "";
        }
        banTab[banJ].className = "tab_ac";
        ban.style.marginLeft = -100 * banJ + "%";
    },3000);
};


// 地图
	//百度地图API功能
	function loadJScript() {
		var script = document.createElement("script");
		script.type = "text/javascript";
		script.src = "http://api.map.baidu.com/api?v=2.0&ak=35WeM2RvCs7nwAUzG1m0I30e9b6BEII3&callback=init";
		document.body.appendChild(script);
	}
	function init() {
		var map = new BMap.Map("allmap");            // 创建Map实例
		var point = new BMap.Point(116.404, 39.915); // 创建点坐标
		map.centerAndZoom(point,15);                 
		map.enableScrollWheelZoom();                 //启用滚轮放大缩小
	}  
	window.onload = loadJScript;  //异步加载地图