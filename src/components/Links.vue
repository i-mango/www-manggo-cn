<script setup>
import configure from '@/assets/conf/configure.json'
import { useToast } from 'vue-toastification'
import { IconPark } from '@icon-park/vue-next/es/all'

const toast = useToast()
const skipTo = (link) => {
  if (link.disable) {
    toast.info(link.status, {
      closeOnClick: true,
      icon: true
    })
  } else {
    window.open(link.url, '_blank')
  }
}
</script>

<template>
  <div id="links">
    <a
      v-for="link in configure.links"
      :key="link.id"
      :href="link.url"
      class="link"
      @click.prevent="skipTo(link)"
    >
      <div class="link-detail">
        <IconPark class="icon" :type="link.icon" theme="filled" />
        <h2 class="link-name">{{ link.name }}</h2>
        <p class="link-description">{{ link.description }}</p>
      </div>
    </a>
  </div>
</template>

<style scoped>
#links {
  width: 80%;
  margin: auto;
  border-top: 2px solid var(--color-border);
  display: flex;
  flex-wrap: wrap;
  align-content: stretch;
  align-items: stretch;
  justify-content: center;
  overflow: hidden;
  padding: 1.2rem 0;
  transition: border-top-color 0.3s ease;
}

.link {
  display: flex;
  flex-basis: calc(25% - 4rem);
  position: relative;
  overflow: hidden;
  margin: 1.5rem;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  transition: transform 0.3s, box-shadow 0.3s;
  min-width: 25%;
}
.link:hover {
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.3);
  transform: scale(1.05);
}
.link-detail {
  text-align: center;
}
.icon {
  margin-bottom: .5rem;
  font-size: 2rem;
  display: inline-block;
  color: #B19FFF;
}

.link-name {
  margin: 0.25rem 0;
  border-bottom: none;
  color: var(--color-text);
  font-weight: 700;
  font-size: 1.25rem;
  padding-bottom: 0.3rem;
  line-height: 1.25;
  cursor: pointer;
}

.link-description {
  display: block;
  color: var(--color-text);
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0;
  margin-inline-end: 0;
}
</style>
