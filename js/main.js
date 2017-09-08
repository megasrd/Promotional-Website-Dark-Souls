            window.onload = function() {
                setTimeout("init()", 1000)
            }

            var clock = new THREE.Clock();
            var scene = new THREE.Scene();
			var container;
			var renderer =  new THREE.WebGLRenderer({ antialias: true });
            var camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 0.1, 2000 );
            
            var demon, artorias, ornstein, prayingman;
			var bonfire;
			var floor;
            var trees;
            var bones;
            var statue, skullbones;
            
            var camCounter = 0;
            var arrayFrom;
            var arrayTo;
            var testCount;
            var currentCamPos = [0,0.1,10];
            var currentLookAt;
            var width = 1;
            var loadingbar = document.getElementsByClassName('loadingBarProgress')[0];

            VolumetricFire.texturePath = 'textures/';

            var fireWidth  = 2;
            var fireHeight = 4;
            var fireDepth  = 2;
            var sliceSpacing = 0.5;

            var fire = new VolumetricFire(
              fireWidth,
              fireHeight,
              fireDepth,
              sliceSpacing,
              camera
            );

            var bgMusic = document.getElementsByClassName('bg-music')[0];
                bgMusic.volume = 0.2;

            scene.add( fire.mesh );
            fire.mesh.position.set( 0, fireHeight / 3, 0 );
            fire.mesh.scale.set(0.5,0.5,0.5);
            document.getElementsByClassName('ui-char')[0].addEventListener("click", function(){

                if ($('.char-panel').css("display") === "none") {
                    camCounter = 2;
                    tweenValues();
                    $('.char-panel').show();
                    $('.sshots-panel').hide();
                    $('info-panel').hide();
                    $('.main_dksouls-logo').show();
                }else{
                    $('.char-panel').hide();
                    $('.sshots-panel').hide();
                    $('info-panel').hide();
                    camCounter = 0;
                    tweenValues();
                }
            });

            document.getElementsByClassName('ui-sshots')[0].addEventListener("click", function(){

                if ($('.sshots-panel').css("display") === "none") {
                    $('.sshots-panel').show();
                    $('.char-panel').hide();
                    $('info-panel').hide();
                    $('.main_dksouls-logo').show();
                }else{
                    $('.sshots-panel').hide();
                    $('.char-panel').hide();
                    $('info-panel').hide();
                }
            });

            document.getElementsByClassName('ui-info')[0].addEventListener("click", function(){
                
                
                    if ($('.info-panel').css("display") === "none") {
                    $('.info-panel').show();
                    $('.sshots-panel').hide();
                    $('.char-panel').hide();
                    $('.main_dksouls-logo').hide();
                }else{
                    $('.info-panel').hide();
                    $('.sshots-panel').hide();
                    $('.char-panel').hide();
                    $('.main_dksouls-logo').show();
                }
            });  
            
            function loadingScreen() {
     
                if (width < 100) {
                    
                    width += 1;
                    loadingbar.style.width = width + '%';
                    console.log(width);
                    
                }else if (width == 100) {
                    document.getElementsByClassName('loadingScreen')[0].style.display = 'none';
                    width = 101;
                }
                
            }
               
            function camPosition () {
                        
               switch (camCounter) {
                    case 0:
                        arrayFrom = [0,0.1,10];
                        arrayTo = [0,1,5];
                        currentLookAt = [arrayTo[0], arrayTo[1], arrayTo[2]];
                        break;
                    case 1:
//                        arrayFrom = [5,1,2];
//                        arrayTo = [-2.5,3,0];
//                        currentLookAt = [arrayTo[0], arrayTo[1], arrayTo[2]];
                        break;
                        
                    case 2:
                        arrayFrom = [5,1,2];
                        arrayTo = [8.5,3.5,2];
                        currentLookAt = [arrayTo[0], arrayTo[1], arrayTo[2]];
                        break;
                        
                    case 3:
                        arrayFrom = [5,1,2];
                        arrayTo = [15,4,2];
                        currentLookAt = [arrayTo[0], arrayTo[1], arrayTo[2]];
                        break;
                       
                    case 4:
                        arrayFrom = [5,1,2];
                        arrayTo = [20,4,2];
                        currentLookAt = [arrayTo[0], arrayTo[1], arrayTo[2]];
                        break;
                 }
                
            }
            


            function tweenValues () {
                camPosition();
                characterBioData();
                tweenVector(arrayFrom,arrayTo);
                currentCamPos = arrayTo;
            }
            
            function characterBioData() {
                
                //Capra Demon
                
                if (camCounter == 2) {
                    
                $('.char-leftnav').hide();
                $('.char-rightnav').show();
                    
                var demon_charDescrip = "The Capra Demon is the boss of the lower section of the Undead Burg. You can get to him either by going left down to the end of the main street (past the Undead Thieves and Poison Dogs), or by going through the shortcut in the waterway in the Firelink Shrine after you unlock it.";
            
            
                var demon_strategy = "Upon entering, the boss and his dogs will immediately come after you. Circle around to the right (dodge the boss's first big swing) and run up the stairs on the left side of the arena. The dogs should follow you: kill them here. If they don't follow, try to lure them up, but be careful, because the boss can also climb the stairs. Killing the dogs quickly is critical to winning this fight; it is entirely too easy for them to stunlock you until the Capra Demon lands a killing blow. If he follows you up the stairs before the dogs are dead, feel free to drop down and get a bit of distance from him and make another attempt.";
                    
                var demon_locationData = "Undead Burg";
                
                var demon_healthData = "1,176";
                    
                var demon_soulsData = "6,000";
                
                $('.char-name')[0].innerHTML = "Capra Demon";    
                    
                $('.char-descrip')[0].innerHTML = demon_charDescrip;
                
                $('.char-strgy')[0].innerHTML = demon_strategy;
                    
                $('.card-data_location')[0].innerHTML = demon_locationData;
                    
                $('.card-data_health')[0].innerHTML = demon_healthData;
                    
                $('.card-data_souls')[0].innerHTML = demon_soulsData;
                    
                }
                
                //Artorias
                
                if (camCounter == 3) {
                    
                $('.char-leftnav').show();    
                $('.char-rightnav').show();
                    
                var artorias_charDescrip = " Sir Knight Artorias was one of the four Knights of Gwyn, the commanding knights of Lord Gwyn's army. Artorias had an unbendable will of steel, which both helped, and fed, his hatred for servants of the Dark, particularly the Darkwraiths of Kaathe.Lord Gwyn bequeathed him with a custom-made ring, the Wolf Ring, to assist in his already unmatched ability to wield a greatsword.";
                
                var artorias_strategy = "When he uses his Somersault slam attack you will want to roll to the right as the camera tilts upward while locked onto him. You want to do this three times and then get in 1 or 2 attacks (based on your weapon) after the third attack lands. Avoid attacking after his Steadfast Leap. Instead use that opportunity to heal or get some distance from him.";
                    
                var artorias_locationData = "Oolacile Township";
                
                var artorias_healthData = "3,750";
                    
                var artorias_soulsData = "50,000";
                
                $('.char-name')[0].innerHTML = "Artorias the Abysswalker";    
                    
                $('.char-descrip')[0].innerHTML = artorias_charDescrip;
                
                $('.char-strgy')[0].innerHTML = artorias_strategy;
                    
                $('.card-data_location')[0].innerHTML = artorias_locationData;
                    
                $('.card-data_health')[0].innerHTML = artorias_healthData;
                    
                $('.card-data_souls')[0].innerHTML = artorias_soulsData;
                    
                }
                //Ornstein
                
                if (camCounter == 4) {
                    
                $('.char-leftnav').show();  
                $('.char-rightnav').hide();
                
                var ornstein_charDescrip = "Quick and agile, Ornstein is opposite of his partner Smough attacking with leaps, thrusts, large arcing sweeps and shooting bolts of electricity from his spear. Upon defeat, he will be crushed and absorbed by Smough, who gains Ornstein's electric attacks which cause large amounts of damage. If Smough is defeated before Ornstein, his attacks gain even greater range, improved damage and a thrust, if a player gets caught in, will be impaled and shocked by Ornstein's imbued spear.";
                
                var ornstein_strategy = "When fighting Super Ornstein, make your way behind a broken pillar (one of them should be broken from the first part of the fight), while keeping him at a range. Stay behind the pillar and wait for him to spam his lightning attack. If he rushes at you, you did it wrong. If he spams his lightning attack, that means you did it successfully, which means you can simply target him, and use sorcery/a bow and easily kill him. You may need to move a bit to the side so your magic will shoot over the pillar, but make sure you don't get hit. Be wary that even if you get him in his lightning bolt attack, he can still stop the attack and resume his usual pattern of attacks, so be ready to pull out your shield when that time comes. ";
                    
                var ornstein_locationData = "Anor Londo";
                
                var ornstein_healthData = "1642/2982";
                    
                var ornstein_soulsData = "50,000";
                    
                
                $('.char-name')[0].innerHTML = "Dragonslayer Ornstein ";    
                    
                $('.char-descrip')[0].innerHTML = ornstein_charDescrip;
                
                $('.char-strgy')[0].innerHTML = ornstein_strategy;
                    
                $('.card-data_location')[0].innerHTML = ornstein_locationData;
                    
                $('.card-data_health')[0].innerHTML = ornstein_healthData;
                    
                $('.card-data_souls')[0].innerHTML = ornstein_soulsData;
                    
                }
            }
            
			function init() {
                         
                var navValue = 0;
                
                document.getElementsByClassName('char-rightnav')[0].addEventListener("click", function(event){
                        camCounter++;
                        tweenValues();
                },false);
                
                document.getElementsByClassName('char-leftnav')[0].addEventListener("click", function(event){
                        camCounter--;
                        tweenValues();
                },false);
                
                tweenValues();
                
                
				container = document.getElementById( 'container' );

				
				// loading manager
				var loadingManager = new THREE.LoadingManager( function() {
                    
					scene.add (bonfire);
					scene.add (floor);
                    scene.add (trees);
                    scene.add (bones);
                    scene.add (statue, skullbones);
                    scene.add (demon, artorias, ornstein, prayingman);
           
				} );
             
				// collada
				var loader = new THREE.ColladaLoader( loadingManager );
				loader.options.convertUpAxis = true;
                    
                loader.load("collada/statue/statue.dae", function ( collada ) {
					statue= collada.scene;
                    statue.position.set(-3,0,-4);
                    statue.rotation.z = 0.5;
                    statue.traverse(function (child) {
                       child.castShadow = true;
                        child.receiveShadow = true;
                   })  
				});
                
                loader.load("collada/prayingman/prayingman.dae", function ( collada ) {
					prayingman = collada.scene;
                    prayingman.position.set(0,0,-2);
                    prayingman.rotation.z = 3;
                    prayingman.scale.set(0.9,0.9,0.9);
                    prayingman.traverse(function (child) {
                       child.castShadow = true;
                        child.receiveShadow = true;
                   })  
				});
                
                loader.load("collada/skullbones/skullbones.dae", function ( collada ) {
					skullbones = collada.scene;
                    skullbones.position.set(1.9,0,1);
                    skullbones.rotation.z = 1.9;
                    skullbones.traverse(function (child) {
                       child.castShadow = true;
                        child.receiveShadow = true;
                   })  
				});
                
                loader.load("collada/demon/demon.dae", function ( collada ) {                                 
					demon = collada.scene; // Load Demon
                    demon.position.set(10,0,-2);
                    demon.rotation.z = 3.2;
                    demon.scale.set (0.7,0.7,0.7);
				});
                
                
                 loader.load("collada/artorias/artorias.dae", function ( collada ) {                                 
					artorias = collada.scene; // Load Demon
                    artorias.position.set(16,0,-2);
                    artorias.rotation.z = 3.2;
                    artorias.scale.set (0.9,0.9,0.9);
				} );
                
                loader.load("collada/ornstein/ornstein.dae", function ( collada ) {                                 
					ornstein = collada.scene; // Load Demon
                    ornstein.position.set(22,0,-2);
                    ornstein.rotation.z = 3.2;
                    ornstein.scale.set (1.2,1.2,1.2);
				} );
                
				loader.load("collada/bonfire/bonfire.dae", function ( collada ) {
					bonfire = collada.scene; // Load Bonfire
				} );

				loader.load("collada/floor/floor.dae", function ( collada ) {
					floor = collada.scene; // Load Floor
                    floor.scale.set(1,1,1);
                    floor.traverse(function (child) {
                       child.castShadow = true;
                        child.receiveShadow = true;
                       
                   })
				} );
            
                loader.load("collada/bones/bones.dae", function (collada) {
                   bones = collada.scene; 
                   bones.traverse(function (child) {
                       child.castShadow = true;
                       
                   })
                });
                
                loader.load("collada/tree/tree.dae", function (collada) {
                   trees = collada.scene;
                   trees.rotation.z = 1;
                   trees.traverse(function (child) {
                       child.castShadow = true;
                       child.receiveShadow = true;
                       
                   })
                });
                
        
				var ambientLight = new THREE.AmbientLight( 0xcccccc, 0.2 );
				scene.add( ambientLight );
                
                var pointLight = new THREE.PointLight( 0xfaa406, 1.5, 10 );
                pointLight.position.set( 0, 1, 0 );
                pointLight.castShadow = true;
                pointLight.shadowMapWidth = 1024;
                pointLight.shadowMapHeight = 1024;
                scene.add(pointLight);
                
                scene.background = new THREE.Color( 0xcccccc );
				scene.fog = new THREE.FogExp2( 0xcccccc, 0.1 );
                
                
				renderer.setPixelRatio( window.devicePixelRatio );
				renderer.setSize( window.innerWidth, window.innerHeight );
                renderer.shadowMap.enabled = true;
                renderer.shadowMap.type = THREE.PCFSoftShadowMap;
				container.appendChild( renderer.domElement );
				//
				//
				window.addEventListener( 'resize', onWindowResize, false );
			}
            
             function tweenVector(fromArray, toArray) {
                 
              var fromCoords = {x : currentCamPos[0], y : currentCamPos[1], z : currentCamPos[2]};
            let tween = new TWEEN.Tween(fromCoords)
                    
                .to ({x : toArray[0], y : toArray[1], z : toArray[2]}, 2000)
                .easing(TWEEN.Easing.Quadratic.Out)
                .onUpdate(function(){
                    
                        var x = document.getElementsByClassName("x")[0].innerHTML = fromCoords.x;
                        var y = document.getElementsByClassName("y")[0].innerHTML = fromCoords.y;
                        var z = document.getElementsByClassName("z")[0].innerHTML = fromCoords.z;
                        camera.position.set(fromCoords.x, fromCoords.y, fromCoords.z);
                    })
                    .start()
            }
            
            function tweenRotation(fromArray, toArray) {

                
            var fromCoords = {x : fromArray[0], y : fromArray[1], z : fromArray[2]};
            let tween = new TWEEN.Tween(fromCoords)
              
                .to ({x : toArray[0], y : toArray[1], z : toArray[2]}, 5000)
                .easing(TWEEN.Easing.Quadratic.Out)
                .onUpdate(function(){
                    
                        var x = document.getElementsByClassName("x")[0].innerHTML = fromCoords.x;
                        var y = document.getElementsByClassName("y")[0].innerHTML = fromCoords.y;
                        var z = document.getElementsByClassName("z")[0].innerHTML = fromCoords.z;
                        camera.position.set(fromCoords.x, fromCoords.y, fromCoords.z);
                    })
                    .start()
            }
                        
			
			function onWindowResize() {
				camera.aspect = window.innerWidth / window.innerHeight;
				camera.updateProjectionMatrix();
				renderer.setSize( window.innerWidth, window.innerHeight );
			}
            
			( function animate(time) {
                
                
                
                loadingScreen();    
				requestAnimationFrame(animate);
                
                TWEEN.update(time);
                
                if (camCounter === 0 ) {
                    
                    var elapsed = clock.getElapsedTime();
                    
                    camera.position.set(
                   Math.sin( elapsed * 0.1 ) * 5,
                   1,
                   Math.cos( elapsed * 0.1 ) * 6
                 );
                    
                    camera.lookAt(new THREE.Vector3(0,1,0));
                    
                    fire.update( elapsed );
                    
                }else{
                    camera.rotation.x = 0;
                    camera.rotation.y = 0;
                    camera.rotation.z = 0;
                }

                
				renderer.render( scene, camera );
                
                camPosition();
                
                document.getElementsByClassName('debug-camNumber')[0].innerHTML = camCounter;
			} ) ();