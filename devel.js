define([
    'amber/devel',
    './deploy',
    // --- packages used only during development begin here ---
    'minimapless/MiniMapless-Tests',
   	'amber-flow/Flow-Binding-Tests',
	'amber-flow/Flow-Templates-Tests',
	'amber-flow/Flow-Tests',
	'amber-flow/App-Tests'
    // --- packages used only during development end here ---
], function (amber) {
    return amber;
});
