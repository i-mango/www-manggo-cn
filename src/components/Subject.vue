<script setup>
import configure from '@/assets/conf/configure.json';
</script>

<template>
<div id="subject">
    <img class="avatar" src="@/assets/avatar.jpg" alt="">
    <div class="title">
        <div class="main-title"> {{ configure.mainTitle }} </div>
        <div class="subtitle"> {{ configure.subtitle }} </div>
    </div>
</div>
</template>

<style scoped>
#subject {
    display: flex;
    width: 80%;
    margin: auto;
    align-items: center;
    justify-content: space-evenly;
    text-align: left;
    padding: 2rem;
}
.avatar {
    max-height: 280px;
    max-width: 100%;
    border-radius: 50%;
    //border: 10px solid var(--color-border);

}
.title {
    min-width: 300px;
}

.main-title {
    font-size: 2rem;
    background-image:linear-gradient(-225deg,#AC32E4 0%, #7918F2 48%, #4801FF 100%); /* 渐变色背景 */
    -webkit-background-clip: text; /* 将背景限制为文字区域 */
    -webkit-text-fill-color: transparent; /* 文字透明 */
}

.subtitle {

}

.main-title, .subtitle {
    margin: 1.8rem 0;
}
</style>
