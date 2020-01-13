$(function() {

  /*global variables*/
  var scene, camera, renderer;
  var controls, pivot;
  var stats, namm;
  var spotLight, hemi;
  var SCREEN_WIDTH, SCREEN_HEIGHT;
  var mouse, raycaster, projector;

  var objects = [];
  var THREEx = THREEx || {};
  THREEx.GeometryUtils = THREEx.GeometryUtils || {};

  function init() {
    $(".popup").hide();
    $("#close").click(function() {
      $(".popup").hide();
    });


    /*creates empty scene object and renderer*/
    scene = new THREE.Scene();
    pivot = new THREE.Group();
    camera = new THREE.PerspectiveCamera(30, window.innerWidth / window.innerHeight, .1, 300);
    renderer = new THREE.WebGLRenderer({
      antialias: false,
      alpha: true
    });
    //transparent bg of html
    renderer.setClearColor(0x000000, 0);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMap.enabled = false;
    renderer.shadowMapSoft = false;

    controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.noPan = "true";

    controls.minDistance = 40;
    controls.maxDistance = 40;

    controls.minPolarAngle = 1.6; // radians
    controls.maxPolarAngle = 1.6; // radians
    controls.addEventListener('change', render);

    camera.position.x = 0;
    camera.position.y = 0;
    camera.position.z = 40;
    camera.lookAt(scene.position);

    var light = new THREE.AmbientLight(0xffffff, 1.5);
    light.position.set(0, 0, 0).normalize();
    scene.add(light);



    var loader = new THREE.ObjectLoader();
    loader.load("character/allnew1.json", function(obj) {

      obj.position.x = 0;
      obj.position.y = 0;
      obj.position.z = 0;
      scene.add(obj);
      var box = new THREE.Box3().setFromObject(obj);
      box.center(obj.position);
      obj.position.multiplyScalar(-1);

      pivot.add(obj);
      scene.add(pivot);


    });




    document.addEventListener('mousedown', onDocumentMouseDown, false);
    document.addEventListener('touchstart', onDocumentTouchStart, false);


    $("#webGL-container").append(renderer.domElement);
    $("#webGL-container").append(div2);
  }

  function onDocumentTouchStart(event) {

    event.preventDefault();

    event.clientX = event.touches[0].clientX;
    event.clientY = event.touches[0].clientY;
    onDocumentMouseDown(event);

  }


  function onDocumentMouseDown(event) {

    event.preventDefault();

    var mousex = ((event.clientX - renderer.domElement.offsetLeft) / renderer.domElement.width) * 2 - 1;
    var mousey = -((event.clientY - renderer.domElement.offsetTop) / renderer.domElement.height) * 2 + 1;
    raycaster = new THREE.Raycaster();
    mouse = new THREE.Vector3(mousex, mousey, 2.5);
    raycaster.setFromCamera(mouse, camera);

    var intersects = raycaster.intersectObjects(scene.children, true);
    console.log(intersects);

    if (intersects.length > 0) {

      namm = intersects[0].object.name;




      switch (namm) {
        case "roots":
          var w = window.open('', '', 'width=100,height=100')
          w.document.write('You clicked roots');
          w.focus()
          setTimeout(function() {
            w.close();
          }, 3000)
          break;
        case "civil services":
          var w = window.open('', '', 'width=100,height=100')
          w.document.write('You clicked civil services');
          w.focus()
          setTimeout(function() {
            w.close();
          }, 3000)
          break;
        case "sports":
          location.href = 'http://localhost/Liberate_Beta/threeee/PAGES/second_page/Category/cat1.html'
          break;
        case "tourism":
          var w = window.open('', '', 'width=100,height=100')
          w.document.write('You clicked tourism');
          w.focus()
          setTimeout(function() {
            w.close();
          }, 3000)
          break;
        case "offbeat":
          var w = window.open('', '', 'width=100,height=100')
          w.document.write('You clicked offbeat');
          w.focus()
          setTimeout(function() {
            w.close();
          }, 3000)
          break;
        case "commerse":
          var w = window.open('', '', 'width=100,height=100')
          w.document.write('You clicked commerce');
          w.focus()
          setTimeout(function() {
            w.close();
          }, 3000)
          break;
        case "science":
          location.href = 'http://localhost/Liberate_Beta_latest/threeee/PAGES/Second_page_science/Category/cat2.html'
          break;
        case "arts":
          var w = window.open('', '', 'width=100,height=100')
          w.document.write('You clicked arts');
          w.focus()
          setTimeout(function() {
            w.close();
          }, 3000)
          break;
      }

    }

  }

  function render() {
    pivot.rotation.y -= 0.002;
    // scene.rotation.y += 0.002;
  }

  function animate() {
    requestAnimationFrame(animate);
    render();

    renderer.render(scene, camera);
  }

  init();
  animate();
  var div2 = document.createElement('div');
  div2.className = "dragbox";
  div2.setAttribute("id", "text");
  document.getElementById("container").appendChild(div2);
  document.getElementById("text").innerHTML = "Drag To Rotate Frames";

  //refresh page auto adjust three.js section
  window.addEventListener('resize', function() {

    var width = window.innerWidth;
    var height = window.innerHeight;
    renderer.setSize(width, height);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();

  });

});
