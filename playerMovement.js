AFRAME.registerComponent("player-movement", {
  init: function () {
    this.walk();
  },
  walk: function () {
    window.addEventListener("keydown", (e) => {
      if (
        e.key === "ArrowUp") {
        var entity = document.querySelector("#sound2");
        entity.components.sound.playSound();
        var weapons=document.querySelector('camera_weapon')
        var get_pos=weapons.getAttribute('position')
        var pos=weapons.setAttribute('position',{
          x:get_pos.x,
          y:get_pos.y,
          z:get_pos.z-50
        })
        console.log('camera')
       }
        
    });
  },
});
