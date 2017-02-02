var camera, scene, renderer;
      var light;
      var controls;

      init();
      animate();



camera.id = 'scene1';

      function init() {

         renderer = new THREE.WebGLRenderer();
         renderer.setSize(350, 500);
         renderer.domElement
         renderer.setClearColor(0x7D7C7C, 1);

         document.body.appendChild(renderer.domElement);

         camera = new THREE.PerspectiveCamera(35, 300/550, 1.385,  118.162);
         camera.position.x = 3.354;
         camera.position.y = -3.354;
         camera.position.z = 4.615;
                
         camera.up = new THREE.Vector3(0, 0, 1);
         var target = new THREE.Vector3(0.000, 0.000, 0.000);
         camera.lookAt(target);
          

         controls = new THREE.TrackballControls(camera);
         controls.addEventListener( 'change', render);

         scene = new THREE.Scene();

         light = new THREE.PointLight(0x999999);
         light.position.set(2.769, -3.692, 5.538);
         scene.add(light);
         light = new THREE.PointLight(0x4C4C4C);
         light.position.set(-3.692, -3.692, 2.769);
         scene.add(light);
         light = new THREE.PointLight(0x4C4C4C);
         light.position.set(0.000, 3.692, 3.692);
         scene.add(light);


         create_geometry_0(scene);
         create_geometry_1(scene);

         window.addEventListener('resize', onWindowResize, false);
      }

      function onWindowResize() {
         camera.setSize(300,500);
         
         controls.handleResize();
         render();
      }

      function animate()
      {
         requestAnimationFrame(animate);
         renderer.render(scene, camera);
         controls.update();
      }

      function render()
      {
         renderer.render(scene, camera);
      }

      
    