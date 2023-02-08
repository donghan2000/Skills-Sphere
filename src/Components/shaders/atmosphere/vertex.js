export default /* glsl */ `precision mediump float;

varying vec3 vertexNormal;

void main() {
vertexNormal = normalize(normalMatrix * normal);
vec4 mvPosition = modelViewMatrix * vec4(position, 1.);
gl_Position = projectionMatrix * mvPosition;

}`