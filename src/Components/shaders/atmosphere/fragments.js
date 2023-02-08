export default /* glsl */ `precision mediump float;

varying vec3 vertexNormal;

void main() {

float intensity = pow(0.6 - dot(vertexNormal, vec3( 0, 0, 1.0)), 2.0 );
gl_FragColor = vec4(0.34, 0.0 , 0.34 ,1.0) * intensity;
}`