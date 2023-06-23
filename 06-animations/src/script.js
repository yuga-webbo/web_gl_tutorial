import * as THREE from 'three'

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

// Object
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

// Sizes
const sizes = {
    width: 800,
    height: 600
}

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
scene.add(camera)

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
//Clock
const clock = new THREE.Clock();


// Animation
const tick=()=>{
    
    const elapsedTime=clock.getElapsedTime();

    //Update Objects
    // mesh.position.x+=0.01;
    // mesh.position.y+=0.01;


    // mesh.position.y=Math.sin(elapsedTime);
    // mesh.position.x=Math.cos(elapsedTime);

    camera.position.y=Math.sin(elapsedTime);
    camera.position.x=Math.cos(elapsedTime);
    camera.lookAt(mesh.position);

    //one revolution per seconds
    // mesh.rotation.y = elapsedTime * Math.PI * 2;


    //Renderer
    renderer.render(scene, camera);
    window.requestAnimationFrame(tick);
}
tick();
