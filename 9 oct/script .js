  let str = 'we are developers';
  let str1 = "we are developers";
  let str2 = `we are developers`;

  console.log(str);
  console.log(str[1]);
  console.log(str[5]);
 let count = 0;

  for(let i = 0;i<str.length;i++){
    console.log(i);
    console.log(str[i]);
    count++;  
  }
  console.log(count);