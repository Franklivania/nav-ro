const SkinTone = {
    // Define the list of available skin colors
    colorset: [
        { name: "8B Porcelain Beige", r: 244, g: 211, b: 196 },
        { name: "8S Porcelain Sand", r: 244, g: 216, b: 192 },
        { name: "12B Fair Beige", r: 245, g: 208, b: 190 },
        { name: "12N Fair Neutral", r: 238, g: 208, b: 184 },
        { name: "12S Fair Sand", r: 239, g: 209, b: 180 },
        { name: "14H Fair Honey", r: 243, g: 198, b: 175 },
        { name: "15S Fair-Light Sand", r: 243, g: 209, b: 181 },
        { name: "16N Fair-Light Neutral", r: 233, g: 197, b: 171 },
        { name: "18B Fair-Light Beige", r: 245, g: 200, b: 181 },
        { name: "18H Fair-Light Honey", r: 236, g: 191, b: 167 },
        { name: "20B Light Beige", r: 237, g: 192, b: 173 },
        { name: "20S Light Sand", r: 241, g: 205, b: 173 },
        { name: "22N Light Neutral", r: 233, g: 189, b: 160 },
        { name: "22H Light Honey", r: 233, g: 186, b: 160 },
        { name: "22B Light Beige", r: 237, g: 185, b: 163 },
        { name: "27H Light-Medium Honey", r: 228, g: 175, b: 143 },
        { name: "27S Light-Medium Sand", r: 221, g: 175, b: 140 },
        { name: "27B Light-Medium Beige", r: 228, g: 172, b: 147 },
        { name: "29N Light-Medium Neutral", r: 221, g: 168, b: 139 },
        { name: "34S Medium Sand", r: 215, g: 167, b: 131 },
        { name: "35B Medium Beige", r: 222, g: 158, b: 130 },
        { name: "35H Medium Honey", r: 218, g: 158, b: 124 },
        { name: "35N Medium Neutral", r: 217, g: 161, b: 123 },
        { name: "35G Medium Golden", r: 221, g: 168, b: 124 },
        { name: "36S Medium-Tan Sand", r: 211, g: 158, b: 118 },
        { name: "37N Medium-Tan Neutral", r: 218, g: 158, b: 124 },
        { name: "37G Medium-Tan Golden", r: 217, g: 164, b: 124 },
        { name: "38N Medium-Tan Neutral", r: 212, g: 154, b: 117 },
        { name: "42G Tan Golden", r: 202, g: 145, b: 102 },
        { name: "42S Tan Sand", r: 202, g: 140, b: 99 },
        { name: "44H Tan Honey", r: 210, g: 146, b: 110 },
        { name: "44N Tan Neutral", r: 204, g: 146, b: 108 },
        { name: "45H Tan Honey", r: 204, g: 142, b: 105 },
        { name: "47H Tan-Deep Honey", r: 205, g: 141, b: 106 },
        { name: "47S Tan-Deep Sand", r: 196, g: 136, b: 99 },
        { name: "47N Tan-Deep Neutral", r: 199, g: 137, b: 100 },
        { name: "49G Tan-Deep Golden", r: 186, g: 128, b: 88 },
        { name: "51N Deep Neutral", r: 195, g: 130, b: 90 },
        { name: "53N Deep Neutral", r: 176, g: 111, b: 71 },
        { name: "53S Deep Sand", r: 175, g: 112, b: 71 },
        { name: "53H Deep Honey", r: 184, g: 114, b: 80 },
        { name: "53G Deep Golden", r: 176, g: 115, b: 70 },
        { name: "57N Rich Neutral", r: 154, g: 99, b: 69 },
        { name: "57S Rich Sand", r: 157, g: 97, b: 63 },
        { name: "57G Rich Golden", r: 157, g: 97, b: 64 },
        { name: "58H Rich Honey", r: 153, g: 92, b: 63 },
        { name: "59S Rich Sand", r: 134, g: 76, b: 39 },
        { name: "60N Mahogany", r: 120, g: 60, b: 26 },
        { name: "60G Mahogany Golden", r: 126, g: 70, b: 45 },
        { name: "61H Espresso", r: 96, g: 51, b: 43 }
    ],

    // Define the maximum allowable difference between colors
    maxColorDifference: 50,

    findClosestColor: function (colorToMatch) {
        // Initialize variables to hold the closest color and its distance
        let closestColor = null;
        let closestDistance = Infinity;

        // Loop through the available colors to find the closest match
        for (let i = 0; i < this.colorset.length; i++) {
            const color = this.colorset[i];

            // Calculate the Euclidean distance between the colors
            const distance = Math.sqrt(
                Math.pow(color.r - colorToMatch.r, 2) +
                Math.pow(color.g - colorToMatch.g, 2) +
                Math.pow(color.b - colorToMatch.b, 2)
            );

            // Check if the distance is within the maximum allowable difference
            if (distance < this.maxColorDifference && distance < closestDistance) {
                closestColor = color;
                closestDistance = distance;
            }
        }

        // Print the closest color
        if (closestColor) {
            return closestColor;
        } else {
            console.error("No close match was found.");
            return null
        }
    }
}

export default SkinTone