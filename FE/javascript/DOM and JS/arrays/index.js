const nums = [5, 7, 6, 9, 8];

for (let i=0; i< nums.length;i++) {
    console.log(nums[i]);
}

for(const num of nums) {
    console.log(num);
}

nums.forEach(nums=> console.log(nums))

