#! /usr/bin/env node

var cfg = {
  removeSpaces :true,
  randomCaps : true,
  capsOcurrence: .5,
  addHashTag: false,
}

var matches =       ['a','e','i','g','t','s','z','o'];
var replacements =  ['4','3','1','6','7','5','2','0'];

var input_text = process.argv[2]||"el otro dia sali de casa en camiseta, eso es ser leet";
var arr = input_text.split('');

for (var x = 0; x < arr.length; x++){

  if (arr[x] == ' ' && cfg.removeSpaces)
    arr[x] = '';

  if (cfg.randomCaps)
    arr[x] = (Math.random() > cfg.capsOcurrence) ? arr[x]:arr[x].toUpperCase();

  arr[x] = (matches.indexOf(arr[x].toLowerCase()) != -1)? replacements[matches.indexOf( arr[x].toLowerCase() )] : arr[x];

}

process.stdout.write(arr.join(''));