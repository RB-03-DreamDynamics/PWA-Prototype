<script setup lang="ts">
import { shallowRef, onMounted } from 'vue';

type ContentType = {
  content_type_id: number,
  plural_name: string,
  singular_name: string
};

type ContentItem = {
  content_item_id: string,
  source_item_id: string,
  content_type: ContentType,
  fillable: boolean,
  icon: any,
  has_tooltip_fields: boolean,
  is_summary_html: boolean,
  last_modified_date_time: string,
  title: string,
  summary: string
};

const contentItems = shallowRef<ContentItem[]>([]);

const fetchData = async () => {
  const apiUrl = 'https://msteams.zenya.work/api/portals/content_items?portal_id=183&include_icons=true&include_content_type=true&include_sub_type_field=true&sort=category,title&limit=100&fillable=true';
  const request = new Request(apiUrl);
  const apiUrlForm = `https://msteams.zenya.work/api/cases/reporter_forms/2220?include_design=true`;
  const requestForm = new Request(apiUrlForm);
  try {
    const cache = await caches.open("form-cache");
    const cachedResponse = await cache.match(request);
    const cachedResponseForm = await cache.match(requestForm);

    if (cachedResponse && cachedResponseForm) {
      // Response found in cache, use it
      const data = await cachedResponse.json();
      contentItems.value = data;
      console.log(data);
    } else {
      // No response found in cache, fetch it from network
      const response = await fetch(request);
      const clonedResponse = response.clone();
      const data = await response.json();

      const responseForm = await fetch(requestForm);
      const clonedResponseForm = responseForm.clone();

      // Store the fetched response in the cache for future use
      await cache.put(request, clonedResponse);
      await cache.put(requestForm, clonedResponseForm);
      console.log(cache)
      contentItems.value = data;
      console.log(data);
    }
  } catch (error) {
    console.error(error);
  }
};

onMounted(fetchData);
</script>


<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <div v-for="(item, index) in contentItems" :key="index" class="row mb-2">
          <div class="col-6" v-if="index % 2 === 0">
            <router-link :to="{ name: 'FormCreate', params: { form_id: '2220' }}" class="card" >
              <img src="@/assets/images/kat.jpg" class="card-img-top" alt="...">
              <div class="card-body">
                <h2 class="card-title">{{ contentItems[index].title }}</h2>
                <p class="card-text">{{ contentItems[index].summary }}</p>
              </div>
            </router-link>
          </div>
          <div class="col-6"  v-if="contentItems[index + 1]">
            <router-link :to="{ name: 'FormCreate', params: { form_id: '2220' }}" class="card">
              <div class="card-body">
                <h2 class="card-title">{{ contentItems[index + 1].title }}</h2>
                <p class="card-text">{{ contentItems[index + 1].summary }}</p>
              </div>  
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

