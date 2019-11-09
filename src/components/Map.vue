<template>
  <div id="map">

    <button @click="showTracksTogler">Показать треки</button>
    <br>
    <label for="filter">Выбрать одного игрока:  </label>
    <input id="filter" v-model="singelBoatId" @input="filterBoats" type="number" min="1" :max="boats.length">
    <button @click="singelBoatId=''">Все игроки</button>


    <yandex-map 
      :coords="[59.94655135493689,29.97523181992358]"
      :zoom="10"
      style="width: 600px; height: 600px;"
    >
    
      <ymap-marker 
        v-for="boat in neededBoats"
        :key="boat.id"
        marker-type="placemark"
        :markerId="boat.id"
        :coords="boat.cords[boat.cords.length - 1]"
        :balloon="{header: `Гонщик №${boat.id}`, body: 'body', footer: 'footer'}"
        :icon="{color: 'black', content: 'doticon', glyph: 'waterway'}"
    ></ymap-marker>

    <ymap-marker 
      v-for="boat in neededBoatsForTraks"
      :key="boat.id + 5"
      :markerId="boat.id + 5"
      marker-type="Polyline"
      :marker-stroke="{color: getRandomColor(), width: 3}"
      :marker-fill="{color: getRandomColor(), opacity: 0.4}"
      :coords="boat.cords"
      :balloon="{header: `Гонщик №${boat.id}`, body: 'body', footer: 'footer'}"
    ></ymap-marker>

    <ymap-marker 
      :markerId="-1"
      marker-type="Polyline"
      :marker-stroke="{color: '#ff0000', width: 1}"
      :marker-fill="{color: '#ff0000', opacity: 0.4}"
      :coords="reguts[0].cords"
      :balloon="{header: `Гоночный трек`, body: 'body', footer: 'footer'}"
    ></ymap-marker>

    
    
  </yandex-map>
  </div>
</template>

<script>

import { yandexMap, ymapMarker } from 'vue-yandex-maps';
import {mapGetters, mapActions} from 'vuex';


export default {
  name: 'about',
  components: { yandexMap, ymapMarker },
  data() {
    return {
        showTracks: false,
        singelBoatId: '',
        filteredBoats: [],
    }
  },
  created() {
 
    // setInterval(() => {
    //     this.getRegat().catch(() => {})

    //     let now = Date.now();

    //     for (let i = 0; i < this.reguts.length; i++) {

    //         let timeOfRegut = Date.parse(this.reguts[i].time);// YYYY-MM-DDTHH:mm

    //         if (timeOfRegut - now <= 1800000 && timeOfRegut - now >= 0) { // если регат пройдет через полчаса или меньше
    //             setInterval(() => this.setBoatsRequest().catch(() => {}), 5000); // начинаем отслеживать лодки
    //         }
    //     }
    // }, 6000);

  },

  computed: {

      ...mapGetters([
          'boats',
          'reguts',
      ]),

      neededBoats() {
          return (this.singelBoatId == '') ? this.boats : this.filteredBoats;
      },

      neededBoatsForTraks() {
          return (this.showTracks) ? this.neededBoats : {};
      },
      
  },
  methods: {

    getRandomColor() {
      let letters = '0123456789ABCDEF';
      let color = '#';
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    },

    filterBoats() {
        this.filteredBoats = this.boats.filter(boat => boat.id == this.singelBoatId);
    },

    showTracksTogler() {
        this.showTracks = !this.showTracks;
    },

    ...mapActions([
          'setBoatsRequest',
          'getRegat',
      ])
  },
  
}

</script>