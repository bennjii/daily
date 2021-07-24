import { Canvas, MeshProps, useFrame, extend, useThree } from '@react-three/fiber'
import * as THREE from 'three'
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { Vector } from './vector'
import ReactDOM from 'react-dom'

import { EffectComposer, Bloom, DepthOfField, Noise, Vignette } from '@react-three/postprocessing'

const LORENZ_SIGMA = 10;
const LORENZ_RHO = 28;
const LORENZ_BETA = 8/3;
const LORENZ_DELTA = 0.005;

const Sphere: React.FC<MeshProps> = ({ info, callback }) => {
	const [ state, setState ] = useState(info);
	const mesh = useRef<THREE.Mesh>(null!);

	useFrame(() => {
		const oldLocation = state.loc;
		const newLocation = state.loc.rk4(LORENZ_DELTA, nextPoint);

		setState({ loc: newLocation, path: [ ...state.path, newLocation ]});
	});

	useEffect(() => {
		callback(state);
	}, [state])

	return (
		<mesh
			position={[state.loc.x, state.loc.y, state.loc.z]}
			ref={mesh}	
		>

			{/* <sphereGeometry args={[.05, 3]} />
			<meshStandardMaterial color={'#fff'} /> */}
		</mesh>
	)
}

const Scene = () => {
	const [ travler, setTraveler ] = useState({
		loc: new Vector(rand(.1), rand(.1), rand(.1)),
		path: []
	});

	const points = useMemo(() => [new THREE.Vector3(-10, 0, 0), new THREE.Vector3(0, 10, 0), new THREE.Vector3(10, 0, 0)], [])
	const onUpdate = useCallback(self => self.setFromPoints(points), [points])

	const onTravelerUpdate = useCallback(self => {
		self.setFromPoints(travler.path)
	}, [travler]);

    return (
        <Canvas camera={{ fov: 75, position: [-5.545549852989702, -4.191564816278375, 37.18096126351373], zoom: 0.5 }} >
			<Sphere info={travler} callback={setTraveler} key={Math.random() * 100} /> 	

			<>
			{
				//@ts-expect-error
				<line position={[0, -2.5, -10]}>
					<bufferGeometry attach="geometry" onUpdate={onTravelerUpdate} />
					<lineBasicMaterial attach="material" color={'#9c88ff'} linewidth={10} linecap={'round'} linejoin={'round'} />
				</line>
			}
			</>

			<EffectComposer>
				<Bloom luminanceThreshold={0} luminanceSmoothing={0.9} height={20} />
				<Noise opacity={0.02} />
				<Vignette eskil={false} offset={0.1} darkness={1.3} />

				
			</EffectComposer>
        </Canvas>
    )
}

function Dolly() {
	// This one makes the camera pitch up and down across the y axis focusing on the center
	useFrame(({ clock, camera }) => {
		camera.lookAt(0, 0, 0)
		camera.position.y = 50 + Math.sin(clock.getElapsedTime()) * 30
	})
	return null
}

var lorenzSystem = function (pos, sigma, rho, beta) {
	// Calculate the delta x, y and z using the lorenz equations
	var x = sigma * (pos.y - pos.x),
		y = pos.x * (rho - pos.z) - pos.y,
		z = pos.x * pos.y - (beta * pos.z);

	// Return a new vector co-ordinate
	return new Vector(x, y, z);
};

var nextPoint = function (x) {
	return lorenzSystem(x, LORENZ_SIGMA, LORENZ_RHO, LORENZ_BETA);
};

function rand(n) {
	return Math.floor(Math.random() * n) + 1;
}

export default Scene;