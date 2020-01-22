import React, {
  Component
} from 'react';
import ReactDOM from 'react-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container
} from 'reactstrap';
import * as THREE from 'three';
import CameraControls from 'camera-controls';
import {
  OBJLoader2
} from 'three/examples/jsm/loaders/OBJLoader2';
import {
  MTLLoader
} from "three/examples/jsm/loaders/MTLLoader.js";

import {
  MtlObjBridge
} from "three/examples/jsm/loaders/obj2/bridge/MtlObjBridge.js";
CameraControls.install({
  THREE: THREE
});

class Home extends Component {
  /*constructor() {

  }*/
  componentDidMount() {
    /*global variables*/
    var scene, camera, renderer;
    var controls, pivot;
    var stats, namm;
    var spotLight, hemi;

    var mouse, raycaster, projector;

    var objects = [];
    var THREEx = THREEx || {};
    THREEx.GeometryUtils = THREEx.GeometryUtils || {};

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
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.shadowMap.enabled = false;
      renderer.shadowMapSoft = false;

      controls = new CameraControls(camera, renderer.domElement);
      controls.noPan = true;

      controls.minDistance = 40;
      controls.maxDistance = 40;

      controls.minPolarAngle = 1.6; // radians
      controls.maxPolarAngle = 1.6; // radians
      controls.addEventListener('change', render);

      camera.position.x = 0;
      camera.position.y = 0;
      camera.position.z = 40;
      camera.lookAt(scene.position);

      var light = new THREE.AmbientLight(0xffffff, 1);
      light.position.set(0, 0, 0).normalize();
      scene.add(light);



        /*  var loader = new OBJLoader2();
          loader.load("assets/home/character/newall.obj", function(obj) {
            console.log(obj);
            obj.position.x = 0;
            obj.position.y = 0;
            obj.position.z = 0;
            scene.add(obj);
            var box = new THREE.Box3().setFromObject(obj);
            box.getCenter(obj.position);
            obj.position.multiplyScalar(-1);

            pivot.add(obj);
            scene.add(pivot);


          });*/
          let modelName = 'career';
          let objLoader2 = new OBJLoader2();
					let callbackOnLoad = function ( object3d ) {
						scene.add( object3d );
						console.log( 'Loading complete: ' + modelName );
            var box = new THREE.Box3().setFromObject(object3d);
            box.getCenter(object3d.position);
            object3d.position.multiplyScalar(-1);
            pivot.add(object3d);
            scene.add(pivot);
						//scope._reportProgress( { detail: { text: '' } } );
					};

					let onLoadMtl = function ( mtlParseResult ) {
						objLoader2.setModelName( modelName );
						objLoader2.setLogging( true, true );
						objLoader2.addMaterials( MtlObjBridge.addMaterialsFromMtlLoader( mtlParseResult ), true );
						objLoader2.load( 'assets/home/character/all.obj', callbackOnLoad, null, null, null );
					};
					let mtlLoader = new MTLLoader();
					mtlLoader.load( 'assets/home/character/all.mtl', onLoadMtl );

      document.addEventListener('mousedown', onDocumentMouseDown, false);
      document.addEventListener('touchstart', onDocumentTouchStart, false);
      document.getElementById("webGL-container").appendChild(renderer.domElement);

      //$("#webGL-container").append(renderer.domElement);
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
            window.location.href = 'http://localhost/Liberate_Beta/threeee/PAGES/second_page/Category/cat1.html'
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
            window.location.href = 'http://localhost/Liberate_Beta_latest/threeee/PAGES/Second_page_science/Category/cat2.html'
            break;
          case "arts_Circle":
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


    //refresh page auto adjust three.js section
    window.addEventListener('resize', function() {

      var width = window.innerWidth;
      var height = window.innerHeight;
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

      < /
      div >
    )
  }
}
export default Home;
