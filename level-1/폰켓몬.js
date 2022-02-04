function solution(nums) {
  const half = nums.length / 2;
  nums = [...new Set(nums)];
  if (half > nums.length) return nums.length;
  else return half;
}
