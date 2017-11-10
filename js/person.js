// 技能条
let canvas1=document.querySelector("#canvas1");
let canvas2=document.querySelector("#canvas2");
let canvas3=document.querySelector("#canvas3");
let cobj1=canvas1.getContext("2d");
let cobj2=canvas2.getContext("2d");
let cobj3=canvas3.getContext("2d");
let box=document.querySelector(".box");
let flag=true;
function circle(canvas,max,color) {
    let cobj=canvas.getContext("2d");
    cobj.save();
    cobj.translate(100,100);
    cobj.lineWidth=20;
    cobj.strokeStyle=color;
    cobj.lineCap="round";
    cobj.textAlign="center";
    cobj.textBaseline="middle";
    cobj.font="30px 微软雅黑";
    let num=0;
    function progress() {
        num++;
        let angle=num*Math.PI/50;
        cobj.clearRect(-100,-100,200,200);
        cobj.save();
        cobj.rotate(-Math.PI/2);
        cobj.beginPath();
        cobj.shadowBlur=15;

        cobj.arc(0,0,70,0,angle);
        cobj.stroke();
        cobj.restore();
        cobj.fillText(num+"%",0,0);
        if(num<max){
            requestAnimationFrame(progress);
        }else{
            cobj.restore();
        }
    }
    progress();
}
// $("#main").fullpage({
//     afterLoad:function(anchorLink,index){
//         if(index===3){
//             $(".head2 h2").addClass("animated bounceInUp");
//             $(".head2 h3").addClass("animated bounceInDown");
//
//         }
//     }
// });

$("#main").fullpage({
	// sectionsColor: ['white','#3A3F43', '#C2CDA8', '#333',],
	 // anchors: ['p0','p1', 'p2', 'p3', 'p4'],
  //  menu:"#menu",
	afterLoad:function(anchorLink,index){
		if(index===2){
			$(".head h2").addClass("animated bounceInUp");
			$(".head h3").addClass("animated bounceInDown");
            $(".myself h1").addClass("animated zoomIn");
            $(".myself p").addClass("animated lightSpeedIn");
            $(".pic").addClass("animated flipInY")
		}
        if(index===3){
          $(".head2 h2").addClass("animated bounceInUp");
          $(".head2 h3").addClass("animated bounceInDown")
          circle(canvas1,80,"red");
          circle(canvas2,70,"blue");
          circle(canvas3,88,"yellow");
          progress();
        }else if (index!==3){
            circle();
        }
        if(index===4){
          $(".head3 h2").addClass("animated slideInLeft");
          $(".head3 h3").addClass("animated slideInRight")
        }
        if(index===5){
          $(".edu-head h2").addClass("animated bounceInLeft");
          $(".edu-head h3").addClass("animated bounceInRight") ;
          $(".name").addClass("animated flipInX");
          $(".email").addClass("animated flipInX");
          $(".message").addClass("animated flipInX")
        }
    }
});
//楼层跳转
 $(".aa").click(function(){
    $("#main").fullpage.moveTo(2,0)

 });
 $(".bb").click(function(){
    $("#main").fullpage.moveTo(3,0)

 });
 $(".cc").click(function(){
    $("#main").fullpage.moveTo(4,0)

 });
 $(".dd").click(function(){
    $("#main").fullpage.moveTo(5,0)

 });







