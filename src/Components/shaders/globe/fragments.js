export default /* glsl */ `precision mediump float;

uniform vec3 uColor;
uniform float uTime;
uniform sampler2D uTexture;


varying vec2 vUv;
varying vec3 vertexNormal;

void main() {

float intensity = 1.05 - dot(vertexNormal , vec3(0.0 , 0.0 , 1.0 ));
vec3 atmosphere = vec3(0.3, 0.6, 1.0) * pow(intensity , 1.5);

vec3 texture = texture2D(uTexture, vUv).rgb;
gl_FragColor = vec4(atmosphere + texture, 1.0); 
}`