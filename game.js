import * as THREE from 'three';
import {FBXLoader} from 'FBXLoader';
import {OrbitControls} from 'OrbitControls';


function moving(){
    window.addEventListener("keydown", (event) => {
    e = event.code;
    switch (event.code) {
        case "KeyW":
            mixer.clipAction(walk).play();
            boy.rotation.y = 7.8;
            break;
        case "KeyZ":
            mixer.clipAction(walk).stop();
            mixer.clipAction(jump).play();
            break;
        case "KeyD":
            mixer.clipAction(walk).play();
            mixer.clipAction(jump).stop();
            break;
        case "KeyA":
            mixer.clipAction(walk).play();
            mixer.clipAction(jump).stop();
            break;
        case "KeyS":
            mixer.clipAction(walk).play();
            mixer.clipAction(jump).stop();
            break;
    }
}, false);
}

moving()
