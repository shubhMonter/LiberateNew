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
  CSS3DObject,
  CSS3DRenderer
} from 'three-css3drenderer';
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
const $ = window.$;
class Classroom extends Component {
  /*constructor() {

  }*/
  componentDidMount() {
    var camera, renderer, object, controls, scene;
    var isMouseDown = true;
    var mouseover;
    var mouseout;
    var mpi = Math.PI / 180;
    var circleRadius = 2700;
    var startAngle = 0;
    var centerX = 0;
    var centerZ = 0;
    var startRadians = startAngle + mpi;
    var totalSpheres = 1;
    var incrementAngle = 360 / totalSpheres;
    var incrementRadians = incrementAngle * mpi;
    var Element = function(id, dat, w, h, position, rotation) {
      var html = [
        '<div class="wrapper">',
        '<iframe class="temp_iframe" id="' + id + '" src="' + dat + '" width="' + w + '" height="' + h + '">',
        '</div>'
      ].join('\n');
      var div = document.createElement('div');
      $(div).html(html);
      div.style.position = 'relative';
      object = new CSS3DObject(div);
      object.position.x = position.x;
      object.position.y = position.y;
      object.position.z = position.z;
      object.rotation.x = rotation.x;
      object.rotation.y = rotation.y;
      object.rotation.z = rotation.z;
      return object;
    }

    function init() {
      scene = new THREE.Scene();
      var container = document.getElementById('container');
      $('#container').css({
        "width": "100%",
        "margin-top": "0px",
        "margin-left": "5%"
      });
      renderer = new CSS3DRenderer();
      renderer.setSize(window.innerWidth, window.innerHeight);
      container.appendChild(renderer.domElement);
      camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 1, 10);
      camera.position.set(-100, 60, 4500);
       camera.updateMatrix(); // make sure camera's local matrix is updated
        camera.updateMatrixWorld(); // make sure camera's world matrix is updated
        camera.matrixWorldInverse.getInverse(camera.matrixWorld);
      var group = new THREE.Group();
      var str = {
        "0": "/reghome",
      };

      var allKeys = Object.keys(str);
      for (var i = 0; i < totalSpheres; i++) {
        var xp = centerX + Math.sin(startRadians) * circleRadius;
        var zp = centerZ + Math.cos(startRadians) * circleRadius;
        group.add(new Element(allKeys[i], str[i], 800, 1000, new THREE.Vector3(xp, 0, zp), new THREE.Vector3(0, i * incrementAngle * (Math.PI / 180.0), 0)));
        startRadians += incrementRadians;
      }

      scene.add(group);
      controls = new CameraControls(camera, renderer.domElement);
      controls.noPan = true;

      controls.minDistance = 4501.51;
      controls.maxDistance = 4501.51;

      controls.minPolarAngle = 1.6; // radians
      controls.maxPolarAngle = 1.6; // radians



      controls.center = new THREE.Vector3(scene.position.x, scene.position.y);

      window.addEventListener('mouseout', onmouseout);
      window.addEventListener('mouseover', mouseover);

    }

    function render() {

      // scene.rotation.y += 0.002;
    }


    function animate() {
      requestAnimationFrame(animate);
      controls.update();

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
      div id = "container" > < /div>

      <
      /
      div >
    )
  }
}
export default Classroom;
