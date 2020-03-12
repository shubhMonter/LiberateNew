import React, {
  Component
} from 'react';

import * as THREE from 'three';
import CameraControls from 'camera-controls';
import {
  OrbitControls
} from "three/examples/jsm/controls/OrbitControls.js";
//import {JSONLoader} from 'three/src/loaders/JSONLoader.js';
import {
  ObjectLoader
} from "three/src/loaders/ObjectLoader.js"
CameraControls.install({
  THREE: THREE
});

class Home extends Component {
  /*constructor() {

  }*/
  componentDidMount() {

    var scene, camera, renderer, namm;
    var controls, pivot;
    var isMouseDown = true;
    var mouse, raycaster;

    function init() {
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
      renderer.setSize(window.innerWidth*.90, window.innerHeight*.95);
      renderer.shadowMap.enabled = false;
      renderer.shadowMapSoft = false;

      controls = new OrbitControls(camera, renderer.domElement);
      controls.enablePan = false;
      controls.enableZoom = false;
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



      var loader = new ObjectLoader();
      loader.load("/home/character/allnew1.json", function(obj) {

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
      document.getElementById("webGL-container").appendChild(renderer.domElement);
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

            w.document.write('You clicked civil services');
            w.focus()
            setTimeout(function() {
              w.close();
            }, 3000)
            break;
          case "sports":
            window.location.href = '/corridor'
            break;
          case "tourism":

            w.document.write('You clicked tourism');
            w.focus()
            setTimeout(function() {
              w.close();
            }, 3000)
            break;
          case "offbeat":

            w.document.write('You clicked offbeat');
            w.focus()
            setTimeout(function() {
              w.close();
            }, 3000)
            break;
          case "commerse":

            w.document.write('You clicked commerce');
            w.focus()
            setTimeout(function() {
              w.close();
            }, 3000)
            break;
          case "science":
            window.location.href = '/corridor'
            break;
          case "arts_Circle":
            window.location.href = '/corridor'
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
      camera.updateProjectionMatrix();
    }
    init();
    animate();
    //refresh page auto adjust three.js section
    window.addEventListener('resize', function() {

      var width = window.innerWidth*.90;
      var height = window.innerHeight*.95;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();

    });
  }
  render() {
    return ( <
      div >

      <
      div id = "webGL-container" > < /div>

      <
      /
      div >
    )
  }
}
export default Home;
