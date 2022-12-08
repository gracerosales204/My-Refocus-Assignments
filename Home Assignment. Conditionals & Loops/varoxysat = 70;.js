var oxysat = 95;

function isOxySatnormal(oxysat) {
    if (oxysat > 95) {
        console.log("Normal reading");
    } else if ((oxysat >= 92) && (oxysat < 95)) {
        console.log("Seek advice from health professionals.");
    } else if (oxysat < 92) {
        console.log("Seek urgent medical advice.");
    } else if (oxysat=95) {
        console.log("Acceptable to continue home monitoring.");
    }
};
isOxySatnormal(oxysat);

var pulseRateBpm = 130;

function isPulseRateNormal(pulseRateBpm) {
    if ((pulseRateBpm >= 40) && (pulseRateBpm <= 100)) {
        console.log("Normal Reading");
    } else if ((pulseRateBpm >= 101) && (pulseRateBpm <=109)) {
        console.log("Acceptable to continue home monitoring")
    } else if ((pulseRateBpm >= 110) && (pulseRateBpm <= 130)) {
        console.log("Seek advice from health professionals.");
    } else if (pulseRateBpm >= 131) {
        console.log("Seek urgent medical advice.");
    }
};
isPulseRateNormal(pulseRateBpm);