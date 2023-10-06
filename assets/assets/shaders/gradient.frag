{
  "sksl": "// This SkSL shader is autogenerated by spirv-cross.\n\nfloat4 flutter_FragCoord;\n\nuniform float iTime;\nuniform vec2 iSize;\nuniform vec3 upperLeftColor;\nuniform vec3 upperRightColor;\nuniform vec3 bottomLeftColor;\nuniform vec3 bottomRightColor;\nuniform float filmGrainIntensity;\n\nvec4 fragColor;\n\nvec2 FLT_flutter_local_FlutterFragCoord()\n{\n    return flutter_FragCoord.xy;\n}\n\nvec2 FLT_flutter_local_hash(inout vec2 p)\n{\n    p = vec2(dot(p, vec2(2127.10009765625, 81.1699981689453125)), dot(p, vec2(1269.5, 283.3699951171875)));\n    return fract(sin(p) * 43758.546875);\n}\n\nfloat FLT_flutter_local_noise(vec2 p)\n{\n    vec2 i = floor(p);\n    vec2 f = fract(p);\n    vec2 u = (f * f) * (vec2(3.0) - (f * 2.0));\n    vec2 param = i + vec2(0.0);\n    vec2 _97 = FLT_flutter_local_hash(param);\n    vec2 param_1 = i + vec2(1.0, 0.0);\n    vec2 _108 = FLT_flutter_local_hash(param_1);\n    vec2 param_2 = i + vec2(0.0, 1.0);\n    vec2 _124 = FLT_flutter_local_hash(param_2);\n    vec2 param_3 = i + vec2(1.0);\n    vec2 _135 = FLT_flutter_local_hash(param_3);\n    float n = mix(mix(dot(vec2(-1.0) + (_97 * 2.0), f - vec2(0.0)), dot(vec2(-1.0) + (_108 * 2.0), f - vec2(1.0, 0.0)), u.x), mix(dot(vec2(-1.0) + (_124 * 2.0), f - vec2(0.0, 1.0)), dot(vec2(-1.0) + (_135 * 2.0), f - vec2(1.0)), u.x), u.y);\n    return 0.5 + (0.5 * n);\n}\n\nmat2 FLT_flutter_local_Rot(float a)\n{\n    float s = sin(a);\n    float c = cos(a);\n    return mat2(vec2(c, -s), vec2(s, c));\n}\n\nfloat FLT_flutter_local_filmGrainNoise(vec2 uv)\n{\n    vec2 param = vec2(uv.x, uv.y);\n    vec2 _161 = FLT_flutter_local_hash(param);\n    return length(_161);\n}\n\nvoid FLT_main()\n{\n    vec2 uv_1 = FLT_flutter_local_FlutterFragCoord() / iSize;\n    float aspectRatio = iSize.x / iSize.y;\n    vec2 tuv = uv_1 - vec2(0.5);\n    vec2 param_1 = vec2(iTime * 0.100000001490116119384765625, tuv.x * tuv.y);\n    float degree = FLT_flutter_local_noise(param_1);\n    tuv.y *= (1.0 / aspectRatio);\n    float param_2 = radians(((degree - 0.5) * 720.0) + 180.0);\n    tuv *= FLT_flutter_local_Rot(param_2);\n    tuv.y *= aspectRatio;\n    float frequency = 5.0;\n    float amplitude = 30.0;\n    float speed = iTime * 2.0;\n    tuv.x += (sin((tuv.y * frequency) + speed) / amplitude);\n    tuv.y += (sin(((tuv.x * frequency) * 1.5) + speed) / (amplitude * 0.5));\n    float param_3 = -0.08726646006107330322265625;\n    vec3 layer1 = mix(upperRightColor, upperLeftColor, vec3(smoothstep(-0.300000011920928955078125, 0.20000000298023223876953125, (tuv * FLT_flutter_local_Rot(param_3)).x)));\n    float param_4 = -0.08726646006107330322265625;\n    vec3 layer2 = mix(bottomRightColor, bottomLeftColor, vec3(smoothstep(-0.300000011920928955078125, 0.20000000298023223876953125, (tuv * FLT_flutter_local_Rot(param_4)).x)));\n    vec3 color = mix(layer1, layer2, vec3(smoothstep(0.5, -0.300000011920928955078125, tuv.y)));\n    vec2 param_5 = uv_1;\n    color -= vec3(FLT_flutter_local_filmGrainNoise(param_5) * filmGrainIntensity);\n    fragColor = vec4(color, 1.0);\n}\n\nhalf4 main(float2 iFragCoord)\n{\n      flutter_FragCoord = float4(iFragCoord, 0, 0);\n      FLT_main();\n      return fragColor;\n}\n",
  "stage": 1,
  "target_platform": 2,
  "uniforms": [
    {
      "array_elements": 0,
      "bit_width": 32,
      "columns": 1,
      "location": 0,
      "name": "iTime",
      "rows": 1,
      "type": 10
    },
    {
      "array_elements": 0,
      "bit_width": 32,
      "columns": 1,
      "location": 1,
      "name": "iSize",
      "rows": 2,
      "type": 10
    },
    {
      "array_elements": 0,
      "bit_width": 32,
      "columns": 1,
      "location": 2,
      "name": "upperLeftColor",
      "rows": 3,
      "type": 10
    },
    {
      "array_elements": 0,
      "bit_width": 32,
      "columns": 1,
      "location": 3,
      "name": "upperRightColor",
      "rows": 3,
      "type": 10
    },
    {
      "array_elements": 0,
      "bit_width": 32,
      "columns": 1,
      "location": 4,
      "name": "bottomLeftColor",
      "rows": 3,
      "type": 10
    },
    {
      "array_elements": 0,
      "bit_width": 32,
      "columns": 1,
      "location": 5,
      "name": "bottomRightColor",
      "rows": 3,
      "type": 10
    },
    {
      "array_elements": 0,
      "bit_width": 32,
      "columns": 1,
      "location": 6,
      "name": "filmGrainIntensity",
      "rows": 1,
      "type": 10
    }
  ]
}