(function() {
    !function() {
        var d3 = {
            version: "3.4.4"
        };
        d3.descending = function(a, b) {
            return b < a ? -1 : b > a ? 1 : b >= a ? 0 : NaN;
        };
        if (typeof define === "function" && define.amd) {
            define(d3);
        } else if (typeof module === "object" && module.exports) {
            module.exports = d3;
        } else {
            this.d3 = d3;
        }
    }();
})();