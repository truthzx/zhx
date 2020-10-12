// 选项卡
var inn=document.getElementById("inn");
var lis=inn.firstElementChild.firstElementChild.children;
for(var i=0;i<lis.length;i++){
    lis[i].onclick=function(){
        for(var i=0;i<lis.length;i++){
            lis[i].className="";
        }
        this.className="active";
        var k=parseInt(this.getAttribute("dy"));
        var card=inn.children;
        for(var j=1;j<card.length;j++){
            card[j].className="card"
        }
        card[k+1].className="act";
    }
}