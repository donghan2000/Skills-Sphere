export default /* glsl */ `precision mediump float;

varying vec2 vUv;
varying vec3 vertexNormal;

uniform float uTime;

// #pragma glslify: snoise3 = require(glsl-noise/simplex/3d.glsl);

void main() {
vUv = uv; 
vertexNormal = normalize(normalMatrix * normal);
vec4 mvPosition = modelViewMatrix * vec4(position, 1.);
gl_Position = projectionMatrix * mvPosition;

}`