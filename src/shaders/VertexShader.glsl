varying vec2 vUv;
varying float vMovement;

uniform float uTime;

void main() {

    vec3 newPosition = position;

    float PI = 3.141;
    float movement = sin(uv.x * 2.0 * PI + uTime) * 0.5;

    newPosition.z -= movement;

    gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);

    vUv = uv;
    vMovement = movement;
}