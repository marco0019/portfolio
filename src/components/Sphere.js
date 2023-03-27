import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

function SphereProva() {
    const containerRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;

        // Crea la scena, la camera e il renderer
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(container.clientWidth, container.clientHeight);
        container.appendChild(renderer.domElement);

        // Crea la sfera
        const geometry = new THREE.SphereGeometry(5, 32, 32);
        const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
        const sphere = new THREE.Mesh(geometry, material);
        scene.add(sphere);

        // Aggiorna la posizione della camera
        camera.position.z = 10;

        // Anima la scena
        function animate() {
            requestAnimationFrame(animate);
            renderer.render(scene, camera);
        }

        animate();

        // Pulisci la scena quando il componente viene smontato
    }, []);

    return <div style={{display: 'block', width: '100%', height: '50vh'}}><div ref={containerRef}/></div>;
}

export default SphereProva;