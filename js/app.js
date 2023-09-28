console.log('app.js is running');
// defining a object literal
// key value Pairs  <- want in your language

// keys, name, color, isReal, etc
// values, "Big FOot", 'Brown', true, etc
const bigFoot = {
	name: 'Big Foot',
	color: 'Brown',
	isReal: true,
	height: 7, // feet
	diet: 'vegeterian',
	woodlandFriends: [{name: 'bunny', age: 4}, {name: 'squirrel', age: 5}],
}
console.log(bigFoot)
console.log(bigFoot.woodlandFriends[0].age)




function sayHello(name) {
    return `Hello, ${name}!`;
  }
  
  bigFoot.woodlandFriends.forEach(friend => {
    console.log(sayHello(friend));
  });



// I want to see if bigFoot is real
// retrieve the value of the isReal key (property) in bigfoot
console.log(bigFoot.isReal)

// Getting a property (Value) ^^^^

// See what diet bigFoot has
console.log(bigFoot.diet)


// SET KEY VALUE PARTS
bigFoot.diet = 'carnivore';
console.log(bigFoot);


    
    
    const album1 = {
        title: 'Talking Heads',
        albumDetails: {
            released: new Date('September 16, 1977'),
            label: 'Sire',
            formats: ['LP']
        }
    }
    
    // Exercise 1:  Update the title property of album1 from 'Talking Heads' to 'Talking Heads - 77', then assign that property to a variable named title
    
    album1.title = 'Talking Heads - 77';
    console.log(album1.title);
    
    
    
    
    
    // Exercise 2: Assign the string 'Sire' from album1 to a variable named label
    
    album1.label ='sire';
    console.log(album1.label);
    
    
    
    const album2 = {
        title: 'More Songs About Buildings and Food',
        albumDetails: {
            released: new Date('July 14, 1978'),
            label: 'Sire',
            formats: ['LP', '8-track']
        }
    };
    
    const album3 = {
        title: 'Fear of Music',
        albumDetails: {
            released: 'August 3, 1979',
            label: 'Sire',
            formats: ['Cassette']
        }
    };
    
    // Exercise 3: Accessing the string 'LP' from album2's formats array, add it to the end of album3's formats array.
    
    
    album3.albumDetails.formats.push(album2.albumDetails.formats[0]);
    console.log(album3.albumDetails.formats);
    
    
    
    // Exercise 4:  Update the released property of album3 from a string into a Date object using that string
    album3.albumDetails.released = new Date(album3.albumDetails.released);
    console.log(album3.albumDetails.released);
    
    
    
    
    const album4 = {
        title: 'Remain in Light',
        albumDetails: {
            released: new Date('October 8, 1980'),
            formats: ['Cassette', 'LP']
        }
    };
    
    // Exercise 5:  Add a property named label with the value 'Sire' to album4's albumDetails property
    
    album4.albumDetails.labels = 'Sire';
    console.log(album4.albumDetails.labels);

    
    
    
  const album5 = {
    title: 'Little Creatures',
    albumDetails: {
      released: new Date('June 10, 1985'),
      labels: ['Sire', 'emi'],
      formats: ['CD', 'cassette', 'LP']
    }
  };
  
  // Exercise 6:  Update the value 'emi' within album5's labels array to 'EMI'
  album5.albumDetails.labels[1] = 'EMI';
  console.log(album5.albumDetails.labels);
  

  
  
  const album6 = {
    title: 'True Stories',
    albumDetails: {
      released: new Date('October 7, 1986'),
      labels: ['Sire, EMI'],
      formats: ['CD', 'cassette', 'LP']
    }
  };
  
  // Exercise 7:  Assign album6's formats array to a variable named formats
  let formats = album6.albumDetails.formats
  console.log(formats);

  
  
  
  const album7 = {
    title: 'Naked',
    albumDetails: {
      released: new Date('March 15, 1988'),
      labels: ['Sire', 'EMI'],
      formats: ['CD', 'cassette', 'LP']
    }
  };
  
  const talkingHeadsAlbums = [
    album1,
    album2,
    album3,
    album4,
    album5,
    album6,
    album7
  ];
  
  // Exercise 8:  Using the talkingHeadsAlbums array, assign album5's labels property to a variable named labels
  labels = talkingHeadsAlbums[4].albumDetails.labels;
  console.log(labels);
  
  
  
  // Exercise 9:  Using the talkingHeadsAlbums array, assign album7's released property to album6's released property
  
  
  
  
  // Exercise 10:  Using the pre-defined variable named albumIdx below, assign the albumDetails object of the album located within the talkingHeadsAlbums array at the index represented by the value of albumIdx to a variable named albumDetails
  
  let albumIdx = 4;