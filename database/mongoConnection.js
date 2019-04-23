const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/sdc', {useNewUrlParser: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connected to mongodb');
  const reviewSchema = new mongoose.Schema({
    id: String,
    title: String,
    review: String,
    stars: String,
    created_at: String,
    product_id: String,
    user_id: String
  });
  const Review = mongoose.model('Review', reviewSchema);

  var silence = new Review({ title: 'hello' });
  console.log(silence.title);
});

db.createCollection('reviews', {autoIndexId : true});


const words1 = ["Fringilla", "nulla", "scelerisque", "integer", "vestibulum", "tristique", "a", "magna", "cubilia", "a", "tempus", "suspendisse", "sociis", "scelerisque", "a", "a", "phasellus", "natoque", "a.", "A", "sagittis", "sed", "purus", "ac", "at", "proin", "a", "ullamcorper", "leo", "tortor", "pretium", "a", "donec", "suspendisse", "a", "eget", "id", "ante", "proin", "egestas", "ad", "a", "vulputate", "eu", "ullamcorper", "suspendisse", "aenean", "augue.", "Nec", "lectus", "mi", "facilisis", "fames", "adipiscing", "iaculis", "parturient", "ullamcorper", "cum", "turpis", "penatibus", "a", "commodo", "himenaeos", "natoque", "a", "diam.", "At", "feugiat", "cubilia", "conubia", "non", "consectetur", "ad", "ut", "ullamcorper", "nulla", "a", "quisque", "vestibulum", "nascetur", "curabitur", "leo", "ridiculus", "cursus", "vestibulum", "interdum", "quis", "vestibulum", "at", "ac", "scelerisque", "a", "facilisis", "id.Praesent", "hac", "at", "a", "parturient", "class", "gravida."];
const words2 = ["Erat", "vestibulum", "consectetur", "interdum", "commodo", "fringilla", "nullam", "id", "et", "suspendisse", "luctus", "condimentum", "faucibus", "justo", "a", "aliquet", "ullamcorper", "mus", "gravida", "taciti", "elementum", "consectetur", "scelerisque", "habitasse", "tempus", "vel", "consequat", "suscipit.", "Habitant", "a", "tristique", "suscipit", "non", "ornare", "quis", "parturient", "fringilla", "et", "ultrices", "eleifend", "vestibulum", "congue", "porttitor", "a", "tellus", "parturient", "sagittis", "ut", "enim", "non", "aenean", "dictumst", "adipiscing", "class", "lacus.", "A", "sapien", "a", "ultrices", "fermentum", "cum", "luctus", "ac", "eget", "lobortis", "himenaeos", "elit", "donec", "a", "a", "montes", "curabitur", "consequat", "vestibulum.", "Arcu", "montes", "justo", "penatibus", "primis", "lacinia", "suspendisse", "lobortis", "vulputate", "ut", "parturient", "faucibus", "a", "ullamcorper", "nisl", "blandit", "non", "erat", "habitasse", "enim", "potenti", "torquent", "fusce", "nascetur", "torquent.", "Enim."];

const generateData = () => {
  for (let i = 0; i < 10; i ++) {
    let index1 = Math.floor(Math.random() * 100);
    let index2 = Math.floor(Math.random() * 100);
    db.reviews.insert(words1[index1] + ',' + words2[index2] + ',' + Math.floor(Math.random() * 5) + ',' + faker.date.between('01/01/2019','04/01/2019') + ',' + Math.floor(Math.random() * 10000000) + ',' + Math.floor(Math.random() * 100) + '\n');
  }
  file.end();
}

generateData();

db.reviews.insert({"name" : "tutorialspoint"})

// module.exports = mongoose.model('Review', reviewSchema);

