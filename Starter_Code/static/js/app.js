// var path = "samples.json"
// var dataSamples = JSON.parse(path)
// console.log(dataSamples)

// See if the data is loading correctly
// var data = d3.json("samples.json").then((importedData) => {
//     console.log(importedData);
//     return importedData;
// });
// console.log(data);

// Add options to the drop down menue
function addOptions() {
    var grab = d3.select("#selDataset");
    d3.json("samples.json").then((options) => {
        var samplenames = options.names;
        console.log(samplenames)
        samplenames.forEach((sample) => {
            grab.append("option")
                .text(sample)
                .property("value", sample)
        });
    });
};






// Add option change handler to observe the drop down menue
d3.selectAll("#selDataset").on("change", optionChanged);

























