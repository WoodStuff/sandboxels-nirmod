//Mod by Sophie
elements.chalcopyrite_ore = {
	color: ["#8c7538","#4f4f4f","#949494"],
	behavior: behaviors.POWDER,
	reactions: {
		steel: { "elem1": "chalcopyrite_dust", "elem2": "steel" },
	},
	tempHigh: 950,
	stateHigh: "magma",
	category: "refining",
	state: "solid",
	density: 2950,
},
elements.chalcopyrite_dust = {
	color: ["#ac9558","#4f4f4f"],
	behavior: behaviors.POWDER,
	reactions: {
		oil: { "elem1": "copper_concentrate", "elem2": "tailings" },
		slag: { "elem1": "chalcopyrite_dust", "elem2": "chalcopyrite_dust" },
	},
	tempHigh: 950,
	stateHigh: "magma",
	state: "solid",
	density: 3500,
	hidden: true,
},
elements.copper_concentrate = {
	color: ["#343c27","#4f4f4f"],
	behavior: behaviors.POWDER,
	reactions: {
		borax: { "elem1": "fluxed_copper_concentrate", "elem2": ["slag",null,null,null,null,null,null,null,null,null] },
		limestone: { "elem1": "fluxed_copper_concentrate", "elem2": ["slag",null,null,null,null,null,null,null,null,null] },
	},
	tempHigh: 1000,
	stateHigh: "magma",
	state: "solid",
	density: 7000,
	hidden: true,
},
elements.fluxed_copper_concentrate = {
	color: ["#444c37","#5f5f5f"],
	behavior: behaviors.POWDER,
	tempHigh: 1050,
	stateHigh: "molten_matte_copper",
	state: "solid",
	density: 7000,
	hidden: true,
},
elements.molten_matte_copper = {
	color: "#b6988d",
	behavior: behaviors.LIQUID,
	tempLow: 1000,
	stateLow: "matte_copper",
	state: "liquid",
	density: 6000,
	hidden: true,
},
elements.matte_copper = {
	color: "#96786d",
	behavior: behaviors.WALL,
	reactions: {
		borax: { "elem1": "fluxed_matte_copper", "elem2": ["slag",null,null,null,null,null,null,null,null,null] },
		limestone: { "elem1": "fluxed_matte_copper", "elem2": ["slag",null,null,null,null,null,null,null,null,null] },
	},
	tempHigh: 1050,
	stateHigh: "molten_matte_copper",
	state: "solid",
	density: 7500,
	hidden: true,
},
elements.fluxed_matte_copper = {
	color: "#a6887d",
	behavior: behaviors.WALL,
	tempHigh: 1070,
	stateHigh: "molten_blister_copper",
	state: "solid",
	density: 7200,
	hidden: true,
},
elements.molten_blister_copper = {
	color: "#b6887d",
	behavior: behaviors.LIQUID,
	tempLow: 1020,
	stateLow: "blister_copper",
	state: "liquid",
	density: 6050,
	hidden: true,
},
elements.blister_copper = {
	color: "#96786d",
	behavior: behaviors.WALL,
	reactions: {
		fire: { "elem1": "copper", "elem2": null },
	},
	tempHigh: 1050,
	stateHigh: "molten_blister_copper",
	state: "solid",
	density: 7500,
	hidden: true,
	conduct: 0.8,
},
elements.slag = {
	color: ["#b3907d","#949494"],
	behavior: behaviors.POWDER,
	tempHigh: 950,
	stateHigh: "magma",
	category: "refining",
	state: "solid",
	density: 4000,
},
elements.tailings = {
	color: "#200000",
	behavior: behaviors.LIQUID,
	category: "liquids",
	tempHigh: 1000,
	stateHigh: "fire",
	burn: 100,
	burnTime: 30,
	viscosity: 300,
	state: "liquid",
	density: 1300,
	hidden: true,
}
