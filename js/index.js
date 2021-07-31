window.onload = function(){

    /* 自动打印字 */
    let arr = ['做','一','个','响','应','式','布','局','<br/>','让','世','界','更','好','地','了','解','您'];
    let i = 0;
    let word = document.getElementsByClassName( 'word' )[0]
    //
    let cleartimer = setInterval(()=>{
    
        let arrlen = i++;
        if( arrlen <= arr.length-1 ){
            // console.log( arrlen )
            
            word.innerHTML += arr[arrlen];
    
        }else{
            // console.log( '已经超出了;' )
            clearInterval( cleartimer )
        }
        // console.log(arr[i++])
        // console.log( i )
    },1000);


    //吸顶盒;
    // document.onmousewheel = function( ev ){
    //     console.log( ev)
    // }
    let header = document.getElementsByTagName( 'header' )[0];
    // console.log( header )
    window.onscroll = function() {
        //为了保证兼容性，这里取两个值，哪个有值取哪一个
        //scrollTop就是触发滚轮事件时滚轮的高度
        let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        console.log("滚动距离" + scrollTop);
        if( scrollTop >=75 ){
            header.style.cssText = `position:fixed;top:0;animation:header 1s`
        }
        if( scrollTop <= 0 ){
            header.style.cssText = `position:relative;`
        }

    }

}
