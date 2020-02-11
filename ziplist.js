const test1 = [1,2,3];
const test2 = ["a","b","c"];

function zipList(num1, num2){
  let zips = [];
  let i = 0;
  let j = 0;
  while(j < num1.length){
    zips[i] = num1[j];
    zips[i+1] =num2[j];
    i += 2;
    j++;
  }
  return zips;

}
console.log(zipList(test1, test2));

function zipListTheSimpleWay(nums1, nums2){
  let zipped = _.zip(nums1, nums2);
  return _.flatten(zipped);
}
console.log(zipListTheSimpleWay(test1,test2));