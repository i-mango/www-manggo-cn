<script setup>
import configure from "@/assets/conf/configure.json"
</script>

<template>
  <footer class="footer-wrapper">
    <div class="footer">
        <div>{{ configure.copyright }}</div>
        <div>备案号：
            <a target="_blank" href="https://beian.miit.gov.cn/" >{{configure.filingNumber}}</a>
        </div>
      <div v-show="configure.gonganFilingNumber">
        <a target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=50011802010624" style="display:inline-block;text-decoration:none;height:20px;line-height:20px;"><img src="@/assets/gongan.png" style="float:left;"/><p style="float:left;height:20px;line-height:20px;margin: 0px 0px 0px 5px; color:#939393;">{{ configure.gonganFilingNumber }}</p></a>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer-wrapper {
    border-top: 1px solid var(--color-border);
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-evenly;
    padding: 2rem 2rem;
    text-align: center;
}
.footer ,.footer a {
  color:#939393;
}
</style>