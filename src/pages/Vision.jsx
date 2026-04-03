// Vision.js
import React, { useRef, useEffect, useState } from 'react';
import './Vision.css';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

function VisionPage() {
  const mountRef = useRef(null);

  const [playerPos, setPlayerPos] = useState({ x: 0, y: 0, z: 0 });
  const [playerRot, setPlayerRot] = useState({ x: 0, y: 0, z: 0 });


  useEffect(() => {

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xe0e0e0);

    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    // Licht
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.6);
    directionalLight.position.set(10, 10, 10);
    scene.add(directionalLight);

    // Player
    const player = new THREE.Object3D();
    player.position.set(0, -10, 0);
    scene.add(player);

    const pitchObject = new THREE.Object3D();
    pitchObject.position.set(0, 1.5, 0); // Augenhöhe
    player.add(pitchObject);

    camera.position.set(0, 0, 0);
    pitchObject.add(camera);

    const collidables = [];
    let collisionEnabled = true;

    // GLTF Modell laden
    const loader = new GLTFLoader();
    loader.load('/img/ba1.glb', (gltf) => {
      const model = gltf.scene;
      model.rotation.x = Math.PI;
      model.position.set(-890, -50, -980);
      model.scale.x = -1;
      //scene.add(model);

      model.traverse((child) => {
        if (child.isMesh) {
          child.geometry.computeBoundingBox();
          collidables.push(child);
        }
      });

      // Positionierung
      scene.add(model);
    }, undefined, (error) => {
      console.error('Fehler beim Laden:', error);
    });

    // Bewegung
    const keys = { forward: false, backward: false, left: false, right: false };
    let yaw = 0;
    let pitch = 0;

    const speed = 2;
    const forwardSpeed = 0.2;
    const sideSpeed = 0.05;

    const handleKeyDown = (e) => {
      if (e.code === 'KeyW' || e.code === 'ArrowUp') keys.forward = true;
      if (e.code === 'KeyS' || e.code === 'ArrowDown') keys.backward = true;
      if (e.code === 'KeyA' || e.code === 'ArrowLeft') keys.left = true;
      if (e.code === 'KeyD' || e.code === 'ArrowRight') keys.right = true;
      if (e.code === 'KeyC') collisionEnabled = !collisionEnabled;
    };

    const handleKeyUp = (e) => {
      if (e.code === 'KeyW' || e.code === 'ArrowUp') keys.forward = false;
      if (e.code === 'KeyS' || e.code === 'ArrowDown') keys.backward = false;
      if (e.code === 'KeyA' || e.code === 'ArrowLeft') keys.left = false;
      if (e.code === 'KeyD' || e.code === 'ArrowRight') keys.right = false;
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('keyup', handleKeyUp);

    // Mausbewegung (Pointer Lock)
    let lastMouseX = null;
    let lastMouseY = null;

    const onMouseMove = (e) => {
      const deltaX = e.movementX || 0;
      const deltaY = e.movementY || 0;

      yaw -= deltaX * 0.005;
      pitch -= deltaY * 0.005;

      const pitchLimit = Math.PI / 2 - 0.1;
      pitch = Math.max(-pitchLimit, Math.min(pitchLimit, pitch));

      player.rotation.y = yaw;
      pitchObject.rotation.x = pitch;
    };

    renderer.domElement.addEventListener('click', () => {
      // Pointer Lock aktivieren
      renderer.domElement.requestPointerLock();

      // Fullscreen aktivieren
      if (renderer.domElement.requestFullscreen) {
        renderer.domElement.requestFullscreen();
      } else if (renderer.domElement.webkitRequestFullscreen) { /* Safari */
        renderer.domElement.webkitRequestFullscreen();
      } else if (renderer.domElement.msRequestFullscreen) { /* IE11 */
        renderer.domElement.msRequestFullscreen();
      }
    });

    const pointerLockChange = () => {
      if (document.pointerLockElement === renderer.domElement) {
        document.addEventListener('mousemove', onMouseMove, false);
      } else {
        document.removeEventListener('mousemove', onMouseMove, false);
      }
    };

    document.addEventListener('pointerlockchange', pointerLockChange);

    // Kollisionsprüfung
    const checkCollision = (position) => {
      if (!collisionEnabled) return false;
      const playerBox = new THREE.Box3().setFromCenterAndSize(
        position.clone().add(new THREE.Vector3(0, 1, 0)),
        new THREE.Vector3(1, 2, 1)
      );
      for (const obj of collidables) {
        const objectBox = obj.geometry.boundingBox.clone();
        objectBox.applyMatrix4(obj.matrixWorld);
        if (playerBox.intersectsBox(objectBox)) return true;
      }
      return false;
    };

    // Animationsloop
    const animate = () => {
      requestAnimationFrame(animate);

      const dir = new THREE.Vector3();
      if (keys.forward) dir.z -= forwardSpeed;
      if (keys.backward) dir.z += forwardSpeed;
      if (keys.left) dir.x -= sideSpeed;
      if (keys.right) dir.x += sideSpeed;

      if (dir.length() > 0) {
        dir.normalize().applyEuler(player.rotation);
        const nextPosition = player.position.clone().addScaledVector(dir, speed);
        if (!checkCollision(nextPosition)) player.position.copy(nextPosition);
      }

      setPlayerPos({
        x: player.position.x.toFixed(2),
        y: player.position.y.toFixed(2),
        z: player.position.z.toFixed(2),
      });
      
      setPlayerRot({
        x: pitchObject.rotation.x.toFixed(2),
        y: player.rotation.y.toFixed(2),
        z: 0,
      });

      renderer.render(scene, camera);
    };
    animate();

    // Resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('keyup', handleKeyUp);
      document.removeEventListener('pointerlockchange', pointerLockChange);
      window.removeEventListener('resize', handleResize);

      // Prüfen, ob mountRef noch existiert, bevor removeChild aufgerufen wird
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }

      renderer.dispose(); // Renderer aufräumen
    };
  }, []);

  return (
    <main>
      <div id="hud">
        <p><strong>Player Position:</strong> X: {playerPos.x}, Y: {playerPos.y}, Z: {playerPos.z}</p>
        <p><strong>Player Rotation:</strong> X: {playerRot.x}, Y: {playerRot.y}, Z: {playerRot.z}</p>
      </div>
      <div ref={mountRef} />
    </main>
  );
}

export default VisionPage;