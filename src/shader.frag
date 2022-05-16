#version 330 core
out vec4 FragColor;

in vec2 TexCoords;

uniform sampler2D texture1;
uniform bool draw_outlining = false;

void main()
{    
    if (draw_outlining) {
		FragColor = vec4(0.04, 0.28, 0.26, 1.0);
    }
    else {
		FragColor = texture(texture1, TexCoords);
    }
	//FragColor = texture(texture1, TexCoords);
}