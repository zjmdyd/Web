<template>
    <div class="test1">测试1</div>
    <div class="test2">测试2</div>
    <div class="block1 mb10">
        <img class="img1" src="../assets/logo.png">
    </div>
    <hr />
    <i>haha</i><br />
    <em>gegeg</em>
    <div class="block2 mb10">
        <img class="img2" src="../assets/logo.png">
    </div>
    <div class="block3 mb10">
        <img class="img3" src="../assets/logo.png">
        子元素X
    </div>
    <div class="block4 mb10">
        <img class="img4" src="../assets/logo.png">
        <span class="a">子元素Y</span>
    </div>
</template>
<script setup>
</script>

<style>
.test1 {
    font-size: 20px;
    /* line-height: 0; */
    border: 1px solid #ccc;
    background-color: aqua;
}

.test2 {
    /* font-size: 0; */
    line-height: 20px;
    border: 1px solid #ccc;
    background-color: red;
}

.block1 {
    background: #eee;
}

.img1 {
    background-color: red;
}

/* 解决图片下方的空隙下边4种方法都可以  */
.block2 {
    background: greenyellow;
    /*方法1*/  
    line-height: 0;      
    /*方法2*/  
    /* font-size: 0; */     
}

.img2 {
    /*方法3*/
    /* display: block; */        
    /*方法4*/   
    /* vertical-align: bottom; */   
    
    background-color: red;
}

/* 
采用Flex布局中的align-items属性，使子元素和父元素在垂直轴上居中对齐
 */
.block3 {
    font-size: 100px;
    line-height: 250px;
    background: blueviolet;
    display: flex;
    align-items: center;
}

.img3 {
    background-color: red;
    vertical-align: middle;
}

/*
设置父元素font-size:0, 因此此时content area高度是0，
各种上面提到的线（基线、顶线、主线、底线等）都在高度为0的这条线上，绝对中心线和中线重合
*/
.block4 {
    font-size: 0;
    line-height: 250px;
    background: #fe0;
}

.img4 {
    background-color: red;
    vertical-align: middle;
}

.a {
    font-size: 100px;
    vertical-align: middle;
}

.mb10 {
    margin-bottom:  16px;
}
</style>