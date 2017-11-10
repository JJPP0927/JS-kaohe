// 轮播点
{

    let st = document.querySelectorAll(".lbdd");
    let xd = document.querySelectorAll(".banner-img");

    st.forEach(function (ele, index) {
        ele.onclick = function () {
            for (let i = 0; i < st.length; i++) {
                st[i].classList.remove("actives");
                xd[i].classList.remove("kkk");
            }
            ele.classList.add("actives");
            xd[index].classList.add("kkk")
            num = index;
        }
    })

    let num = 0;
    let x = setInterval(fn, 1000)

    function fn() {
        num++;
        if (num === xd.length) {
            num = 0;
        }
        for (let i = 0; i < st.length; i++) {
            st[i].classList.remove("actives");
            xd[i].classList.remove("kkk");
        }
        st[num].classList.add("actives");
        xd[num].classList.add("kkk")

    }

// clearInterval()  清楚某个时间函数
    let rs = document.querySelector("#banner");
    console.log(rs);
    rs.onmouseover = function () {
        clearInterval(x);
    }
    rs.onmouseout = function () {
        x = setInterval(fn, 1000);
    }


}

//直播
{

}


// 上面特效

let xx = document.body.scrollTop === 0 ? document.documentElement : document.body;
{

    //出来上面的

        let ss = document.querySelector(".smkj")
        window.onscroll = function () {
            let jc = document.documentElement.scrollTop

//        console.log(jc)
            if (jc > 660) {
                ss.style.top = 0;
            } else {
                ss.style.top = "-60px";
            }
        }

}


//出来左侧
{

    let xm = document.querySelector(".xmkj")

    window.addEventListener("scroll", function () {
        let bar = document.documentElement.scrollTop
//        console.log(obj.scrollTop)

        if (bar > 500) {
            xm.style.cssText = "width:50px;height:250px"
        } else {
            xm.style.cssText = "width:0;height:0"


        }
    })

}



//    左侧按钮颜色变    回顶部
{

    let zj = document.querySelectorAll(".nr")
//    console.log(zj)
    let wz = document.querySelectorAll(".xmkjwz")


    let dc = document.querySelector(".fanhui")
//    console.log(dc)
    window.addEventListener("scroll", function () {
//         ym =document.documentElement.scrollTop;
        let ym = xx.scrollTop;
//        console.log(jc)
        if (ym>300) {
            dc.style.opacity = "1";
        }
        else {
            dc.style.opacity = 0;
        }

        dc.onclick = function () {
            animate(xx, {scrollTop: 0}, 1000);
//            alert(1)
//            console.log(1)
        }


        for (let i = 0; i < zj.length; i++) {
            if (ym >= zj[i].offsetTop - 10) {
                for (let j = 0; j < wz.length; j++) {
                    wz[j].classList.remove('active');
                }
                wz[i].classList.add('active');
            }
        }


    })

    //第一个参数操作的对象
//第二个参数传的对象，属性值得集合形式，用花括号包起来,属性 ： 冒号值
//第三个接收的参数是时间，默认是500毫秒
//第四个对应的就是一个函数，动画效果，比如匀速
//第五个是一个回调函数，

}





//    效果 左侧按钮点击
{

    let zj = document.querySelectorAll(".nr")
//    console.log(zj)
    let wz = document.querySelectorAll(".xmkjwz")


//    console.log(wz)
    let ym = xx.scrollTop;
    wz.forEach(function (ele, index) {

        ele.onclick = function () {
            let ot = zj[index].offsetTop
            animate(xx, {scrollTop: ot -10}, 1000);
        }
    })
    //保存楼层的offsetTop
}