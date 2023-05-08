<script lang="ts">

import { defineComponent, ref, onMounted } from 'vue';
import axios from 'axios';

export default defineComponent({
  name: 'FormsListComponent',
  setup() {
    const contentItems = ref([]);

    const fetchData = async () => {
      try {
        const response = await axios.get('https://msteams.zenya.work/api/portals/content_items?portal_id=183&include_icons=true&include_content_type=true&include_sub_type_field=true&sort=category,title&limit=100&fillable=true');
        contentItems.value = response.data;
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    onMounted(() => {
      fetchData();
    });

    return {
      contentItems,
    };
  },
});


</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <div v-for="(item, index) in contentItems" :key="index" class="row mb-2">
          <div class="col-6" v-if="index % 2 === 0">
            <router-link :to="{ name: 'FormCreate', params: { form_id: contentItems[index].source_item_id }}" >
              <h2 class="card-title">{{ contentItems[index].title }}</h2>
              <p class="card-text">{{ contentItems[index].summary }}</p>
            </router-link>
          </div>
          <div class="col-6"  v-if="contentItems[index + 1]">
            <router-link :to="{ name: 'FormCreate', params: { form_id: contentItems[index + 1].source_item_id }}" >
              <h2 class="card-title">{{ contentItems[index + 1].title }}</h2>
              <p class="card-text">{{ contentItems[index + 1].summary }}</p>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

