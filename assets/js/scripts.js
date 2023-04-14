const {createApp} = Vue;

createApp({
  data(){
    return{
          images:[
      {
        src: 'assets/img/01.webp',
        alt: 'spiderman'
      },
      {
        src: 'assets/img/02.webp',
        alt: 'gatti'
      },
      {
        src: 'assets/img/03.webp',
        alt: 'fortnite'
      },
      {
        src: 'assets/img/04.webp',
        alt: 'il gatto con gli stivali'
      },
      {
        src: 'assets/img/05.webp',
        alt: 'avengers'
      },
    ],
    nextPrev: false,
    counter: 0,
    mouseHover: false,
    auto: null
    }
  },

  methods: {
    nextPrevFunction(){
      this.nextPrev === this.nextPrev ?  this.counter++ : this.counter--

      if(this.counter < 0){
        this.counter = this.images.length - 1
      }else if ( this.counter >= this.images.length ){
        this.counter = 0
      }
    },

    autoplayFunction(){
      
        this.auto = setInterval(() =>{
          this.counter++
          if ( this.counter >= this.images.length ){
            this.counter = 0
          }
        }, 3000) 
      
    },

    stopAutoplayFunction(){
      clearInterval(this.auto)
    }
   },

   mounted(){
    this.autoplayFunction()
   }

}).mount('#app')