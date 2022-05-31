#version 330 core
layout (triangles) in;
layout (line_strip, max_vertices = 20) out;

in VS_OUT {
    vec3 normal;
} gs_in[];

out vec3 fColor;

const float MAGNITUDE = 0.2;

uniform mat4 projection;

vec3 GetNormal()
{
    vec3 a = vec3(gl_in[0].gl_Position) - vec3(gl_in[1].gl_Position);
    vec3 b = vec3(gl_in[2].gl_Position) - vec3(gl_in[1].gl_Position);
    return normalize(cross(b, a));
}

void GenerateLine(int index)
{
    gl_Position = projection * gl_in[index].gl_Position;
    EmitVertex();
    gl_Position = projection * (gl_in[index].gl_Position + vec4(gs_in[index].normal, 0.0) * MAGNITUDE);
    EmitVertex();
    EndPrimitive();
}

void main()
{
    fColor = vec3(1.0, 1.0, 0.0);
    GenerateLine(0); // first vertex normal
    GenerateLine(1); // second vertex normal
    GenerateLine(2); // third vertex normal

    fColor = vec3(1.0, 0.0, 0.0);
    //vec4 pos = (gl_in[0].gl_Position + gl_in[1].gl_Position + gl_in[2].gl_Position) / 3;
    vec4 pos = gl_in[0].gl_Position;
    gl_Position = projection * pos;
    EmitVertex();
    gl_Position = projection * (pos + vec4(GetNormal(), 0.0) * MAGNITUDE);
    EmitVertex();
    EndPrimitive();
}