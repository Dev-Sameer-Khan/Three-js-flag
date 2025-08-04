varying vec2 vUv;
varying float vMovement;
uniform sampler2D uTexture;

void main() {

    vec4 image = texture2D(uTexture,vUv);
    vec3 black = vec3(0.0,0.0,0.0);

    vec3 final = mix(image.rgb,black,vMovement);

    

    gl_FragColor = vec4(final , 1.0);
}