export const examples = [
	{ ex: "INPUTS {\n" +
			"\tx1 fl64 : (0.01, 1.0)\t;\n" +
			"\tx2 fl64 : (0.01, 1.0)\t;\n" +
			"\tx3 fl64 : (0.01, 1.0)\t;\n" +
			"\tx4 fl64 : (0.01, 1.0)\t;\n" +
			"}\n" +
			"\n" +
			"OUTPUTS {\n" +
			"\ty ;\n" +
			"}\n" +
			"\n" +
			"## New Addition of required constraints on inputs\n" +
			"## Precedence &&, ||\n" +
			"## Separate constraints => &&\n" +
			"REQUIRES {\n" +
			"\n" +
			"\tRSC1 : (x1*x3 < x2) || (x2 >= x4) ;\n" +
			"\t#RSC2 : (x4 < x3+x1) && (x4+x2 < x3*x3) || (x2 < x4) ;\n" +
			"\n" +
			"}\n" +
			"\n" +
			"\n" +
			"EXPRS {\n" +
			"\th rnd64 = (x2/x1) + x3 ;\n" +
			"\tg rnd64 = x1 + x1*x2 ;\n" +
			"\n" +
			"\tif ( x1-x2 < 0.4 ) then\n" +
			"\t\tg rnd64 = 1 + 1/g ;\n" +
			"\t\th rnd64 = x3 + x4 ;\n" +
			"\telse\n" +
			"\t\tif (( x3*x3 > 0.25 ) && (x4*h <= x1*x1)) then\n" +
			"\t\t\tg rnd64 = h + x2*x3 ;\n" +
			"\t\tendif\n" +
			"\tendif\n" +
			"\n" +
			"\ty rnd64 = g + sin(x4) ;\n" +
			"}\n"
	},
	{
		ex: "INPUTS\t{ m0 fl64 :(-1.0, 1.0) ;\n" +
			"\t\t  m1 fl64 :(-1.0, 1.0) ;\n" +
			"\t\t  m2 fl64 :(-1.0, 1.0) ;\n" +
			"\t\t  w0 fl64 :(0.00001, 1.0) ;\n" +
			"\t\t  w1 fl64 :(0.00001, 1.0) ;\n" +
			"\t\t  w2 fl64 :(0.00001, 1.0) ;\n" +
			"\t\t  a0 fl64 :(0.00001, 1.0) ;\n" +
			"\t\t  a1 fl64 :(0.00001, 1.0) ;\n" +
			"\t\t  a2 fl64 :(0.00001, 1.0) ;\n" +
			"\t\t }\n" +
			"\n" +
			"OUTPUTS { r ; }\n" +
			"\n" +
			"EXPRS {\n" +
			"\t\te1 rnd64 = (((w2 * (0.0 - m2)) * (-3.0 * ((1.0 * (a2/w2)) * (a2/w2)))) * 1.0) ;\n" +
			"\t\te2 rnd64 = (((w1 * (0.0 - m1)) * (-3.0 *((1.0 * (a1/w1)) * (a1/w1)))) * 1.0) ;\n" +
			"\t\te3 rnd64 = (((w0 * (0.0 - m0)) * (-3.0 * ((1.0 * (a0/w0)) * (a0/w0)))) * 1.0) ;\n" +
			"\t\te4 rnd64 = (((w0 * (3.0 - m0)) * (3.685 * ((1.0 * (a1/w0)) * (a0/w2)))) * 1.0) ;\n" +
			"\t\tr rnd64 = (0.0 + (e1 + (e2 + (e3 + 0.0)))) ;\n" +
			"\t  }\n"
	},
	{
		ex: "\n" +
			"\n" +
			"INPUTS {\n" +
			"\tax\tfl64 : (-3.657 - 0.5, -3.657 + 0.5); ay\tfl64 : (5.43 - 0.5, 5.43 + 0.5); az\tfl64 : (-6.23 - 0.5, -6.23 + 0.5);\n" +
			"\tbx\tfl64 : (7.893 - 0.5, 7.893 + 0.5); by\tfl64 : (-6.67 - 0.5, -6.67 + 0.5); bz\tfl64 : (8.92 - 0.5, 8.92 + 0.5);\n" +
			"\tcx\tfl64 : (4.441 - 0.5, 4.441 + 0.5); cy\tfl64 : (8.34 - 0.5, 8.34 + 0.5); cz\tfl64 : (-3.35 - 0.5, -3.35 + 0.5);\n" +
			"\n" +
			"\tpx\tfl64 : (-2 , -2); py\tfl64 : (3  , 3 ); pz\tfl64 : (5  , 5 );\n" +
			"}\n" +
			"\n" +
			"OUTPUTS {\n" +
			"\t#ood; \n" +
			"\t#nu ;\n" +
			"\tu ;\n" +
			"\t#w ;\n" +
			"\t#w ;\n" +
			"\t#mz ;\n" +
			"}\n" +
			"\n" +
			"\n" +
			"EXPRS {\n" +
			"\n" +
			"\tv0_x = bx - ax ; v0_y = by - ay ; v0_z = bz - az ;\n" +
			"\tv1_x = cx - ax ; v1_y = cy - ay ; v1_z = cz - az ;\n" +
			"\tv2_x = px - ax ; v2_y = py - ay ; v2_z = pz - az ;\n" +
			"\n" +
			"\td00 = v0_x*v0_x + v0_y*v0_y + v0_z*v0_z ;\n" +
			"\td01 = v0_x*v1_x + v0_y*v1_y + v0_z*v1_z ;\n" +
			"\td11 = v1_x*v1_x + v1_y*v1_y + v1_z*v1_z ;\n" +
			"\td20 = v2_x*v0_x + v2_y*v0_y + v2_z*v0_z ;\n" +
			"\td21 = v2_x*v1_x + v2_y*v1_y + v2_z*v1_z ;\n" +
			"\n" +
			"\tdenom = d00*d11 - d01*d01 ;\n" +
			"\n" +
			"\tv = (d11 * d20 - d01 * d21) / denom ;\n" +
			"\tw = (d00 * d21 - d01 * d20) / denom ;\n" +
			"\tu = 1.0 - v - w;\n" +
			"\n" +
			"}\n"
	}
];

