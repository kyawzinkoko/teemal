new Vue({
   el:'#app',
   data:{
     
 },
   methods:{
    playSound(sound){
        var audio = new Audio(sound);
        audio.play();
       },
    }
  
});