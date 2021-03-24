function  calculateDepth(arr) {
        let maxDepth = 1;
        arr.forEach(element => {
            if (Array.isArray(element)) {
                maxDepth = Math.max.apply(maxDepth, this.calculateDepth(element) + 1)
            }
        });
return maxDepth;
}
arr = [1, 2, 3, 4, 5, [1]];
calculateDepth(arr);
