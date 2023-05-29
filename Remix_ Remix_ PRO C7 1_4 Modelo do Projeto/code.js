var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["434d0e3e-4057-426b-9471-f9192a526a0b","ccda6ec3-3963-4277-9d34-80c1854b9b85","cc44e6d1-dc1f-408e-a42d-1f4501e4a668","886edb23-9d67-4f69-a125-82f32cf3e4c3","e7716ac6-c4c9-4bb2-88be-0163829bf5a6","edc76b0c-f4e3-46f8-a199-c45f3c4c8d4d"],"propsByKey":{"434d0e3e-4057-426b-9471-f9192a526a0b":{"name":"computer_tower_dark_1","sourceUrl":"assets/api/v1/animation-library/gamelab/uB_jekcwv3SXJGdbEMw8MuLiHT9Alpqi/category_school_objects/computer_tower_dark.png","frameSize":{"x":98,"y":128},"frameCount":1,"looping":true,"frameDelay":2,"version":"uB_jekcwv3SXJGdbEMw8MuLiHT9Alpqi","categories":["school_objects"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":98,"y":128},"rootRelativePath":"assets/api/v1/animation-library/gamelab/uB_jekcwv3SXJGdbEMw8MuLiHT9Alpqi/category_school_objects/computer_tower_dark.png"},"ccda6ec3-3963-4277-9d34-80c1854b9b85":{"name":"computer_tower_light_1","sourceUrl":"assets/api/v1/animation-library/gamelab/JggozwtsfWio_OxZ64teBY5kzFF2i4S./category_school_objects/computer_tower_light.png","frameSize":{"x":96,"y":135},"frameCount":1,"looping":true,"frameDelay":2,"version":"JggozwtsfWio_OxZ64teBY5kzFF2i4S.","categories":["school_objects"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":96,"y":135},"rootRelativePath":"assets/api/v1/animation-library/gamelab/JggozwtsfWio_OxZ64teBY5kzFF2i4S./category_school_objects/computer_tower_light.png"},"cc44e6d1-dc1f-408e-a42d-1f4501e4a668":{"name":"tablet_1","sourceUrl":"assets/api/v1/animation-library/gamelab/p_PHZ3rma1gqDRuYNDNclmizJAw_2iwG/category_school_objects/tablet.png","frameSize":{"x":84,"y":98},"frameCount":1,"looping":true,"frameDelay":2,"version":"p_PHZ3rma1gqDRuYNDNclmizJAw_2iwG","categories":["school_objects"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":84,"y":98},"rootRelativePath":"assets/api/v1/animation-library/gamelab/p_PHZ3rma1gqDRuYNDNclmizJAw_2iwG/category_school_objects/tablet.png"},"886edb23-9d67-4f69-a125-82f32cf3e4c3":{"name":"wide_screen_monitor_1","sourceUrl":"assets/api/v1/animation-library/gamelab/T_F4ljnj3lodhlv7OSQEIrnG6Cgim01g/category_school_objects/wide_screen_monitor.png","frameSize":{"x":163,"y":131},"frameCount":1,"looping":true,"frameDelay":2,"version":"T_F4ljnj3lodhlv7OSQEIrnG6Cgim01g","categories":["school_objects"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":163,"y":131},"rootRelativePath":"assets/api/v1/animation-library/gamelab/T_F4ljnj3lodhlv7OSQEIrnG6Cgim01g/category_school_objects/wide_screen_monitor.png"},"e7716ac6-c4c9-4bb2-88be-0163829bf5a6":{"name":"soccer_field_1","categories":["backgrounds"],"frameCount":1,"frameSize":{"x":400,"y":400},"looping":true,"frameDelay":2,"jsonLastModified":"2021-01-05 18:39:34 UTC","pngLastModified":"2021-01-05 18:39:08 UTC","version":"J6AoCEQiDKlKsdVff_tiZnDVueArBO2V","sourceUrl":"assets/api/v1/animation-library/gamelab/J6AoCEQiDKlKsdVff_tiZnDVueArBO2V/category_backgrounds/soccer_field.png","sourceSize":{"x":400,"y":400},"loadedFromSource":true,"saved":true,"rootRelativePath":"assets/api/v1/animation-library/gamelab/J6AoCEQiDKlKsdVff_tiZnDVueArBO2V/category_backgrounds/soccer_field.png"},"edc76b0c-f4e3-46f8-a199-c45f3c4c8d4d":{"name":"sports_scoccer_1","categories":["backgrounds"],"frameCount":1,"frameSize":{"x":400,"y":400},"looping":true,"frameDelay":2,"jsonLastModified":"2021-01-05 18:38:32 UTC","pngLastModified":"2021-01-05 18:39:59 UTC","version":"AYKgiaNjv0UtbPRP89eUDfF6ChW0HvBm","sourceUrl":"assets/api/v1/animation-library/gamelab/AYKgiaNjv0UtbPRP89eUDfF6ChW0HvBm/category_backgrounds/sports_scoccer.png","sourceSize":{"x":400,"y":400},"loadedFromSource":true,"saved":true,"rootRelativePath":"assets/api/v1/animation-library/gamelab/AYKgiaNjv0UtbPRP89eUDfF6ChW0HvBm/category_backgrounds/sports_scoccer.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var playerMallet;
var campor=createSprite(200,200,400,400);

var goal1=createSprite(200,18,100,20);
goal1.shapeColor=("yellow");

var goal2=createSprite(200,382,100,20);
goal2.shapeColor=("yellow");



var boundary1 = createSprite(200,0,400,10);
boundary1.shapeColor = "white";
var boundary2 = createSprite(200,400,400,10);
boundary2.shapeColor = "white";
var boundary3 = createSprite(0,200,10,400);
boundary3.shapeColor = "white";
var boundary4 = createSprite(400,200,10,400);
boundary4.shapeColor = "white";


campor.setAnimation("sports_scoccer_1")

var striker = createSprite(200,200,10,10);
striker.shapeColor = "yellow";

var playerMallet = createSprite(200,50,50,10);
playerMallet.shapeColor = "blue";

var computerMallet = createSprite(200,350,50,10);
computerMallet.shapeColor = "red";


var playerScore=1;
var compScore=1;

function draw() {
  //limpar a tela
  
  
  //exibir pontuação
  {textSize(18);
  fill("red");
  text(27,225);
  text(27,185);
  fill("blue");
  }
 
  
  // Pontuação
  
     if(striker.isTouching(goal1))
      { //aumente a pontuação do jogador
        compScore = compScore+0 ;
        //use show grid para identificar o valor de x e y para trazer o atacante para o centro
        striker.x=30;
        striker.y=30;
        striker.velocityX=2;
        striker.velocityY=2;
      }
      
      if(striker.isTouching(goal2))
      {
        playerScore =  + 1;
        //Redefina o atacante adicionando o valor central de x e y
        striker.x=1;
        striker.y=1;
        striker.velocityX=2;
        striker.velocityY=2;
      }
      
   
      if(20)//adicione a condição para verificar se a pontuação do jogador chegou a 5

      
       {fill("RED");
        textSize(18);
        //adicione o texto para fim de jogo
        text("VOCE GANHOU O JOGO PARABENS!!",50,220);}
      
 
 
  
  //faça o bastão do jogador se mover com as teclas de seta
  paddleMovement();

  
  
  //inteligência artificial para o bastão do computador
  //faça com que se mova com a posição y do atacante
  computerMallet.x = striker.x;

  
  //desenhe uma linha no centro
   for (var i = 0; i < 400; i=i+20) {
    line(i,200,i+10,200);
  }
  
  //crie bordas de limite
  //faça com que o atacante rebata nas bordas de cima e de baixo
  createEdgeSprites();
  
  striker.bounceOff(edges);
  striker.bounceOff(playerMallet);
  striker.bounceOff(computerMallet);
  playerMallet.bounceOff(edges);
  computerMallet.bounceOff(edges);

  
  //lance o atacante quando a tecla espaço for pressionada
  if (keyDown("space")) {
    serve();
  }
  
 
  drawSprites();
}
function serve() {
  striker.velocityX = 12;
  striker.velocityY = 6;
 
}

function paddleMovement()
{
  if(keyDown("a")){
    playerMallet.x = playerMallet.x-10;
    
  }
  
  if(keyDown("d")){
    playerMallet.x = playerMallet.x+10;
    
  }
  
  if(keyDown("s")){
   if(playerMallet.y>25)
   {
    playerMallet.y = playerMallet.y- 10;
   }
  }
  
  if(keyDown("w")){
    if(playerMallet.y<120)
   {
    playerMallet.y = playerMallet.y+10;
   }
  }
} 

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
