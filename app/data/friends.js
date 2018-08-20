
// persistent data
var friendsArray = [
  {
    friendName: "Bob",
    friendImg: "http://d279m997dpfwgl.cloudfront.net/wp/2016/09/bob-shaffer.jpg",
    scores: [
    	1,
		2,
		3,
		4,
		5,
		4,
		3,
		2,
		1,
		2
	]
  },
  {
    friendName: "Fran",
    friendImg: "https://peopledotcom.files.wordpress.com/2018/06/lady-gaga.jpg",
    scores: [
    	3,
		1,
		4,
		1,
		2,
		4,
		4,
		1,
		3,
		2
	]
  },
  {
  	friendName: "David",
    friendImg: "http://www.pngmart.com/files/3/Man-PNG-Pic.png",
    scores: [
    	2,
		2,
		2,
		2,
		2,
		2,
		2,
		2,
		2,
		2
	]
  }
];

// makes it accessible to other files w/ require
module.exports = friendsArray;