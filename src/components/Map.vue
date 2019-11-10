<template>
  <div id="map">
    <b-container>

        <b-row class="mt-3">
            <b-col sm="12" md="7" lg="8" class="mb-3">
                <b-input-group prepend=" Выбрать одного игрока: ">
                    <b-form-input id="filter" v-model="singelBoatId" @input="filterBoats" type="number" min="1" :max="boats.length"></b-form-input>
                </b-input-group>
            </b-col>
            <b-col sm="12" md="5" lg="4" class="mb-3">
                <b-input-group-append class="d-flex justify-content-end">
                    <b-button @click="singelBoatId=''" variant="secondary" class="mr-3">Все игроки</b-button>
                    <b-button  @click="showTracksTogler" variant="dark">{{ (showTracks) ? 'Скрыть' : 'Показать'}} треки</b-button>
                </b-input-group-append>
            </b-col>
        </b-row>
        

    


    <yandex-map 
      :controls="['fullscreenControl', 'typeSelector', 'zoomControl']"
      :coords="[59.94655135493689,29.97523181992358]"
      :zoom="10"
      style="width: 100%; height: 70vh;"
    >
    
      <ymap-marker 
        v-for="boat in neededBoats"
        :key="boat.id"
        marker-type="placemark"
        :markerId="boat.id"
        :coords="boat.cords[boat.cords.length - 1]"
        :balloon="{header: `Гонщик №${boat.id}`, body: `Место: ${boat.id}`, footer: `Круг: ${boat.racetrackCount}`}"
        :icon="{color: 'black', content: 'doticon', glyph: 'waterway'}"
    ></ymap-marker>

    <ymap-marker 
      v-for="boat in neededBoatsForTraks"
      :key="boat.id + 'TRACK'"
      :markerId="boat.id + 'TRACK'"
      marker-type="Polyline"
      :marker-stroke="{color: boat.color, width: 3}"
      :marker-fill="{color: boat.color, opacity: 0.4}"
      :coords="boat.cords"
      :balloon="{header: `Гонщик №${boat.id}`, body: `Место: ${boat.id}`, footer: `Круг: ${boat.racetrackCount}`}"
    ></ymap-marker>

    <ymap-marker 
      :markerId="-1"
      marker-type="Polyline"
      :marker-stroke="{color: '#ff0000', width: 1}"
      :marker-fill="{color: '#ff0000', opacity: 0.4}"
      :coords="reguts[0].cords"
      :balloon="{header: `Гоночный трек`, body: 'Длина: 23 км', footer: 'Среднее время круга: 41 м'}"
    ></ymap-marker>

    <ymap-marker 
     :markerId="-2"
      marker-type="circle"
      :coords="reguts[0].cords[0]"
      circle-radius="300"
      hint-content="Финиш"
      :marker-fill="{color: '#ffffff', opacity: 0.4}"
      :marker-stroke="{color: '#ff0000', width: 1}"
      :balloon="{header: 'header', body: 'body', footer: 'footer'}"
    ></ymap-marker>

    <ymap-marker 
      :markerId="-3"
      marker-type="placemark"
      :coords="reguts[0].cords[0]"
      :balloon="{header: 'header', body: 'body', footer: 'footer'}"
      :icon="{color: 'red', content: 'doticon', glyph: 'government'}"
    ></ymap-marker>
    
  </yandex-map>


  <div class="wrapper">
    <h4 class="mt-2">Прогресс гонки: </h4>
    <div 
      class="mt-3 mb-4"
      v-for="boat in neededBoats"
      :key="boat.id">
      <h6 
        class="mt-1"
        :style="{'display': 'inline-block'}"
        >Игрок №{{boat.id}}</h6>
      <div class="point ml-1" :style="{'background-color': boat.color}"></div>
      <b-progress  
        :value="boat.racetrackCount" 
        show-value
        class="mt-1"></b-progress>
    </div>
  </div>
    

    </b-container>
  </div>
</template>

<script>

import { yandexMap, ymapMarker } from 'vue-yandex-maps';
import {mapGetters, mapActions, mapMutations} from 'vuex';


export default {
  name: 'about',
  components: { yandexMap, ymapMarker },
  data() {
    return {
        showTracks: true,
        singelBoatId: '',
        filteredBoats: [],
    }
  },
  created() {
    setInterval(() => this.setBoatsRequest(), 6000); 

    // setTimeout(() => {
    //   this.pushToBoatAct();
    // }, 500);

    for (let index = 0; index < this.boats.length; index++) {
      this.boats[index].color = this.getRandomColor();
    }
    // this.pushToBoat();

    // СЮДА ЕЩЕ ДОБАВИТЬ ВЫВОД НУЖНОГО РЕГАДА (ДЛЯ ОТРИСОВКИ ГОНОЧНОГО ТРЕКА ТРЕКА)
 
    // setInterval(() => {
    //     this.getRegat().catch(() => {})

    //     let now = Date.now();

    //     for (let i = 0; i < this.reguts.length; i++) {

    //         let timeOfRegut = Date.parse(this.reguts[i].time);// YYYY-MM-DDTHH:mm

    //         if (timeOfRegut - now <= 1800000 && timeOfRegut - now >= 0) { // если регат пройдет через полчаса или меньше
                // начинаем отслеживать лодки
    //         }
    //     }
    // }, 6000);
    

  },

  beforeUpdate() {
    

    //Обновляем кол-во кругов
    for (let index = 0; index < this.boats.length; index++) {
      const currentBoat = this.boats[index];
      let lastCords = currentBoat.cords[currentBoat.cords.length - 1];
      let distance = this.getDistanceBetween(lastCords[0], lastCords[1], this.reguts[0].cords[0][0],  this.reguts[0].cords[0][1]);

      if (distance < 300 && currentBoat.cords.length > 5) {
        this.countBoatRace(currentBoat.id);
        this.updateRaceCords(currentBoat.id, currentBoat.cords);
      } 
    }

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

    getDistanceBetween(lat1, lon1, lat2, lon2){  // generally used geo measurement function
        let R = 6378.137; // Radius of earth in KM
        let dLat = lat2 * Math.PI / 180 - lat1 * Math.PI / 180;
        let dLon = lon2 * Math.PI / 180 - lon1 * Math.PI / 180;
        let a = Math.sin(dLat/2) * Math.sin(dLat/2) +
        Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
        Math.sin(dLon/2) * Math.sin(dLon/2);
        let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
        let d = R * c;
        return d * 1000; // meters
    },

    ...mapActions([
          'setBoatsRequest',
          'getRegat',
          // 'pushToBoatAct'
      ]),
    
    ...mapMutations([
        'countBoatRace',
        'updateRaceCords',
    ]),

  },
  
}

</script>

<style scoped>
    .control-panel {
        margin-bottom: 1em;
    }
    .point {
      width: 1em;
      height: 1em;
      display: inline-block;
      border-radius: 50%;
    }
    .wrapper {
      margin: 3em 0;
    }
</style>

