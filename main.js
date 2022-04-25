// Block 1
let canvas = document.getElementById("thecanvas")
  let imgData;
  let num ;
  let ctx = canvas.getContext('2d'),
      count = 10,
      cx = canvas.width,
      cy = canvas.height;
      ctx.clearRect(0, 0, cx, cy);
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.closePath();
      ctx.fill();
  while(count) {
      let x = Math.random() * canvas.width ;
      let y = Math.random() * canvas.height ;
      ctx.fillRect(x, y, 4,4);
      count--;
  }

// BLock 2
butt.onclick = function() {
  let val = document.getElementById('input_numb').value;
  let canvas = document.getElementById("thecanvas")
  let ctx = canvas.getContext('2d'),
      count = val,
      cx = canvas.width,
      cy = canvas.height;
      ctx.clearRect(0, 0, cx, cy);
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.closePath();
      ctx.fill();
  while(count) {
      let x = Math.random() * canvas.width ;
      let y = Math.random() * canvas.height ;
      ctx.fillRect(x, y, 4,4);
      count--;
  }
};
// Block 3
butt_size.onclick = function(){
  let val = document.getElementById('input_width').value;
  let val_2 = document.getElementById('input_height').value;
  canvas.width = val;
  canvas.height = val_2;
  cx = canvas.width,
  cy = canvas.height;
}

// Block 4
Clusterize.onclick = function() {
  for(let j = 0 ; j < cx + 50; j += 50){
    for(let h = 0; h < cy + 50; h += 50){
      imgData = ctx.getImageData(j,h,50,50);
      let countt=0;
      for (let i=0;i<imgData.data.length;i+=4){
            if(imgData.data[i+3]==0){
              countt++;
            }
      }
      num = Math.ceil((2500 - countt)/25)
      if(num > 1){
        ctx.clearRect(j,h,50,50);
        ctx.fillText(num, j+10,h+10,50,50);
      }
    }
  }
};

function readMore(){
  let dots = document.getElementById("dots")
  let more = document.getElementById("more")
  let btn = document.getElementById("btn")

  if(dots.style.display == "none"){
    dots.style.display = 'inline';
    btn.innerHTML = "Подробнее";
    more.style.display = 'none';
  } else {
    dots.style.display = 'none';
    btn.innerHTML = "Скрыть";
    more.style.display = 'inline';
  }
}
